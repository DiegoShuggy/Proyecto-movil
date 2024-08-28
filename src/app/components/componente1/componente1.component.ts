import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.scss'],
})
export class Componente1Component  implements OnInit {
  apellido:string = "";
  @Input() titulo: string = "";
  @Input() datos: any;
  
  constructor() { }

  ngOnInit() {}

}
