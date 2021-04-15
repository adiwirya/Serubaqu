import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {LoadingController, ToastController} from '@ionic/angular';
import {AngularFireDatabase} from '@angular/fire/database';
import {Router} from '@angular/router';
import { AngularFirestore  } from "@angular/fire/firestore";
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loading = null;

  constructor(
    public fireAuth: AngularFireAuth,
    public firebaseDB: AngularFireDatabase,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private fbstore: AngularFirestore,
    private router: Router,
  ) { }

  async signUp(Nama : string, tgl: any , email: string, password: string) {
    await this.presentLoading().then(() => {
      return new Promise<any>((resolve, reject) => {
        console.log(email,password,Nama,tgl);
        this.fireAuth.createUserWithEmailAndPassword(email, password)
            .then(
                async res => {
                  const path = 'Users/' + res.user.uid;
                  await this.fbstore.doc(path).set({
                    email: email,
                    nama: Nama,
                    tgl: tgl,
                    profilePic: 'https://firebasestorage.googleapis.com/v0/b/sebaruque.appspot.com/o/avatar.png?alt=media&token=0d5a60d5-8a4d-46d8-96a5-ad8b7571eed0'
                  });
                  const msg = 'Register Successfully!';
                  const clr = 'success';
                  await this.presentToast(msg, clr);
                  this.loading.dismiss();
                  await this.signIn(email, password);
                },
                err => {
                  reject(err);
                  const msg = 'Register Failed!';
                  const clr = 'danger';
                  this.presentToast(msg, clr);
                  this.loading.dismiss();
                }
            );
      });
    });
  }

  public async presentToast(tmessage: string, tcolor: string) {
    const toast = await this.toastCtrl.create({
      message: tmessage,
      duration: 2000,
      color: tcolor,
    });
    await toast.present();
  }

  private async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      duration: 2000,
      message: 'Please wait...',
    });
    await this.loading.present();
  }

  async signIn(email, password) {
    await this.presentLoading().then(() => {
      return new Promise<any>((resolve, reject) => {
          console.log(email,password);
        this.fireAuth.signInWithEmailAndPassword(email, password)
            .then(
                res => {
                  resolve(res);
                  const msg = 'Logged In!';
                  const clr = 'success';
                  this.presentToast(msg, clr);
                  this.loading.dismiss();
                  this.router.navigate(['home']);
                },
                err => {
                  reject(err);
                  const msg = 'Wrong Email or Password!';
                  const clr = 'danger';
                  this.presentToast(msg, clr);
                  this.loading.dismiss();
                }
            );
      });
    });
  }

  async signOut() {
    await this.presentLoading().then(() => {
      return new Promise((resolve, reject) => {
        if (this.fireAuth.currentUser) {
          this.fireAuth.signOut()
          .then(() => {
            console.log('Log Out');
            resolve();
            const msg = 'Logged Out!';
            const clr = 'success';
            this.presentToast(msg, clr);
            this.loading.dismiss();
          })
          .catch((error) => {
              reject();
              const msg = 'Something went wrong. Please try again.';
              const color = 'danger';
              this.presentToast(msg, color);
          });
        }
      });
    });
  }

  userDetails() {
    return this.fireAuth.user;
  }
  
  async logedin(){
    const authfbObserver = this.fireAuth.authState.subscribe( user => {
        if (user) {
        //   console.log(user['uid']);
          this.router.navigate(['home']);
          authfbObserver.unsubscribe();
        } else {
          // console.log(user['uid']);
          this.router.navigate(['login']);
          authfbObserver.unsubscribe();
        }
      });
  }
}
