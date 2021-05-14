import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html'
})
export class ListarProdutosComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }  

   public produtos: Produto[];

  ngOnInit() {
    this.produtoService.ObterProdutos()
    .subscribe(
      produtos =>{ this.produtos = produtos;
      console.log(produtos);
    },
    error => console.log(error)
    );
  }

}
