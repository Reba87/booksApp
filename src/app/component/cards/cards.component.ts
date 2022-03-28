import { Component,Output,EventEmitter, OnInit,Input, } from '@angular/core';

import { Libro } from '../../models/libro';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input () cards:Libro
  @Input () even:string
  @Input() odd:string

  @Output () eliminoLibro = new EventEmitter<number>();
  constructor() { }


  deletLibro(id_libro) {
    let idLibro = id_libro
    this.eliminoLibro.emit(idLibro);
    console.log(id_libro);
  }n
  ngOnInit(): void {
  }

}
