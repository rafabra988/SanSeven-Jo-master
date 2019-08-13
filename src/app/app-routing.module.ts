import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { FormComponent } from './form/form.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DepoimentoComponent } from './depoimento/depoimento.component';
import { ServicoComponent } from './servico/servico.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "contato", component: ContatoComponent},
  {path: "form", component: FormComponent},
  {path: "portifolio", component: PortifolioComponent},
  {path: "depoimento", component: DepoimentoComponent},
  {path: "servico", component: ServicoComponent},
  {path: "**", component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
