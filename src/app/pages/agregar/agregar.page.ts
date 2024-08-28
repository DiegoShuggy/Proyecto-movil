import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  Apellido: string = "";
  Usuario: string = "";
  Edad!: number;

  constructor(private router: Router, private activedrouter: ActivatedRoute) {
    this.activedrouter.queryParams.subscribe(param =>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.Usuario = this.router.getCurrentNavigation()?.extras?.state?.['user'];
        this.Edad = this.router.getCurrentNavigation()?.extras?.state?.['ed'];
        this.Apellido = this.router.getCurrentNavigation()?.extras?.state?.['ape'];
      }
    })
   }

  ngOnInit() {
  }

}
