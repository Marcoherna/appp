import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { Animation } from '@ionic/angular';
import { AddUpdateVehicleComponent } from 'src/app/shared/components/add-update-vehicle/add-update-vehicle.component';
import { User } from 'src/app/models/user.model';
import { Vehicle } from 'src/app/models/vehicle.model';

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
  private animationImg3?:Animation;

  constructor(private activatedRoute:ActivatedRoute, private aController:AnimationController) { }

  vehicles: Vehicle[] = [];
  loading: boolean = false;

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
    
    this.animationImg3 = this.aController.create()
    .addElement(document.querySelector('.map') as HTMLElement)
    .duration(1500)
    .iterations(Infinity)
    .keyframes([
      { offset: 0, transform: 'scale(1)' },
      { offset: 0.5, transform: 'scale(1.2)' },
      { offset: 1, transform: 'scale(1)' },
    ]);
    if(this.animationImg3){
      this.animationImg3.play();
    }else{
      alert("Error animacion map")
    }
    
  }

  user(): User {
    return this.utilSvc.getFromLocalStorage('user');
  }

  ionViewWillEnter(){
    this.getVehicle();
  }

  //agregar o actualizar un vehículo
  async addUpdateVehicle(vehiculo?:Vehicle){
    let success = await this.utilSvc.presentModal({
      component: AddUpdateVehicleComponent,
      cssClass: 'add-update-modal',
      componentProps: {vehiculo}
    })
    if(success) this.getVehicle();
  }


  getVehicle(){
    let path = `users/${this.user().uid}/vehicles`;
    this.loading = true;

    let sub = this.firebaseSvc.getCollectionData(path).subscribe({
      next: (res:any) => {
        console.log(res);
        this.vehicles = res;
        this.loading = false;
        sub.unsubscribe();
      }
    })
  }



}