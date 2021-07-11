import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MangoDataSource} from '../datasources';
import {MyLogs, MyLogsRelations} from '../models';

export class MyLogsRepository extends DefaultCrudRepository<
  MyLogs,
  typeof MyLogs.prototype.id,
  MyLogsRelations
> {
  constructor(
    @inject('datasources.mango') dataSource: MangoDataSource,
  ) {
    super(MyLogs, dataSource);
  }
}
