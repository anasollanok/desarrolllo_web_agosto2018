import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Materia} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MateriaRepository extends DefaultCrudRepository<
  Materia,
  typeof Materia.prototype.id
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Materia, dataSource);
  }
}
