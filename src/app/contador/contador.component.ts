import { Component } from '@angular/core';
import { NoticiaComponent } from '../noticia/noticia.component';
import { INoticia } from '../interfaces/INoticia';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [NoticiaComponent, CommonModule],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css',
})
export class ContadorComponent {
  conteo: number = 1;

  todasLasNoticias: INoticia[] = [
    {
      imagen: {
        src: 'https://picsum.photos/id/237/200/300',
        alt: 'Noticia importante',
      },
      titulo:
        '"Emergencia nacional": por qué las mujeres surcoreanas no están teniendo bebés',
      enlace: 'https://www.bbc.com/mundo/articles/c51ry77wxgeo',
      descripcion:
        'Esta es una noticia importante. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      destacado: true,
      fecha: new Date(),
    },
    {
      imagen: {
        src: 'https://picsum.photos/id/238/200/300',
        alt: 'Noticia no tan importante',
      },
      titulo: 'Prueba de Programacion web II el miercoles',
      enlace: 'https://www.bbc.com/mundo/articles/ck70r329m98o',
      descripcion: 'La prueba tiene un valor de 5 puntos',
      destacado: false,
      fecha: new Date(),
    },
    {
      imagen: {
        src: 'https://picsum.photos/id/238/200/300',
        alt: 'Noticia no tan importante',
      },
      titulo: 'Prueba de Programacion web II el miercoles',
      enlace: 'https://www.bbc.com/mundo/articles/ck70r329m98o',
      descripcion: 'La prueba tiene un valor de 5 puntos',
      destacado: false,
      fecha: new Date(),
    },
    {
      imagen: {
        src: 'https://picsum.photos/id/238/200/300',
        alt: 'Noticia no tan importante',
      },
      titulo: 'Prueba de Programacion web II el miercoles',
      enlace: 'https://www.bbc.com/mundo/articles/ck70r329m98o',
      descripcion: 'La prueba tiene un valor de 5 puntos',
      destacado: false,
      fecha: new Date(),
    },
    {
      imagen: {
        src: 'https://picsum.photos/id/238/200/300',
        alt: 'Noticia no tan importante',
      },
      titulo: 'Prueba de Programacion web II el miercoles',
      enlace: 'https://www.bbc.com/mundo/articles/ck70r329m98o',
      descripcion: 'La prueba tiene un valor de 5 puntos',
      destacado: false,
      fecha: new Date(),
    },
  ];

  noticias: INoticia[] = this.todasLasNoticias.slice(0, this.conteo);

  sumarConteo() {
    this.conteo += 1;
    this.noticias = this.todasLasNoticias.slice(0, this.conteo);
  }

  restarConteo() {
    if (this.conteo - 1 >= 0) {
      this.conteo -= 1;
      this.noticias = this.todasLasNoticias.slice(0, this.conteo);
    }
  }
}
