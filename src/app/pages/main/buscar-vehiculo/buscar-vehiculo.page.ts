import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar-vehiculo',
  templateUrl: './buscar-vehiculo.page.html',
  styleUrls: ['./buscar-vehiculo.page.scss'],
})
export class BuscarVehiculoPage implements OnInit {

  constructor() { }

  select(){
    return alert("Ruta seleccionada")
  }

  ngOnInit() {
  }

}
