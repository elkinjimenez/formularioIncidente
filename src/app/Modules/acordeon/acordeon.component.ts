import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { GestionIteracionComponent } from 'src/app/Shared/gestion-iteracion/gestion-iteracion.component';
import { UtilService } from 'src/app/Services/util.service';
import { SimpleGlobal } from 'ng2-simple-global';
import { ActivatedRoute } from '@angular/router';
import { CamposService } from 'src/app/Services/campos.service';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.component.html',
  styleUrls: ['./acordeon.component.css']
})
export class AcordeonComponent implements OnInit, AfterViewInit {

  @ViewChild(GestionIteracionComponent) gestionIteracion: GestionIteracionComponent;

  tituloForm: string;

  constructor(
    public campos: CamposService,
    public util: UtilService,
    private sg: SimpleGlobal,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.tituloForm = 'Creación de incidente';
    this.sg['crear'] = false;
    let accion = '';
    this.router.queryParams.subscribe(params => {
      accion = params['accion'];
    });
    if (accion === 'crear') {
      this.tituloForm = 'Creación de casos técnicos';
      this.sg['crear'] = true;
    }
  }

  ngAfterViewInit(): void {
    const idFlow = this.sg['params'].idFlujos.incidente0;
    if (this.util.valCampoLleno(idFlow)) {
      this.gestionIteracion.inicializarIteracion(idFlow);
    }
  }

  clickUno() {
    this.campos.itemsAcordeon.uno = !this.campos.itemsAcordeon.uno;
    this.campos.itemsAcordeon.dos = false;
    this.campos.itemsAcordeon.tres = false;
    this.campos.lanzarComponentes.uno = true;
    this.campos.habilitarBotonA.dos = true;
    this.campos.mantenerVerde.uno = true;
  }

  clickDos() {
    this.campos.itemsAcordeon.uno = false;
    this.campos.itemsAcordeon.dos = !this.campos.itemsAcordeon.dos;
    this.campos.itemsAcordeon.tres = false;
    this.campos.lanzarComponentes.dos = true;
    this.campos.habilitarBotonA.tres = true;
    this.campos.mantenerVerde.dos = true;
  }

  clickTres() {
    this.campos.itemsAcordeon.uno = false;
    this.campos.itemsAcordeon.dos = false;
    this.campos.itemsAcordeon.tres = !this.campos.itemsAcordeon.tres;
    this.campos.lanzarComponentes.tres = true;
    this.campos.mantenerVerde.tres = true;
  }


}
