import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar-vehiculo',
  templateUrl: './buscar-vehiculo.page.html',
  styleUrls: ['./buscar-vehiculo.page.scss'],
})
export class BuscarVehiculoPage implements OnInit {

  asientosr1: number = 4;
  asientosr2: number = 4;
  asientosr3: number = 4;

  constructor() { }

  select(){
    return alert("Ruta seleccionada")
  }

  ngOnInit() {
  }

  restaAsientor1(){
    if (this.asientosr1 = 0) {
      return alert('Vehículo lleno')
    }else{

      this.asientosr1 = 3;
      return alert("Ruta seleccionada")
    }
  }

  restaAsientor2(){
    if (this.asientosr2 = 0) {
      return alert('Vehículo lleno')
    }else{

      this.asientosr2 = 3;
      return alert("Ruta seleccionada")
    }
}

restaAsientor3(){
  if (this.asientosr3 = 0) {
    return alert('Vehículo lleno')
  }else{

    this.asientosr3 = 3;
    return alert("Ruta seleccionada")
  }
}

}
