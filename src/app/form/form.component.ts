import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, NgModel } from '@angular/forms';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {

  constructor(public _MessageService: MessageService) { };

  formOrcamento = new FormGroup({
    nome: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
      Validators.pattern['a-zA-Z\u00C0-\u00FF ']

    ])),
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email

    ])),
    servico: new FormControl('', Validators.compose([
      Validators.required

    ])),
    descricao: new FormControl('', Validators.compose([
      Validators.required,
      Validators.max(250),
      Validators.min(10)
    ]))
  }, {updateOn: 'blur'});

  get nome() { return this.formOrcamento.get('nome') };
  get email() { return this.formOrcamento.get('email') };
  get servico() { return this.formOrcamento.get('servico') };
  get descricao() { return this.formOrcamento.get('descricao') };

  servicos = ['Design', 'Desenvolvimento de Sites', 'Service Desk', 'Instalação e Configuração de REDES','Criação e Configuração de Servidores Web','Configuração dos Roteadores da NET'];

  contactForm() {
    this._MessageService.sendMessage(this.formOrcamento.getRawValue()).subscribe(() => {
      alert("Sua solicitação de orçamento foi enviada com sucesso!");
      this.formOrcamento.reset();
    });
  };

  testar() {
    console.log(this.formOrcamento.value.nome);
  };
}
