import { Categoria } from "./categoria";
import { Clasificacion } from "./clasificacion";
import { Tipo } from "./tipo";

export interface Video {
    id: number;
    label: string;
    anio: number;
    tipo: Tipo;
    clasificacion: Clasificacion;
    descripcion: string;
    categoria: Categoria[];
    generico: string;
}
