import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { ModalController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { Members } from '../../providers/members/members';
import { RegisterPage } from '../register/register';

@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {

  username: string;
  password: string;

  constructor(private navCtrl: NavController, private modCtrl: ModalController, private http: Http, private memberService: Members) {

  }

  
  regPage(){
    let modPage = this.modCtrl.create(RegisterPage);
    modPage.present();
  }

}
