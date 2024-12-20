import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from 'firebase/auth';

import { AngularFireStorage } from '@angular/fire/compat/storage';
import { User } from '../models/user.model';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getStorage, uploadString, ref, getDownloadURL } from "firebase/storage";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection, collectionData, query, updateDoc, deleteDoc } from '@angular/fire/firestore'
import { UtilsService } from './utils.service';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);
  utilSvc = inject(UtilsService);
  storage = inject(AngularFireStorage);

  

  getAuth(){
    return getAuth();
  }

  signIn(user: User){

    return signInWithEmailAndPassword(getAuth(), user.email, user.password)
  }

  signUp(user: User){
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  
  }

  updateUser(displayName: string){
    return updateProfile(getAuth().currentUser, {displayName})
    
  }

  sendRecoveryEmail(email: string){
    return sendPasswordResetEmail(getAuth(), email);
  }

  signOut(){
    getAuth().signOut();
    localStorage.removeItem('user');
    this.utilSvc.routerLink('/auth');
  }

  //Base de datos

  getCollectionData(path: string, collectionQuery?: any){
    const ref = collection(getFirestore(), path)
    return collectionData(query(ref, collectionQuery), {idField: 'id'});
  }

  setDocument(path: string, data: any){

    return setDoc(doc(getFirestore(), path), data);

  }

  async getDocument(path: string){

    return (await getDoc(doc(getFirestore(), path))).data();
  };

  //agregar vehículo
  addDocument(path: string, data: any){

    return addDoc(collection(getFirestore(), path), data);
  }

  //actualizar

  updateDocument(path: string, data: any){

    return updateDoc(doc(getFirestore(), path), data);

  }

  //eliminar

  deleteDocument(path: string){

    return deleteDoc(doc(getFirestore(), path));

  }
//subir imagen
  async uploadImage(path: string, data_url: string){

    return uploadString(ref(getStorage(), path), data_url, 'data_url').then(() => {
      return getDownloadURL(ref(getStorage(), path));
    })
  }

  

}
