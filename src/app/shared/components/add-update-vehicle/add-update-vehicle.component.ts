import { Component, Input, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { Vehicle } from 'src/app/models/vehicle.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-add-update-vehicle',
  templateUrl: './add-update-vehicle.component.html',
  styleUrls: ['./add-update-vehicle.component.scss'],
})
export class AddUpdateVehicleComponent  implements OnInit {

  @Input() vehiculo: Vehicle;

  form = new FormGroup({
    id:new FormControl(''),
    marca: new FormControl('', [Validators.required]),
    modelo: new FormControl('', [Validators.required]),
    anio: new FormControl(null, [Validators.required, Validators.min(2000)]),
    patente: new FormControl('', [Validators.required, Validators.pattern('[A-Z]{3}[0-9]{3}')]),
    asientos: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(8)]),
  });

  firebaseSvc = inject(FirebaseService);
  utilSvc = inject(UtilsService);

  user = {} as User;

  ngOnInit() {
    this.user = this.utilSvc.getFromLocalStorage('user');
    if (this.vehiculo) {
      this.form.setValue(this.vehiculo);
    }
  }

  submit(){
    if(this.form.valid){
    
      if(this.vehiculo){
        this.updateVehicle();
      }else{
        this.addVehicle();
      }

    }
  }

  async addVehicle() {
    
      //ruta donde se guardaran los datos 
      let path = `users/${this.user.uid}/vehicles`;

      const loading = await this.utilSvc.loading();
      await loading.present();

      delete this.form.value.id;

      this.firebaseSvc.addDocument(path, this.form.value).then(async res => {
        
        this.utilSvc.dissmissModal({success: true});
        
        this.utilSvc.presentToast({
          message: 'Vehículo agregado correctamente',
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

  async updateVehicle() {
    
      //ruta donde se guardaran los datos 
      let path = `users/${this.user.uid}/vehicles/${this.vehiculo.id}`;

      const loading = await this.utilSvc.loading();
      await loading.present();

      delete this.form.value.id;

      this.firebaseSvc.updateDocument(path, this.form.value).then(async res => {
        
        this.utilSvc.dissmissModal({success: true});
        
        this.utilSvc.presentToast({
          message: 'Vehículo actualizado correctamente',
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

  async setUserInfo(uid: string) {

    const loading = await this.utilSvc.loading();
    await loading.present();

    let path = `users/${uid}`;
    delete this.form.value.modelo;

    this.firebaseSvc.setDocument(path, this.form.value as User).then(async res => {
      this.utilSvc.saveInLocalStorage('user', this.form.value);
      this.utilSvc.routerLink('/main/home');
      this.form.reset();
      
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
