import {Entity, model, property} from '@loopback/repository';

@model()
export class Materia extends Entity {
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
  type:'array',
  itemType:'string'
})
materias?: string[];


  constructor(data?: Partial<Materia>) {
    super(data);
  }
}
