import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  // A propriedade pensamento pode receber dados do componente pai
  @Input() pensamento = {
    conteudo : "I love Angular",
    autoria : "William",
    modelo : "modelo3"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
