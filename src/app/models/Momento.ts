import { Comentario } from './Comentario';

export interface Momento {
  id: number;
  titulo: string;
  descricao: string;
  data: Date;
  comentarios: Comentario[];
  urlImagem?: string;
}
