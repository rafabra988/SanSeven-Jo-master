import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContatoComponent } from './contato.component';
import { FormModule } from '../form/form.module';
import { AppModule } from '../app.module';

@NgModule({
  declarations: [ContatoComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
 ],
 providers:[],
 exports:[ContatoComponent]
})
export class ContatoModule { }
