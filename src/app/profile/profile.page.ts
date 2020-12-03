import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public ngroute: Router,private fbauth: AngularFireAuth) { }

  ngOnInit() {
  }

  async doLogout(): Promise<void> {
    await this.fbauth.signOut().then(() => {
      this.ngroute.navigate(['login']);
    });
  }
}
