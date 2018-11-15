// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';

import {get, param} from "@loopback/openapi-v3";
import {
  AuthenticationBindings,
  UserProfile,
  authenticate,
} from '@loopback/authentication';





import {creds} from '../../creds';
const Octokat = require('octokat');
const StarWarsAPI = require('star-wars-api');
import {inject} from '@loopback/context';


const octo = new Octokat(creds);
const swapi = new StarWarsAPI();
const debug = require('debug')('gh-repo');



export class StarWarsController {
  constructor(
  	@inject(AuthenticationBindings.CURRENT_USER) private user: UserProfile,
  	) {}

@get('/repo/{org}/{repo}/stars') 
  async getRepoStargazers(
    @param.path.string('org') org: string,
    @param.path.string('repo') repo: string
  ): Promise<number> {
    debug('org/repo: ', org, repo);
    const repoContent = await octo.repos(org, repo).fetch();
    return repoContent;
  }

  @get('/starWars/people/{peo}') 
  async getPeople(
    @param.path.string('peo') peo: string,
  ): Promise<any> {
    debug(peo );
    const people = await swapi.get('people', peo)
    
    return people;
  }


   @authenticate('BasicStrategy')
  @get('/whoami')
  whoAmI(): string {
    return this.user.id;
  }
 





}
