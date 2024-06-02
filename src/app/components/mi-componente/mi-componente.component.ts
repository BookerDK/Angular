import { Component } from '@angular/core';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})

export class MiComponente{

    public titulo: string;
    public comentario: string = 'Comentario inicial';
    public year: number = 2024;
    public mostrarPeliculas: boolean;

    constructor(){
        this.titulo = "Primer titulo de prueba";
        console.log('Mi componente esta funcionando!!!!!!');
        console.log(this.titulo);
        console.log(this.year, this.comentario);
        this.mostrarPeliculas = true;
    }

    ocultarPeliculas(){
        this.mostrarPeliculas = false;
    }
}