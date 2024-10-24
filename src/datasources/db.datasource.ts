import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'db',
  connector: 'mongodb',
  // url: 'mongodb+srv://stevedtannahill:<db_password>@th2.qkkaw.mongodb.net/?retryWrites=true&w=majority&appName=TH2',
  url: 'mongodb+srv://Admin:Admin@th2.qkkaw.mongodb.net/',
  //url: process.env.MONGODB_CONNECT_URL,
  host: '',
  port: '',
  user: '',
  password: '',
  database: 'hurtado-dev',
  useNewUrlParser: true,
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
