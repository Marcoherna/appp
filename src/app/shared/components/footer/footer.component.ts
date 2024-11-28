import { Component, OnInit } from '@angular/core';
import { Animation } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {

  private animation0?:Animation;

  constructor(private aController:AnimationController) { }

  ngOnInit() {

    this.animation0 = this.aController.create()
    .addElement(document.querySelector('.siguenos') as HTMLElement)
    .duration(1500)
    .iterations(Infinity)
    .keyframes([
      { offset: 0, transform: 'scale(1)' },
      { offset: 0.5, transform: 'scale(1.2)' },
      { offset: 1, transform: 'scale(1)' },
    ]);
    if(this.animation0){
      this.animation0.play();
    }else{
      alert("Error animacion siguenos")
    }

  }

}
