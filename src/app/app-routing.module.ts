//Importar los modulos del router de angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importar componentes a los cuales quiero hacer una pagina exclusiva
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { ErrorComponent } from './components/error/error.component';


//Array de rutas
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'peliculas', component: PeliculasComponent},
  {path: 'pruebas', component: PruebasComponent},
  {path: 'pruebas/:nombre/:apellido', component: PruebasComponent},//esto se convierte a opcional
  {path: '**', component: ErrorComponent}
];

//Exportar el modulo de rutas
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
