import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy{
  public title: string;
  
  constructor(){
    this.title = "Componente peliculas!!!!";
    console.log("Constructor lanzado!!!!");
  }

  ngOnInit(): void {
    console.log("EVENTO ON INIT,Componente iniciado");
  }

  ngDoCheck(): void {
    console.log("DOCHECK LANZADO");
  }

  cambiarTitle(){
    this.title = "El titulo ha sido cambiado";
  }

  ngOnDestroy(): void {
    console.log("EL COMPONENTE SE VA A ELIMINAR");
  }

}
