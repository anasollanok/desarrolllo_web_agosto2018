// Uncomment these imports to begin using these cool features!
import {get, param} from '@loopback/openapi-v3';
// import {inject} from '@loopback/context';
import {credenciales} from '../../creds';

//github
const Octokat = require('octokat');
const oct = new Octokat(credenciales);

//starwars
const StarWarsAPI = require('star-wars-api');
const swapi = new StarWarsAPI();



const debug =require('debug')('github-repo');


export class GithubRepoController {
  constructor() {}

@get('/repo/{org}/{repos}')
async getGithubInfo(
	@param.path.string('org') org: string,
	@param.path.string('repos') rep: string
	): Promise<any>{
		debug('org/rep',org,rep);
		const respuesta = await oct.repos(org,rep).fetch();
		return respuesta;
}

@get('/personajesStarWars/{id}')
	async getStarwars(
		@param.path.string('id') id: string
		):Promise<any>{
		var personaje = await swapi.get('people',id);
		return personaje;
	}











}
