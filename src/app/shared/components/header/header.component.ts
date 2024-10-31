import { Component, OnInit, Input, inject } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  @Input() title!: string;
  @Input() backButton: string;
  @Input() isModal!: boolean;
  @Input() showMenu!: boolean;


  firebaseSvc = inject(FirebaseService);
  utilSvc = inject(UtilsService);

  constructor() { }

  ngOnInit() {}

  dissmissModal(){
    this.utilSvc.dissmissModal();
  }



}
