import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementar',
  templateUrl: './incrementar.component.html',
  styleUrls: ['./incrementar.component.css']
})
export class IncrementarComponent implements OnInit {

  constructor() { }
  porcentaje = 50;
  ngOnInit() {
  }

  cambiarValor(valor){
    if(this.porcentaje<0){
      this.porcentaje=0;
      return;
    }
    if(this.porcentaje>100){
      this.porcentaje=100;
      return;
    }
    this.porcentaje=this.porcentaje + valor;
  }
}
