import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public ngroute: Router,private firebaseAuthService: AuthService) { }
  titleMode = 'hide';
  position = 'center';

  async doLogout(){
    this.firebaseAuthService.signOut()
    .then(res => {
      console.log(res);
      this.ngroute.navigate(['login']);
    }).catch(error => {
  console.log(error);
});
}

}
