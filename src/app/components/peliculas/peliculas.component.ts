//COMPONENTE PADRE
import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';
import { Pelicula } from '../../models/pelicula';

interface PeliculaEvent extends Event {
  pelicula: Pelicula;
}

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy{
  public title: string;
  public peliculas: Pelicula[];
  public favorita!: Pelicula;
  public fecha: any;
  
  constructor(){
    this.title = "Componente peliculas!!!!";
    this.peliculas = [
      new Pelicula("Spiderman 4", 2019, "https://i.pinimg.com/736x/29/81/9f/29819fbc2db3579dd58410cba042a7f2.jpg"),
      new Pelicula("Vengadores", 2012, "https://files.meiobit.com/wp-content/uploads/2020/08/20200806marvels-avengers.jpg"),
      new Pelicula("Batman vs Superman", 2020, "https://m.media-amazon.com/images/S/pv-target-images/1f6b215833e5facff176b40d56e4a9af4d0666f0e3ca23e290442eb16ef2dfa9.jpg")
    ];
    console.log("Constructor lanzado!!!!");
    this.fecha = new Date(2020, 8, 12);
  }

  ngOnInit(): void {
    console.log(this.peliculas);
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

  mostrarFavorita(event: PeliculaEvent) {
    this.favorita = event.pelicula;
  }
}
