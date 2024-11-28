import { Component, OnInit, inject } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Vehicle } from 'src/app/models/vehicle.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { AddUpdateVehicleComponent } from 'src/app/shared/components/add-update-vehicle/add-update-vehicle.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  firebaseSvc = inject(FirebaseService);
  utilSvc = inject(UtilsService);
  vehicles: Vehicle[] = [];
  loading: boolean = false;


  constructor() { }

  ngOnInit() {
  }

  user(): User {
    return this.utilSvc.getFromLocalStorage('user');
  }

  ionViewWillEnter(){
    this.getVehicle();
  }

  async takeImage(){
    let user = this.user();

    let path = `users/${user.uid}`;

    const dataUrl = (await this.utilSvc.takePicture('Imagen de perfil')).dataUrl;

    const loading = await this.utilSvc.loading();
    await loading.present();

    let imagePath = `${user.uid}/profile`;
    user.image = await this.firebaseSvc.uploadImage(imagePath, dataUrl);

    this.firebaseSvc.updateDocument(path, {image: user.image}).then(async res => {
        
      this.utilSvc.saveInLocalStorage('user', user);
      
      this.utilSvc.presentToast({
        message: 'Imagen actualizada correctamente',
        duration: 1500,
        color: 'success',
        position: 'middle',
        icon: 'checkmark-circle-outline'
      })
    }).catch(error => {
      console.log(error);
      this.utilSvc.presentToast({
        message: error.message,
        duration: 2500,
        color: 'primary',
        position: 'middle',
        icon: 'alert-circle-outline'
      })
    }).finally(() => {
      loading.dismiss();
    })
    

    

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

  //agregar o actualizar un vehículo
  async addUpdateVehicle(vehiculo?:Vehicle){
    let success = await this.utilSvc.presentModal({
      component: AddUpdateVehicleComponent,
      cssClass: 'add-update-modal',
      componentProps: {vehiculo}
    })
    if(success) this.getVehicle();
  }
  //alerta de confirmación
  async presentAlertConfirm(vehicle: Vehicle) {
    this.utilSvc.presentAlert({
      header: 'Confirmar eliminación',
      message: `¿Estás seguro de que deseas eliminar el vehículo ${vehicle.marca}?`,
      buttons: [
        {
          text: 'Cancelar',
          
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.deleteVehicle(vehicle);
          },
        },
      ],
    });
  }
  
  
  //Eliminar vehiculo
    async deleteVehicle(vehicle: Vehicle) {
      
      //ruta donde se guardaran los datos 
      let path = `users/${this.user().uid}/vehicles/${vehicle.id}`;
  
      const loading = await this.utilSvc.loading();
      await loading.present();
  
      this.firebaseSvc.deleteDocument(path).then(async res => {
  
        this.vehicles = this.vehicles.filter(v => v.id !== vehicle.id);
        
        this.utilSvc.presentToast({
          message: 'Vehículo eliminado correctamente',
          duration: 1500,
          color: 'success',
          position: 'middle',
          icon: 'checkmark-circle-outline'
        })
  
  
  
  
      }).catch(error => {
        console.log(error);
        this.utilSvc.presentToast({
          message: error.message,
          duration: 2500,
          color: 'primary',
          position: 'middle',
          icon: 'alert-circle-outline'
        })
      }).finally(() => {
        loading.dismiss();
      })
    
  }

}
