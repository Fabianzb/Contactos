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
  avatar = '../assets/imgs/Food.png';
  nombre = '';
  marca = '';
  serie = '';
  precio = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, private alertCtrl: AlertController) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactosPage');
  }

  addContact(){
    console.log('addContact');
    const productos = {
      avatar: this.avatar,
      nombre: this.nombre,
      marca: this.marca,
      serie: this.serie,
      precio: this.precio
    };
    console.log(JSON.stringify(productos));
    this.http.post('/Store/Store/',productos)
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
      title: 'Productos',
      subTitle: 'Producto Agregado Correctamente!',
      buttons: ['OK']
    });
    alert.present();
  }
}

