import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {OrderProvider} from '../../providers/order/order';
import { PhotosPage } from '../photos/photos';
@Component({
  selector: 'ion-redits',
  templateUrl: 'index.html',
})
export class IonreditsPage {
  id: any;
  posts:object[];
  constructor(public navCtrl: NavController, private Order:OrderProvider) {

  }
  ngOnInit(){
    this.posts=[];
    this.dislpayPosts();
  }
  dislpayPosts(){
    this.Order.getPosts()
        .subscribe(res=>{
          this.posts=res;
        });
  }
  viewPhotos(id){
    console.log(id);
    this.navCtrl.push(PhotosPage,{id : id});
  }
}
