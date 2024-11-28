import { Component, inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ruta } from 'src/app/models/ruta.model';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-ruta-add-update',
  templateUrl: './ruta-add-update.component.html',
  styleUrls: ['./ruta-add-update.component.scss'],
})
export class RutaAddUpdateComponent  implements OnInit {

  @Input() ruta: Ruta;

  form = new FormGroup({
    id:new FormControl(''),
    posicionInicial: new FormControl('', [Validators.required]),
    nombreDestino: new FormControl('', [Validators.required]),
    lat: new FormControl(''),
    lng: new FormControl(''),
    precio: new FormControl(null, [Validators.required, Validators.min(1000)]),
    usuario: new FormControl(''),
    vehiculo: new FormControl(''),
    asientos: new FormControl(null),
  });

  firebaseSvc = inject(FirebaseService);
  utilSvc = inject(UtilsService);

  user = {} as User;

  constructor() { }

  ngOnInit() {
    this.user = this.utilSvc.getFromLocalStorage('user');
    if (this.ruta) {
      this.form.setValue(this.ruta);
    }
  }

  submit(){
    if(this.form.valid){
    
      if(this.ruta){
        this.updateRuta();
      }else{
        this.addRuta();
      }

    }
  }

  async addRuta() {
    
    //ruta donde se guardaran los datos 
    let path = `users/${this.user.uid}/rutas`;

    const loading = await this.utilSvc.loading();
    await loading.present();

    delete this.form.value.id;

    this.firebaseSvc.addDocument(path, this.form.value).then(async res => {
      
      this.utilSvc.dissmissModal({success: true});
      
      this.utilSvc.presentToast({
        message: 'Ruta agregada correctamente',
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

async updateRuta() {
    
  //ruta donde se guardaran los datos 
  let path = `users/${this.user.uid}/rutas/${this.ruta.id}`;

  const loading = await this.utilSvc.loading();
  await loading.present();

  delete this.form.value.id;

  this.firebaseSvc.updateDocument(path, this.form.value).then(async res => {
    
    this.utilSvc.dissmissModal({success: true});
    
    this.utilSvc.presentToast({
      message: 'Ruta actualizada correctamente',
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
  delete this.form.value.nombreDestino;

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
