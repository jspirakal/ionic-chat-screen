import { Component, OnInit} from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { OrderProvider } from '../../providers/order/order';
import {CommentPage} from '../comment/comment';

@Component({
  selector: 'ion-photos',
  templateUrl: 'photos.html'
})
export class PhotosPage {
  photo: any;
  photos: object[];
  constructor(public navCtrl: NavController,private navparam:NavParams, private Photos:OrderProvider) {
    
  }
  ngOnInit(){
    this.photo=this.navparam.get('id');
    console.log(this.navparam.data);
    this.photos= [];  
    this.displayPhotos()
  }

  displayPhotos(){
    this.Photos.getAlbums()
        .subscribe(res=> {
          this.photos=res;
        })
  }
  viewComments(id){
    this.navCtrl.push(CommentPage,{id:id});
  }


}
