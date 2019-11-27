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
  correo = '';
  telefono = '';
  facebook = '';
  instagram = '';
  twitter = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.avatar = navParams.get('avatar');
    this.nombre = navParams.get('nombre');
    this.correo = navParams.get('correo');
    this.telefono = navParams.get('telefono');
    this.facebook = navParams.get('facebook');
    this.instagram = navParams.get('instagram');
    this.twitter = navParams.get('twitter');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactInfoPage');
  }

}
