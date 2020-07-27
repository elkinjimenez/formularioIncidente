import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/Services/util.service';
import { CamposService } from 'src/app/Services/campos.service';
import { ServiciosjavaService } from 'src/app/Services/serviciosjava.service';
import { SimpleGlobal } from 'ng2-simple-global';

@Component({
  selector: 'app-datos-usuario',
  templateUrl: './datos-usuario.component.html',
  styleUrls: ['./datos-usuario.component.css']
})
export class DatosUsuarioComponent implements OnInit {

  constructor(
    public util: UtilService,
    public campos: CamposService,
    private servicios: ServiciosjavaService,
    private sg: SimpleGlobal
    ) { }

  ngOnInit(): void {
  }

}
