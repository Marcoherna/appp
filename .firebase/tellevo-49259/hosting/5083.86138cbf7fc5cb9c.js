"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5083],{7464:(C,c,o)=>{o.r(c),o.d(c,{HomePageModule:()=>M});var u=o(177),f=o(4341),r=o(4742),l=o(9384),g=o(467),e=o(4438),d=o(385),h=o(5265),p=o(6643),v=o(9381),y=o(1765);function b(t,a){if(1&t&&(e.j41(0,"ion-button",8),e.nrm(1,"img",9),e.EFF(2),e.k0s()),2&t){const s=a.$implicit;e.R7$(2),e.Lme(" Agregar destino con ",s.marca," ",s.modelo," ")}}const P=[{path:"",component:(()=>{var t;class a{constructor(n,i){this.activatedRoute=n,this.aController=i,this.firebaseSvc=(0,e.WQX)(d.f),this.utilSvc=(0,e.WQX)(h.T),this.vehicles=[],this.loading=!1}ngOnInit(){}ngAfterViewInit(){this.animationImg1=this.aController.create().addElement(document.querySelector(".compartir")).duration(1500).iterations(1/0).keyframes([{offset:0,transform:"scale(1)"},{offset:.5,transform:"scale(1.2)"},{offset:1,transform:"scale(1)"}]),this.animationImg1?this.animationImg1.play():alert("Error animacion siguenos"),this.animationImg2=this.aController.create().addElement(document.querySelector(".buscar")).duration(1500).iterations(1/0).keyframes([{offset:0,transform:"scale(1)"},{offset:.5,transform:"scale(1.2)"},{offset:1,transform:"scale(1)"}]),this.animationImg2?this.animationImg2.play():alert("Error animacion siguenos"),this.animationImg3=this.aController.create().addElement(document.querySelector(".map")).duration(1500).iterations(1/0).keyframes([{offset:0,transform:"scale(1)"},{offset:.5,transform:"scale(1.2)"},{offset:1,transform:"scale(1)"}]),this.animationImg3?this.animationImg3.play():alert("Error animacion map")}user(){return this.utilSvc.getFromLocalStorage("user")}ionViewWillEnter(){this.getVehicle()}addUpdateVehicle(n){var i=this;return(0,g.A)(function*(){(yield i.utilSvc.presentModal({component:p.I,cssClass:"add-update-modal",componentProps:{vehiculo:n}}))&&i.getVehicle()})()}getVehicle(){let n=`users/${this.user().uid}/vehicles`;this.loading=!0;let i=this.firebaseSvc.getCollectionData(n).subscribe({next:m=>{console.log(m),this.vehicles=m,this.loading=!1,i.unsubscribe()}})}}return(t=a).\u0275fac=function(n){return new(n||t)(e.rXU(l.nX),e.rXU(r.Hx))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-home"]],decls:20,vars:3,consts:[["title","Inicio",3,"showMenu"],[3,"fullscreen"],[1,"botones"],[1,"compartir",3,"click"],["src","assets/img/share.png","alt","Ups"],["routerLink","/main/buscar-vehiculo",1,"buscar"],["src","assets/img/buscar.png","alt","Ups"],["class","map",4,"ngFor","ngForOf"],[1,"map"],["src","assets/img/map.png","alt","ups"]],template:function(n,i){1&n&&(e.nrm(0,"app-header",0),e.j41(1,"ion-content",1),e.nrm(2,"br")(3,"br")(4,"br"),e.j41(5,"div",2)(6,"ion-button",3),e.bIt("click",function(){return i.addUpdateVehicle()}),e.nrm(7,"img",4),e.EFF(8,"Registrar Veh\xedculo"),e.k0s(),e.nrm(9,"br")(10,"br")(11,"br"),e.j41(12,"ion-button",5),e.nrm(13,"img",6),e.EFF(14,"Buscar ruta"),e.k0s(),e.nrm(15,"br")(16,"br")(17,"br"),e.DNE(18,b,3,2,"ion-button",7),e.k0s()(),e.nrm(19,"app-footer")),2&n&&(e.Y8G("showMenu",!0),e.R7$(),e.Y8G("fullscreen",!0),e.R7$(17),e.Y8G("ngForOf",i.vehicles))},dependencies:[u.Sq,r.Jm,r.W9,r.N7,l.Wk,v.l,y.n],styles:[".botones[_ngcontent-%COMP%]{text-align:center}img[_ngcontent-%COMP%]{height:auto;width:50px}"]}),a})()}];let I=(()=>{var t;class a{}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[l.iI.forChild(P),l.iI]}),a})();var H=o(3887);let M=(()=>{var t;class a{}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[u.MD,f.YN,r.bv,I,H.G]}),a})()}}]);