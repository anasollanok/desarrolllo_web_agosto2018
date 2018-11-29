import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './watson.datasource.json';

export class WatsonDataSource extends juggler.DataSource {
  static dataSourceName = 'watson';

  constructor(
    @inject('datasources.config.watson', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
