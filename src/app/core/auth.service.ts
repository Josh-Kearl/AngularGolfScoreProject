import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { NotifyService } from './notify.service';

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string; 
  userTypeId?: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<User>;

  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private notify: NotifyService,
  ) {
    this.user = afAuth.authState;

    this.user.pipe(switchMap(user => {
      if (user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
        return of(null);
      }
   }))
  }


facebookLogin() {
  const provider = new auth.FacebookAuthProvider();
  return this.oAuthLogin(provider);
}

googleLogin() {
  const gProvider = new auth.GoogleAuthProvider();
  return this.oAuthLogin(gProvider);
}

private oAuthLogin(provider){
  return this.afAuth.auth.signInWithPopup(provider)
  .then((credential) => {
    this.updateUserData(credential.user)
  })
}

private updateUserData(user){
  const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

  const data: User = {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,

  }

  return userRef.set(data, {merge: true});
}

signOut(){
  this.afAuth.auth.signOut().then(() => {
    this.router.navigate(['/']);
  });
  }
  
}
