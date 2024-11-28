"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[920],{920:(C,p,s)=>{s.r(p),s.d(p,{SignUpPageModule:()=>D});var f=s(177),l=s(4341),u=s(4742),g=s(9384),c=s(467),e=s(4438),v=s(385),S=s(5265),h=s(9381),U=s(3683),P=s(9981),y=s(1765);function G(n,i){1&n&&(e.j41(0,"div"),e.EFF(1,"El nombre es requerido"),e.k0s())}function b(n,i){1&n&&(e.j41(0,"div"),e.EFF(1,"El nombre debe tener al menos 4 caracteres"),e.k0s())}function F(n,i){if(1&n&&(e.j41(0,"div",9),e.DNE(1,G,2,0,"div",10)(2,b,2,0,"div",10),e.k0s()),2&n){const r=e.XpG();e.R7$(),e.Y8G("ngIf",null==r.form.controls.name.errors?null:r.form.controls.name.errors.required),e.R7$(),e.Y8G("ngIf",null==r.form.controls.name.errors?null:r.form.controls.name.errors.minlenght)}}function R(n,i){1&n&&(e.j41(0,"div"),e.EFF(1,"El correo es requerido"),e.k0s())}function E(n,i){1&n&&(e.j41(0,"div"),e.EFF(1,"El correo no es valido"),e.k0s())}function I(n,i){if(1&n&&(e.j41(0,"div",9),e.DNE(1,R,2,0,"div",10)(2,E,2,0,"div",10),e.k0s()),2&n){const r=e.XpG();e.R7$(),e.Y8G("ngIf",null==r.form.controls.email.errors?null:r.form.controls.email.errors.required),e.R7$(),e.Y8G("ngIf",null==r.form.controls.email.errors?null:r.form.controls.email.errors.email)}}function T(n,i){1&n&&(e.j41(0,"div"),e.EFF(1,"La contrase\xf1a es requerida"),e.k0s())}function $(n,i){1&n&&(e.j41(0,"div"),e.EFF(1,"La contrase\xf1a debe tener minimo 6 caracteres"),e.k0s())}function Y(n,i){if(1&n&&(e.j41(0,"div",9),e.DNE(1,T,2,0,"div",10)(2,$,2,0,"div",10),e.k0s()),2&n){const r=e.XpG();e.R7$(),e.Y8G("ngIf",null==r.form.controls.password.errors?null:r.form.controls.password.errors.required),e.R7$(),e.Y8G("ngIf",null==r.form.controls.password.errors?null:r.form.controls.password.errors.minlength)}}const j=[{path:"",component:(()=>{var n;class i{constructor(){this.form=new l.gE({uid:new l.MJ(""),email:new l.MJ("",[l.k0.required,l.k0.email]),password:new l.MJ("",[l.k0.required,l.k0.minLength(6)]),name:new l.MJ("",[l.k0.required,l.k0.minLength(4)])}),this.firebaseSvc=(0,e.WQX)(v.f),this.utilSvc=(0,e.WQX)(S.T)}ngOnInit(){}submit(){var t=this;return(0,c.A)(function*(){const o=yield t.utilSvc.loading();yield o.present(),t.firebaseSvc.signUp(t.form.value).then(function(){var a=(0,c.A)(function*(d){yield t.firebaseSvc.updateUser(t.form.value.name);let m=d.user.uid;t.form.controls.uid.setValue(m),t.setUserInfo(m)});return function(d){return a.apply(this,arguments)}}()).catch(a=>{console.log(a),t.utilSvc.presentToast({message:a.message,duration:2500,color:"primary",position:"middle",icon:"alert-circle-outline"})}).finally(()=>{o.dismiss()})})()}setUserInfo(t){var o=this;return(0,c.A)(function*(){const a=yield o.utilSvc.loading();yield a.present();let d=`users/${t}`;delete o.form.value.password,o.firebaseSvc.setDocument(d,o.form.value).then(function(){var m=(0,c.A)(function*(N){o.utilSvc.saveInLocalStorage("user",o.form.value),o.utilSvc.routerLink("/main/home"),o.form.reset()});return function(N){return m.apply(this,arguments)}}()).catch(m=>{console.log(m),o.utilSvc.presentToast({message:m.message,duration:2500,color:"primary",position:"middle",icon:"alert-circle-outline"})}).finally(()=>{a.dismiss()})})()}}return(n=i).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.VBU({type:n,selectors:[["app-sign-up"]],decls:15,vars:8,consts:[["backButton","/auth","title","Registrarse"],[1,"d-flex-center"],[1,"auth-form",3,"ngSubmit","keypress.enter","formGroup"],["autocomplete","name","icon","person-outline","type","text","label","Nombre","label-placement","floating",3,"control"],["class","validators",4,"ngIf"],["autocomplete","email","icon","mail-outline","type","email","label","Correo","label-placement","floating",3,"control"],["type","password","label","Contrase\xf1a","label-placement","floating","icon","lock-closed-outline",3,"control"],["expand","block","mode","ios","type","submit",1,"submit",3,"disabled"],["slot","end","name","person-add-outline"],[1,"validators"],[4,"ngIf"]],template:function(t,o){1&t&&(e.nrm(0,"app-header",0),e.j41(1,"ion-content")(2,"div",1)(3,"form",2),e.bIt("ngSubmit",function(){return o.submit()})("keypress.enter",function(){return o.submit()}),e.nrm(4,"app-logo")(5,"app-custom-input",3),e.DNE(6,F,3,2,"div",4),e.nrm(7,"app-custom-input",5),e.DNE(8,I,3,2,"div",4),e.nrm(9,"app-custom-input",6),e.DNE(10,Y,3,2,"div",4),e.j41(11,"ion-button",7),e.EFF(12," Registrarse "),e.nrm(13,"ion-icon",8),e.k0s()()()(),e.nrm(14,"app-footer")),2&t&&(e.R7$(3),e.Y8G("formGroup",o.form),e.R7$(2),e.Y8G("control",o.form.controls.name),e.R7$(),e.Y8G("ngIf",o.form.controls.name.errors&&o.form.controls.name.touched),e.R7$(),e.Y8G("control",o.form.controls.email),e.R7$(),e.Y8G("ngIf",o.form.controls.email.errors&&o.form.controls.email.touched),e.R7$(),e.Y8G("control",o.form.controls.password),e.R7$(),e.Y8G("ngIf",o.form.controls.password.errors&&o.form.controls.password.touched),e.R7$(),e.Y8G("disabled",o.form.invalid))},dependencies:[f.bT,l.qT,l.cb,u.Jm,u.W9,u.iq,h.l,U.H,P.Z,l.j4,y.n]}),i})()}];let M=(()=>{var n;class i{}return(n=i).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[g.iI.forChild(j),g.iI]}),i})();var k=s(3887);let D=(()=>{var n;class i{}return(n=i).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[f.MD,l.YN,u.bv,M,k.G]}),i})()}}]);