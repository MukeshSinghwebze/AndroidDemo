import { Component } from '@angular/core';

import {NavController, IonicPage} from 'ionic-angular';

import { Chat } from '../chat/chat';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  toUser:Object;

  constructor(public navCtrl: NavController) {
    this.toUser = {
      toUserId:'210000198410281948',
      toUserName:'Hancock'
    }
  }

  jump(){
    this.navCtrl.push(Chat);
  }


}
