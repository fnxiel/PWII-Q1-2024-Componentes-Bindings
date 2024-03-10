export interface INoticia {
  imagen: IImagen;
  titulo: string;
  enlace: string;
  descripcion: string;
  destacado: boolean;
  fecha: Date;
}

export interface IImagen {
  src: string;
  alt: string;
}
