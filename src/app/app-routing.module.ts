import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoListComponent } from './components/produto/produto-list/produto-list.component';
import { ProdutoDetalheComponent } from './components/produto/produto-detalhe/produto-detalhe.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {path: '', component: ProdutoListComponent},
  {path: 'detalhes', component: ProdutoDetalheComponent},
  {path: 'cart', component: CartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
