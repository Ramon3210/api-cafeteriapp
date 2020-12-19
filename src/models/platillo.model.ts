import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Platillo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idPlatillo?: number;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'string',
    required: true,
  })
  porciones: string;

  @property({
    type: 'string',
    required: true,
  })
  precio: string;

  @property({
    type: 'string',
    required: true,
  })
  horaPlatillo: string;

  @property({
    type: 'string',
    required: true,
  })
  comentarios: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Platillo>) {
    super(data);
  }
}

export interface PlatilloRelations {
  // describe navigational properties here
}

export type PlatilloWithRelations = Platillo & PlatilloRelations;
