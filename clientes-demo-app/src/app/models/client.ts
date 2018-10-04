export class Client {
  id: number;
  name: string;
  gender: string;
  url:string;
  birth_year:string;
  height:string;


  constructor( name: string, gender: string, url: string) {

    this.name = name;
    this.gender = gender;
    this.url = url;
  }

  getId(): string{
    return this.url.replace('https://swapi.co/api/people/', '').replace('/', '');
  }
}
