import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from './user';
import * as auth from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;
  constructor(
    public aft: AngularFirestore,
    public auth: AngularFireAuth,
    public router: Router
  ) {
    this.auth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
      } else {
        localStorage.setItem('user', 'null');
      }
    });
  }

  // Login Method
  signIn(email: string, password: string) {
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {})
      .catch((error) => {
        window.alert(error.message);
      });
  }

  setUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.aft.doc(
      `user/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      name: user.name,
      suurName: user.suurName,
      age: user.age,
      imgUrl: user.imgUrl,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  // Sign Up
  signUp(email: string, password: string) {
    return this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.sendVerification();
        this.setUserData(res.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  sendVerification() {
    return this.auth.currentUser
      .then((user) => user?.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verification']);
      });
  }

  forgotPass(passRes: string) {
    return this.auth
      .sendPasswordResetEmail(passRes)
      .then(() => {
        window.alert('Email Was Sent');
      })
      .then((error) => {
        window.alert(error);
      });
  }

  authLogin(provider: any) {
    return this.auth
      .signInWithPopup(provider)
      .then((result) => {
        this.setUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  googleAuth(provider: any) {
    return this.authLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      if (res) {
        this.setUserData(res.user);
      }
    });
  }
  signOut() {
    return this.auth.signOut().then(() => {
      localStorage.removeItem('user');
    });
  }
}
