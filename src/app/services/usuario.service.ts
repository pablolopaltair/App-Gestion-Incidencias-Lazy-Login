import { Injectable } from '@angular/core';

//Importación de Firestore
import { AngularFirestore } from '@angular/fire/compat/firestore';

//Importación del modelo Incidencia
import {UserInterface } from '../modelos/rol.model';

import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuario: any;
 

  constructor(
    private angularFirestore : AngularFirestore,
    private afAuth: AngularFireAuth,) {

   }






  //Getter de los porteors
  getUsuarios(){
    return this.angularFirestore
    .collection("users")
    .snapshotChanges()
  }

  //Getter de incidencias por ID
  getUsuarioById(id){
    return this.angularFirestore
    .collection("users")
    .doc(id)
    .valueChanges()
  }

  getUsuarioBySessionId(sessionId){
    return this.angularFirestore
    .collection("users")
    .doc(sessionId)
    .valueChanges()
  }


  //Creación de un nuevo incidencia
  createUsuario (usuario: UsuarioService){
    return new Promise<any> ( ( resolve, reject)=>{
      this.angularFirestore
            .collection("users")
            .add(usuario)
            .then( (response)=>{
              console.log(response)
            },
            (error)=>{
              reject(error)
            })

    })
  }


  //Editar-Actualizar los datos de incidencia
  updateUsuario (usuario: UserInterface, id){
    return this.angularFirestore
          .collection("users")
          .doc(id)
          .update({
            email: usuario.email,
            id: usuario.id,
            rango: usuario.rango
          });
  }


  
 

  setUsuario(usuario: any) {
    this.usuario = usuario;
  }

  getUsuario() {
    return this.usuario;
  }

}
