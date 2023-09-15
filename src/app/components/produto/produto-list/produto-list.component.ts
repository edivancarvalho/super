import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Produto, produtos } from 'src/app/modelos/produto';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit{
  produtos = [...produtos];
  produto: Produto | undefined;

  constructor(
    private cartService: CartService,
    private toast: ToastrService
    ) { }
    
  ngOnInit(): void {
  }

  addToCard(produto: Produto){
    this.cartService.addCart(produto);
    this.toast.success("Item Adicionado no Carrinho", "Produto");
  }
}

