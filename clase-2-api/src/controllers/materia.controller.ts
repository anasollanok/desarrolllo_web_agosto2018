import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  del,
  requestBody,
} from '@loopback/rest';
import {Materia} from '../models';
import {inject} from '@loopback/context';
import {
  AuthenticationBindings,
  UserProfile,
  authenticate,
} from '@loopback/authentication';



import {MateriaRepository} from '../repositories';

export class MateriaController {
  constructor(
    @repository(MateriaRepository)
    public materiaRepository : MateriaRepository,
     @inject(AuthenticationBindings.CURRENT_USER) private user: UserProfile,
  ) {}



 @authenticate('BasicStrategy')
  @post('/materias', {
    responses: {
      '200': {
        description: 'Materia model instance',
        content: {'application/json': {schema: {'x-ts-type': Materia}}},
      },
    },
  })
  async create(@requestBody() materia: Materia): Promise<Materia> {
    return await this.materiaRepository.create(materia);
  }

 @authenticate('BasicStrategy')
  @get('/materias/count', {
    responses: {
      '200': {
        description: 'Materia model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Materia)) where?: Where,
  ): Promise<Count> {
    return await this.materiaRepository.count(where);
  }

 @authenticate('BasicStrategy')
  @get('/materias', {
    responses: {
      '200': {
        description: 'Array of Materia model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Materia}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Materia)) filter?: Filter,
  ): Promise<Materia[]> {
    return await this.materiaRepository.find(filter);
  }

  @patch('/materias', {
    responses: {
      '200': {
        description: 'Materia PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() materia: Materia,
    @param.query.object('where', getWhereSchemaFor(Materia)) where?: Where,
  ): Promise<Count> {
    return await this.materiaRepository.updateAll(materia, where);
  }

  @get('/materias/{id}', {
    responses: {
      '200': {
        description: 'Materia model instance',
        content: {'application/json': {schema: {'x-ts-type': Materia}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Materia> {
    return await this.materiaRepository.findById(id);
  }

  @patch('/materias/{id}', {
    responses: {
      '204': {
        description: 'Materia PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() materia: Materia,
  ): Promise<void> {
    await this.materiaRepository.updateById(id, materia);
  }

  @del('/materias/{id}', {
    responses: {
      '204': {
        description: 'Materia DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.materiaRepository.deleteById(id);
  }
}
