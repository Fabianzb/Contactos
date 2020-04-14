import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContactInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-info',
  templateUrl: 'contact-info.html',
})
export class ContactInfoPage {
  avatar = '';
  nombre = '';
  marca = '';
  serie = '';
  precio = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.avatar = navParams.get('avatar');
    this.nombre = navParams.get('nombre');
    this.marca = navParams.get('marca');
    this.serie = navParams.get('serie');
    this.precio = navParams.get('precio');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactInfoPage');
  }

}
