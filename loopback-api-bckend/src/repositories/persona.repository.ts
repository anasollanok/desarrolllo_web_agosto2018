import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Persona} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PersonaRepository extends DefaultCrudRepository<
  Persona,
  typeof Persona.prototype.id
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Persona, dataSource);
  }
}
