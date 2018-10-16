import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Client } from '../../models/client';


@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent implements OnInit {

	clientModel = new Client('Juan Velez Ballesteros','masc','url');

	clientForm = new FormGroup({
		name: new FormControl(),
		gender: new FormControl()
	});


  constructor(private formBuilder: FormBuilder) { 
  	this.createForm();
  }

  createForm(){
  		this.clientForm = this.formBuilder.group(
  		{
  			name: new FormControl(this.clientModel.name,Validators.minLength(4))
  				,
  			gender: new FormControl(this.clientModel.gender)
  		}
  		);
  }



enviarFormulario(){
	let loquesea = this.clientForm.value;
	console.log(loquesea);
	this.clientModel.name = this.clientForm.value.name;
	this.clientModel.gender = this.clientForm.value.gender;
}

  ngOnInit() {
  }

  get name():any{
  	return this.clientForm.get('name');
  }


  get clienteActual(){
  	return JSON.stringify(this.clientModel);

  };

}
