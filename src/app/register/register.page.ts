import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Validator } from '../helpers/validation.helpers';
import { ToastService } from '../services/toast.service';
import { Router } from '@angular/router';
import { AngularFirestore  } from "@angular/fire/firestore";
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  signupform: FormGroup;
  loading = null;

  constructor(private fbauth: AngularFireAuth,
    public signupFormbuilder: FormBuilder,
    private valuechecker: Validator,
    private toastservice: ToastService,
    private fbstore: AngularFirestore,
    private loadingCtrl: LoadingController,
    private firebaseAuthService: AuthService,

    public ngroute: Router) {
    this.signupform = this.signupFormbuilder.group({
      useremail: ['', Validators.required, this.valuechecker.emailCheck],
      userpass: ['', [Validators.required, Validators.minLength(6)] ],
      nama: ['', [Validators.required] ],
      tgl: ['', [Validators.required] ]
    })
  }

  ngOnInit() {
  }


  async doSignup(){
    if (this.signupform.valid) {
      this.firebaseAuthService.signUp(this.signupform.get('nama').value, new Date(this.signupform.get('tgl').value), this.signupform.get('useremail').value,  this.signupform.get('userpass').value)
          .then(
            res => {
              console.log(res);
        }, (err) => {
          console.log(err.message);
          this.firebaseAuthService.presentToast(err.message, 'danger');
        });
    }
    this.signupform.reset();
  }


  goToSignup(){
    this.ngroute.navigateByUrl('login');
  }

}
