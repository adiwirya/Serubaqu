import { Component, OnInit } from '@angular/core';
import { AngularFirestore  } from "@angular/fire/firestore";

@Component({
  selector: 'app-baju',
  templateUrl: './baju.page.html',
  styleUrls: ['./baju.page.scss'],
})
export class BajuPage implements OnInit {

  private Data : any[] =[];
  constructor(    private firebaseDB: AngularFirestore,
    ) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.Data = [];
    this.firebaseDB.collection('baju').valueChanges().subscribe( data => {
      this.Data = data;
      console.log(this.Data);
    })
  }

}
