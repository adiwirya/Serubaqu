import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Validator } from '../helpers/validation.helpers';
import { ToastService } from '../services/toast.service';
import { Router } from '@angular/router';
import { AngularFirestore  } from "@angular/fire/firestore";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginform: FormGroup;

  constructor(private fbauth: AngularFireAuth,
              public loginFormbuilder: FormBuilder,
              private valuechecker: Validator,
              private toastservice: ToastService,
              private fbstore: AngularFirestore,
              private firebaseAuthService: AuthService,
              public ngroute: Router) {
    this.loginform = this.loginFormbuilder.group({
      useremail: ['', Validators.required, this.valuechecker.emailCheck],
      userpass: ['', Validators.required, '']
    })
  }

  ngOnInit() {
  }

  async doLogin() {
    if (this.loginform.valid) {
      this.firebaseAuthService.signIn(this.loginform.get('useremail').value, this.loginform.get('userpass').value).then(
          (res) => {
            console.log(res);
          },
          (err) => {
            console.log(err);
          }
      );
      this.loginform.reset();
    }
  }

}
