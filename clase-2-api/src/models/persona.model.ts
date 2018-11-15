import {Entity, model, property,hasMany} from '@loopback/repository';

import {Materia} from './materia.model';

@model()
export class Persona extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  apellido: string;

  @property({
    type: 'string',
    required: true,
  })
  matricula: string;


  @hasMany(()=>Materia, {keyTo: 'materias'})
  materias? : Materia[];

  constructor(data?: Partial<Persona>) {
    super(data);
  }
}
