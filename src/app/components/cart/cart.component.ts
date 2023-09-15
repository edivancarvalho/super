import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items = this.cartService.getItems();
  totalPrice: number = 0;

  constructor(
    private cartService: CartService,
    private toast: ToastrService
  ) {
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    this.totalPrice = 0;

    for (const item of this.items) {

      this.totalPrice += item.preco;

    }
  }

  removeItem(item: any) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.calculateTotalPrice();
      this.toast.info("Item Removido do Carrinho", "Produto");

    }
  }

}
