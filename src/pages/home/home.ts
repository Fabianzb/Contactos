import { Component } from '@angular/core';
import { NavController, Avatar } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ContactosPage } from '../contactos/contactos';
import { ContactInfoPage } from '../contact-info/contact-info';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contacts:any;
  contactosPage = ContactosPage;
  contactsInfoPage = ContactInfoPage;

  constructor(public navCtrl: NavController, public http: HttpClient) {
    
  }

  ionViewWillEnter(){
    this.http.get('/Store/Store/')
    .subscribe(data =>{
      this.contacts=data;
      console.log(JSON.stringify(data));
    }, error=>{
      console.log(JSON.stringify(error));
    });

  }
  clickAdd(){
    console.log('clickAdd');
    this.navCtrl.push(this.contactosPage);
  }

  clickContacto(avatar,nombre,marca,serie,precio){
    this.navCtrl.push(this.contactsInfoPage,{avatar:avatar,nombre:nombre,marca:marca,serie:serie,precio:precio});
  }
}
