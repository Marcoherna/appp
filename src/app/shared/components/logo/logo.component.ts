import { Component, OnInit } from '@angular/core';
import { Animation } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent  implements OnInit {

  private animation?:Animation;

  constructor(private aController:AnimationController) { }

  ngOnInit() {

    this.animation = this.aController.create()
    .addElement(document.querySelector('.logo') as HTMLElement)
    .duration(2500)
    .iterations(Infinity)
    .fromTo('transform','rotateY(0deg)','rotateY(360deg)')
    if(this.animation){
      this.animation.play();
    }else{
      alert("Error, ups, no se que ocurre")

    }
  }

}
