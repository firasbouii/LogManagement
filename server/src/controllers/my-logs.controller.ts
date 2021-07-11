
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {MyLogs} from '../models';
import {MyLogsRepository} from '../repositories';
import {authenticate} from '@loopback/authentication';
@authenticate('jwt')
export class MyLogsController {
  constructor(
    
    @repository(MyLogsRepository)
    public myLogsRepository : MyLogsRepository,
  ) {}

  @post('/my-logs')
  @response(200, {
    description: 'MyLogs model instance',
    content: {'application/json': {schema: getModelSchemaRef(MyLogs)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MyLogs, {
            title: 'NewMyLogs',
            exclude: ['id'],
          }),
        },
      },
    })
    myLogs: Omit<MyLogs, 'id'>,
  ): Promise<MyLogs> {
    return this.myLogsRepository.create(myLogs);
  }

  @get('/my-logs/count')
  @response(200, {
    description: 'MyLogs model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(MyLogs) where?: Where<MyLogs>,
  ): Promise<Count> {
    return this.myLogsRepository.count(where);
  }

  
  @get('/my-logs')
  @response(200, {
    description: 'Array of MyLogs model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(MyLogs, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(MyLogs) filter?: Filter<MyLogs>,
  ): Promise<MyLogs[]> {
    return this.myLogsRepository.find(filter);
  }

  @patch('/my-logs')
  @response(200, {
    description: 'MyLogs PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MyLogs, {partial: true}),
        },
      },
    })
    myLogs: MyLogs,
    @param.where(MyLogs) where?: Where<MyLogs>,
  ): Promise<Count> {
    return this.myLogsRepository.updateAll(myLogs, where);
  }

  @get('/my-logs/{id}')
  @response(200, {
    description: 'MyLogs model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(MyLogs, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(MyLogs, {exclude: 'where'}) filter?: FilterExcludingWhere<MyLogs>
  ): Promise<MyLogs> {
    return this.myLogsRepository.findById(id, filter);
  }

  @patch('/my-logs/{id}')
  @response(204, {
    description: 'MyLogs PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MyLogs, {partial: true}),
        },
      },
    })
    myLogs: MyLogs,
  ): Promise<void> {
    await this.myLogsRepository.updateById(id, myLogs);
  }

  @put('/my-logs/{id}')
  @response(204, {
    description: 'MyLogs PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() myLogs: MyLogs,
  ): Promise<void> {
    await this.myLogsRepository.replaceById(id, myLogs);
  }

  @del('/my-logs/{id}')
  @response(204, {
    description: 'MyLogs DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.myLogsRepository.deleteById(id);
  }
}
