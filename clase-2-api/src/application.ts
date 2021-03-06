import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication,RestServer,RestBindings} from '@loopback/rest';
import {ServiceMixin} from '@loopback/service-proxy';
import {MySequence} from './sequence';
import {
  AuthenticationComponent,
  AuthenticationBindings,
} from '@loopback/authentication';
import * as path from 'path';
import {MyAuthStrategyProvider} from './providers/auth-strategy.provider';



export class Clase2ApiApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    // Set up the custom sequence
    this.sequence(MySequence);

    


    this.component(AuthenticationComponent);

    this.bind(AuthenticationBindings.STRATEGY).toProvider(
      MyAuthStrategyProvider,
    );


    // Set up default home page
    this.static('/', path.join(__dirname, '../../public'));

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };
  }


async start() {
    await super.start();

    const server = await this.getServer(RestServer);
    const port = await server.get(RestBindings.PORT);
    console.log(`REST server running on port: ${port}`);
  }



  
}
