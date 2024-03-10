import { Component, Input } from '@angular/core';
import { INoticia } from '../interfaces/INoticia';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-noticia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.css',
})
export class NoticiaComponent {
  @Input() noticia?: INoticia;
  @Input() encabezado: string = 'Encabezado noticia';
}
