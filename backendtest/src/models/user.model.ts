import {Entity, model, property} from '@loopback/repository';

@model()
export class User extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      errorMessage: 'Faltan  datos',
    }
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      errorMessage: 'Faltan  datos',
    }
  })
  apellido: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      format: 'email',
      minLength: 5,
      maxLength: 50,
      transform: ['toLowerCase'],
      errorMessage: 'Faltan  datos o el correo no esta escrito correctamente',
    }
  })
  email: string;


  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
