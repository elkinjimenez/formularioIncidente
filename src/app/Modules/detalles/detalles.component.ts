import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/Services/util.service';
import { CamposService } from 'src/app/Services/campos.service';
import { ServiciosjavaService } from 'src/app/Services/serviciosjava.service';
import { SimpleGlobal } from 'ng2-simple-global';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  constructor(
    public util: UtilService,
    public campos: CamposService,
    private servicios: ServiciosjavaService,
    private sg: SimpleGlobal
  ) { }

  ngOnInit(): void {
  }

}
