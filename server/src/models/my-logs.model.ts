import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class MyLogs extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  AppName: string;

  @property({
    type: 'string',
    required: true,
  })
  ErrorType: string;

  @property({
    type: 'date',
    required: true,
  })
  DateOfError: string;

  @property({
    type: 'string',
    required: true,
  })
  Model: string;

  @property({
    type: 'string',
    required: true,
  })
  TypeOfMethod: string;

  @property({
    type: 'boolean',
    required: true,
  })
  State: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<MyLogs>) {
    super(data);
  }
}

export interface MyLogsRelations {
  // describe navigational properties here
}

export type MyLogsWithRelations = MyLogs & MyLogsRelations;
