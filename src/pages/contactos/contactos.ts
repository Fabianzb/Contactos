import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ContactosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contactos',
  templateUrl: 'contactos.html',
})
export class ContactosPage {
  avatar = '../assets/imgs/Contacto.png';
  nombre = '';
  correo = '';
  telefono = '';
  facebook = '';
  instagram = '';
  twitter = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, private alertCtrl: AlertController) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactosPage');
  }

  addContact(){
    console.log('addContact');
    const contactos = {
      avatar: this.avatar,
      nombre: this.nombre,
      correo: this.correo,
      telefono: this.telefono,
      facebook: this.facebook,
      instagram: this.instagram,
      twitter: this.twitter
    };
    console.log(JSON.stringify(contactos));
    this.http.post('/Contactos/Contactos/',contactos)
    .subscribe(data => {
      console.log(JSON.stringify(data));
      this.navCtrl.pop();
    }, 
    error => {
      console.log(JSON.stringify(error));
      this.navCtrl.pop();
    });
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Contacto',
      subTitle: 'Contacto Agregado Correctamente!',
      buttons: ['OK']
    });
    alert.present();
  }
}

