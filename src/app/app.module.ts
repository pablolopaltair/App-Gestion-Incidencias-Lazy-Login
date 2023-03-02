import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Importación de clases necesarias para trabajar con firebase app.module.ts
import { AngularFireModule } from   '@angular/fire/compat';
import { AngularFireAuthModule } from   '@angular/fire/compat/auth';
import { AngularFirestoreModule } from   '@angular/fire/compat/firestore';

//Importación de la configuración de firebase
import { environment } from 'src/environments/environment';



//Importación del Modulo de busqueda
import { SidebarComponent } from './sidebar/sidebar.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearModule } from './componentes/crear/crear.module';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
