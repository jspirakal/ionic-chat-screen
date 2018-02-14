import { Component, OnInit} from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { OrderProvider } from '../../providers/order/order';

@Component({
  selector: 'ion-comment',
  templateUrl: 'comment.html'
})
export class CommentPage implements OnInit {
  photo: any;
  comments: object[];
  constructor(public navCtrl: NavController,private navparam:NavParams, private Comments:OrderProvider) {
    
  }
  ngOnInit(){
    this.photo=this.navparam.get('id');
    this.comments= [];  
    this.displayComments()
  }

  displayComments(){
    this.Comments.getComments()
        .subscribe(res=> {
          this.comments=res;
          console.log(res);
        })
  }


}
