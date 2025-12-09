import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  // A propriedade pensamento pode receber dados do componente pai
  @Input() pensamento : Pensamento = {
    id : 0,
    conteudo : "I love Angular",
    autoria : "William",
    modelo : "modelo3"
  }
  constructor() { }

  ngOnInit(): void {
  }


  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }else{
      return 'pensamento-p'
    }
  }

}
