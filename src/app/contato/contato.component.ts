import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  estados = ["Rio de Janeiro", "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso",
  "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio Grande do Norte", "Rio Grande do Sul", 
  "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"]
  constructor() { }
  
  formulario = new FormGroup({
    nome: new FormControl("", Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
      Validators.pattern['a-zA-Z\u00C0-\u00FF ']

    ])),
    email: new FormControl("", Validators.compose([
      Validators.required,
      Validators.email

    ])),
    celular: new FormControl("", Validators.required),
    mensagem: new FormControl("", Validators.compose([
      Validators.required,
      Validators.max(250),
      Validators.min(10)
    ]))
  }, {updateOn: 'blur'})
  
  get nome() { return this.formulario.get('nome') };
  get email() { return this.formulario.get('email') };
  get celular() { return this.formulario.get('celular') };
  get mensagem() { return this.formulario.get('mensagem') };


  ngOnInit() {
  }
//CRAFSS---> IDEIA DA EMPRESA, NÃO TOCAR MISSO NUNCAAAAAAAA
}
