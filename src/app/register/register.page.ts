import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Validator } from '../helpers/validation.helpers';
import { ToastService } from '../services/toast.service';
import { Router } from '@angular/router';
import { AngularFirestore  } from "@angular/fire/firestore";
import { LoadingController } from '@ionic/angular';

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

  async doSignup() {
    //console.log(this.signupform.get('useremail').value)
      await this.presentLoading().then(() => {
          this.fbauth.createUserWithEmailAndPassword(this.signupform.get('useremail').value, this.signupform.get('userpass').value)
          .then(data => {
            let id = data['user']['uid'];
            let user = {
            email : this.signupform.get('useremail').value,
            nama : this.signupform.get('nama').value,
            tgl :  new Date(this.signupform.get('tgl').value),
            profilePic : 'https://firebasestorage.googleapis.com/v0/b/sebaruque.appspot.com/o/avatar-placeholder.png?alt=media&token=ff3548ba-e584-4446-833d-d141039270b1',
          }
          
          this.fbstore.collection("users").doc(id).set(user);
          this.ngroute.navigate(['login']);
          this.loading.dismiss();
        })
        .catch(error => {
        this.loading.dismiss();
        this.toastservice.showToast(error.message, 2000);
        //console.log(error.message);
      });
    });

    
  }

  goToSignup(){
    this.ngroute.navigateByUrl('login');
  }

  private async presentLoading() {
    this.loading = await this.loadingCtrl.create({
        cssClass: 'my-custom-class',
        message: 'Membuat Akun...',
    });
    await this.loading.present();
}
}
