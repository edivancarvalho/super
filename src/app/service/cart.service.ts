import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../modelos/produto';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Produto[] = [];


  constructor(
  ) { }

  getItems(){
    return this.items;
  }

  addCart(produto: Produto){
    this.items.push(produto);
  }
}
