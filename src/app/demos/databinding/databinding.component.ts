import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './databinding.component.html'
})
export class DatabindingComponent {

  public contarCliques: number  = 0;
  public urlImagem = "https://th.bing.com/th/id/R1a632d2b39f3275752f2c4b3c73477a3?rik=E20kLmJklGA1mg&pid=ImgRaw";
  public nome: string = "";

  adicionarClique(){
    this.contarCliques++;

    if (this.contarCliques >= 4)
    {
      this.urlImagem = "https://th.bing.com/th/id/OIP.YBT_Ivod1doGeT0oeUdMNwAAAA?pid=ImgDet&rs=1";
    }

  }
  SubtrairClique(){
    this.contarCliques--;

    if(this.contarCliques >= 4)
    {
      this.urlImagem = "https://th.bing.com/th/id/OIP.YBT_Ivod1doGeT0oeUdMNwAAAA?pid=ImgDet&rs=1";
    }
    if(this.contarCliques <= 4)
    {
      this.urlImagem = "https://th.bing.com/th/id/R1a632d2b39f3275752f2c4b3c73477a3?rik=E20kLmJklGA1mg&pid=ImgRaw";
    }        
  }
  KeyUp(event: any){
    this.nome = event.target.value;
  }
  

}
