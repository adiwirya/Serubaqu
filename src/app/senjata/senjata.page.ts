import { Component, OnInit } from '@angular/core';
import { AngularFirestore  } from "@angular/fire/firestore";


@Component({
  selector: 'app-senjata',
  templateUrl: './senjata.page.html',
  styleUrls: ['./senjata.page.scss'],
})
export class SenjataPage implements OnInit {

  private Data : any[] =[];
  constructor(    private firebaseDB: AngularFirestore,
    ) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.Data = [];
    this.firebaseDB.collection('senjata').valueChanges().subscribe( data => {
      this.Data = data;
      console.log(this.Data);
    })
  }

}
