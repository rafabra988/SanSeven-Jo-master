import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  servicos = ['Serviços', 'Vão', 'Aqui', 'Dentro'];
  formulario:FormGroup;
  constructor(private formBilder:FormBuilder) { }

  ngOnInit():void {
    this.configForm();
  }

  configForm(){
    this.formulario = this.formBilder.group({
      nome:['', [Validators.required, Validators.maxLength(30), Validators.minLength(4)]],
      email:['', [Validators.required, Validators.email]],
      cxMsg:['', Validators.required]
    })
  }

  criar(){
    
  }
  //Criar máscara para o formulário.
}
