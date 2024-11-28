import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  standalone: true,
  imports: [SharedModule, IonicModule, RouterLink]
})
export class NotFoundComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}



}