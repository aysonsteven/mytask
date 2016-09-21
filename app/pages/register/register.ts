import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Members } from '../../providers/members/members';
import { NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/register/register.html',
})
export class RegisterPage {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  constructor(private navCtrl: NavController, private viewCtrl: ViewController, private http: Http, private membersService: Members) {
  }

  bckToLogin(){
    this.viewCtrl.dismiss();
  }

  register(){
 
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
 
        let user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword
        };
 
        this.http.post('http://localhost:3000/auth/register', JSON.stringify(user), {headers: headers})
          .subscribe(res => {
            this.membersService.init(res.json());
            this.navCtrl.setRoot(HomePage);
          }, (err) => {
            console.log(err);
          });   
 
    }

}
