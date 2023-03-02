import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//COMPONENTES
import { CrearComponent } from './componentes/crear/crear.component';
//import { EditarComponent } from './componentes/editar/editar.component';
//import { MostrarComponent } from './componentes/mostrar/mostrar.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
//import { RevisionEditarComponent } from './componentes/revision-editar/revision-editar.component';
//import { RevisionComponent } from './componentes/revision/revision.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
//import { Mostrar2Component } from './componentes/gestion-usuarios/mostrar2/mostrar2.component';
//import { Editar2Component } from './componentes/gestion-usuarios/editar2/editar2.component';
//import { PerfilComponent } from './componentes/perfil/perfil.component';

//GUARDS
import { AutentificadoGuard } from './guards/autentificado.guard';
import { MantenimientoGuard } from './guards/mantenimiento.guard';
import { DirectivoGuard } from './guards/directivo.guard';
import { AdminGuard } from './guards/admin.guard';


//Configuración de las rutas
const routes: Routes = [

  {path: '',component:PrincipalComponent},

  {path: 'show',
  loadChildren: () => import('./componentes/mostrar/mostrar.module').then(m => m.MostrarModule), 
  canActivate: [AutentificadoGuard, MantenimientoGuard]},

  {path: 'create',component:CrearComponent},

  {path: 'edit/:id',
  loadChildren: () => import('./componentes/editar/editar.module').then(m => m.EditarModule),
  canActivate: [AutentificadoGuard, MantenimientoGuard]},

  {path: 'check',
  loadChildren: () => import('./componentes/revision/revision.module').then(m => m.RevisionModule),
  canActivate: [AutentificadoGuard, DirectivoGuard]},

  {path: 'checkEdit/:id', 
  loadChildren: () => import('./componentes/editar/editar.module').then(m => m.EditarModule),
  canActivate: [AutentificadoGuard, DirectivoGuard]},

  {path: 'login', component:LoginComponent},

  {path: 'register', component:RegisterComponent},

  {path: 'users',
  loadChildren: () => import('./componentes/gestion-usuarios/mostrar2/mostrar2.module').then(m => m.Mostrar2Module),
  canActivate: [AutentificadoGuard, AdminGuard]},

  {path: 'usersEdit/:id',
  loadChildren: () => import('./componentes/gestion-usuarios/editar2/editar2.module').then(m => m.Editar2Module),
   canActivate: [AutentificadoGuard,AdminGuard]},

  {path: 'profile',
  loadChildren: () => import('./componentes/perfil/perfil.module').then(m => m.PerfilModule),
   canActivate: [AutentificadoGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
