import { Component, OnInit } from '@angular/core';
import { AngularFirestore  } from "@angular/fire/firestore";

@Component({
  selector: 'app-rumah',
  templateUrl: './rumah.page.html',
  styleUrls: ['./rumah.page.scss'],
})
export class RumahPage implements OnInit {
  private Data : any[] =[];
  constructor(    private firebaseDB: AngularFirestore,
    ) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.Data = [];
    this.firebaseDB.collection('rumah').valueChanges().subscribe( data => {
      this.Data = data;
      console.log(this.Data);
    })
  }
}
