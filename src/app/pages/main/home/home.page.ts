import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { Animation } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  firebaseSvc = inject(FirebaseService);
  utilSvc = inject(UtilsService);
  private animationImg1?:Animation;
  private animationImg2?:Animation;

  constructor(private activatedRoute:ActivatedRoute, private aController:AnimationController) { }

  ngOnInit() {
  }

  ngAfterViewInit(){

    this.animationImg1 = this.aController.create()
    .addElement(document.querySelector('.compartir') as HTMLElement)
    .duration(1500)
    .iterations(Infinity)
    .keyframes([
      { offset: 0, transform: 'scale(1)' },
      { offset: 0.5, transform: 'scale(1.2)' },
      { offset: 1, transform: 'scale(1)' },
    ]);
    if(this.animationImg1){
      this.animationImg1.play();
    }else{
      alert("Error animacion siguenos")
    }

    this.animationImg2 = this.aController.create()
    .addElement(document.querySelector('.buscar') as HTMLElement)
    .duration(1500)
    .iterations(Infinity)
    .keyframes([
      { offset: 0, transform: 'scale(1)' },
      { offset: 0.5, transform: 'scale(1.2)' },
      { offset: 1, transform: 'scale(1)' },
    ]);
    if(this.animationImg2){
      this.animationImg2.play();
    }else{
      alert("Error animacion siguenos")
    }
  }

  signOut(){
    this.firebaseSvc.signOut();
  }

}
