import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor( public afAuth: AngularFireAuth,private router: Router ) { }

  ngOnInit() {
  }

  onLoginGoogle(){
    this.afAuth.auth.signInWithPopup( new auth.GoogleAuthProvider());
    this.router.navigate(['panel/dashboard'])
    this.afAuth.auth.signOut();
  }
  onLoginFacebook(){
    this.afAuth.auth.signInWithPopup( new auth.FacebookAuthProvider());
  }
}
