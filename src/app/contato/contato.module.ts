import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ContatoComponent } from './contato.component';
import { FormModule } from '../form/form.module';

@NgModule({
  declarations: [ContatoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
 ],
 providers:[],
 exports:[ContatoComponent]
})
export class ContatoModule { }
