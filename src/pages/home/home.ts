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
    this.http.get('/Contactos/Contactos/')
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

  clickContacto(avatar,nombre,correo,telefono,facebook,instagram,twitter){
    this.navCtrl.push(this.contactsInfoPage,{avatar:avatar,nombre:nombre,correo:correo,telefono:telefono,facebook:facebook,instagram:instagram,twitter:twitter});
  }
}
