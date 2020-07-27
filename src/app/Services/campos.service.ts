import { UpdateCase, Datos, Fechas } from './../Models/req-updateCase';
import { Injectable, OnInit } from '@angular/core';
import { ReqFormulario } from '../Models/req-formulario';
import { Caso } from './../Models/caso';
import { RespParametros } from '../Models/resp-parametros';

@Injectable({
  providedIn: 'root'
})
export class CamposService {

  // TENDREMOS TODOS LOS CAMPOS NECESARIOS DEL FORMULARIO SYNC AQUÍ

  formulario = {
    numeroDocumento: {},
    account: {},
    nombresTitular: {},
    nombresReporta: {},
    emailReporta: {},
    minReporta: {},
    minTitular: {},
    departamento: {},
    ciudad: {},
    direccionTitular: {},
    producto: { valor: '' },
    servicio: { valor: '' },
    subservicio: { valor: '' },
    funcionalidad: { valor: '' },
    estado: { valor: '' },
    motivoEstado: {},
    tiempoEstado: {},
    sla: {},
    regional: {},
    categoria: { valor: '' },
    subcategoria: { valor: '' },
    vozCliente: { valor: '' },
    codCierre: { valor: '' },
    latitud: {},
    longitud: {},
    barrio: {},
    zona: {},
    tipoZona: {},
    // DIAGNSTICO
    guiaDiagnostico: {},
    problema: { valor: '' },
    causa: { valor: '' },
    remedio: { valor: '' },
    accion: { valor: '' },
    grupoAsignacionCaso: { valor: '' },
    grupoAsignacionGestor: {},
    impacto: { valor: '' },
    urgencia: { valor: '' },
    prioridad: { valor: '' },
    indicentesRelacionados: {},
    cambioRelacionado: {},
    publicacion: {},
    proyectoRelacionado: {},
    fechaInicioFalla: {},
    fechaSolucion: {},
    tecnologia: { valor: '' },
    tipoLinea: { valor: '' },
    tipoPlan: {},
    modeloEquipo: {},
    estacionBase: {},
    // DATOS DE IDENTIFICACION
    canal: { valor: '' },
    comentarios: {},
    nodo: {},
    ccmm: {},
    transaccion: {},
  } as ReqFormulario;

  itemsAcordeon = { uno: false, dos: false, tres: false } as Acordeon;

  habilitarBotonA = { uno: true, dos: false, tres: false } as Acordeon;

  lanzarComponentes = { uno: false, dos: false, tres: false } as Acordeon;

  mantenerVerde = { uno: false, dos: false, tres: false } as Acordeon;

  // SELECTS CARGADOS POR ELKIN
  selectCanal = [] as RespParametros[];
  selectTeconolgia = [] as RespParametros[];
  selectTipoLinea = [] as RespParametros[];
  selectImpacto = [] as RespParametros[];
  selectGrupoAsignacionCaso = [] as RespParametros[];
  selectProducto = [] as RespParametros[];
  selectServicio = [] as RespParametros[];
  selectSubServicio = [] as RespParametros[];
  selectFuncionalidad = [] as RespParametros[];
  selectUrgencia = [] as RespParametros[];
  selectPrioridad = [] as RespParametros[];
  selectProblema = [] as RespParametros[];
  selectCausa = [] as RespParametros[];
  selectRemedio = [] as RespParametros[];
  selectEstado = [] as RespParametros[];
  selectAccion = [] as RespParametros[];

  constructor() { }


  llenarTodosSelects() {

    // LLENADO
    this.selectCanal = [
      { valorUnoo: '1', valorDoos: 'Digital' },
      { valorUnoo: '2', valorDoos: 'Presencial' },
      { valorUnoo: '2', valorDoos: 'Telefónico' }
    ] as RespParametros[];

    this.selectTeconolgia = [
      { valorUnoo: '1', valorDoos: '2G' },
      { valorUnoo: '2', valorDoos: '3G' }
    ] as RespParametros[];

    this.selectTipoLinea = [
      { valorUnoo: '1', valorDoos: 'Prepago' },
      { valorUnoo: '2', valorDoos: 'Postpago' }
    ] as RespParametros[];

    this.selectImpacto = [
      { valorUnoo: '1', valorDoos: 'Alto' },
      { valorUnoo: '2', valorDoos: 'Medio' },
      { valorUnoo: '3', valorDoos: 'Bajo' }
    ] as RespParametros[];

    this.selectGrupoAsignacionCaso = [
      { valorUnoo: '1', valorDoos: 'Nivel 1' },
      { valorUnoo: '2', valorDoos: 'Nivel 1.5' },
      { valorUnoo: '3', valorDoos: 'Nivel 2' }
    ] as RespParametros[];

    this.selectProducto = [
      { valorUnoo: '1', valorDoos: 'Producto 1' },
      { valorUnoo: '2', valorDoos: 'Producto 2' },
      { valorUnoo: '3', valorDoos: 'Producto 3' }
    ] as RespParametros[];

    this.selectServicio = [
      { valorUnoo: '1', valorDoos: 'Servicio 1' },
      { valorUnoo: '2', valorDoos: 'Servicio 2' },
      { valorUnoo: '3', valorDoos: 'Servicio 3' }
    ] as RespParametros[];

    this.selectSubServicio = [
      { valorUnoo: '1', valorDoos: 'Subservicio 1' },
      { valorUnoo: '2', valorDoos: 'Subservicio 2' },
      { valorUnoo: '3', valorDoos: 'Subservicio 3' }
    ] as RespParametros[];

    this.selectFuncionalidad = [
      { valorUnoo: '1', valorDoos: 'Funcionalidad 1' },
      { valorUnoo: '2', valorDoos: 'Funcionalidad 2' },
      { valorUnoo: '3', valorDoos: 'Funcionalidad 3' }
    ] as RespParametros[];

    this.selectUrgencia = [
      { valorUnoo: '1', valorDoos: 'Urgencia 1' },
      { valorUnoo: '2', valorDoos: 'Urgencia 2' },
      { valorUnoo: '3', valorDoos: 'Urgencia 3' }
    ] as RespParametros[];

    this.selectPrioridad = [
      { valorUnoo: '1', valorDoos: 'Prioridad 1' },
      { valorUnoo: '2', valorDoos: 'Prioridad 2' },
      { valorUnoo: '3', valorDoos: 'Prioridad 3' }
    ] as RespParametros[];

    this.selectProblema = [
      { valorUnoo: '1', valorDoos: 'Problema 1' },
      { valorUnoo: '2', valorDoos: 'Problema 2' },
      { valorUnoo: '3', valorDoos: 'Problema 3' }
    ] as RespParametros[];

    this.selectCausa = [
      { valorUnoo: '1', valorDoos: 'Causa 1' },
      { valorUnoo: '2', valorDoos: 'Causa 2' },
      { valorUnoo: '3', valorDoos: 'Causa 3' }
    ] as RespParametros[];

    this.selectRemedio = [
      { valorUnoo: '1', valorDoos: 'Remedio 1' },
      { valorUnoo: '2', valorDoos: 'Remedio 2' },
      { valorUnoo: '3', valorDoos: 'Remedio 3' }
    ] as RespParametros[];

    this.selectEstado = [
      { valorUnoo: '1', valorDoos: 'Abierto' },
      { valorUnoo: '2', valorDoos: 'Pendiente' },
      { valorUnoo: '3', valorDoos: 'Progreso' },
      { valorUnoo: '4', valorDoos: 'Resuelto' },
      { valorUnoo: '5', valorDoos: 'Cerrado' },
      { valorUnoo: '6', valorDoos: 'Cancelado' },
    ] as RespParametros[];

    this.selectAccion = [
      { valorUnoo: '1', valorDoos: 'Accion 1' },
      { valorUnoo: '2', valorDoos: 'Accion 2' },
      { valorUnoo: '3', valorDoos: 'Accion 3' }
    ] as RespParametros[];

    // HABILITAR
    this.formulario.canal.campo = true;
    this.formulario.tecnologia.campo = true;
    this.formulario.tipoLinea.campo = true;
    this.formulario.impacto.campo = true;
    this.formulario.grupoAsignacionCaso.campo = true;
    this.formulario.producto.campo = true;
    this.formulario.servicio.campo = true;
    this.formulario.subservicio.campo = true;
    this.formulario.funcionalidad.campo = true;
    this.formulario.urgencia.campo = true;
    this.formulario.prioridad.campo = true;
    this.formulario.problema.campo = true;
    this.formulario.causa.campo = true;
    this.formulario.remedio.campo = true;
    this.formulario.estado.campo = true;
    this.formulario.accion.campo = true;
  }

  dataToFormulario(data: Caso) {

    this.formulario.categoria.valor = data.idCategory;
    this.formulario.subcategoria.valor = data.idSubcategory;
    this.formulario.vozCliente.valor = data.idCustomerVoice;
    this.formulario.codCierre.valor = data.idCloseCode;

    this.formulario.account.valor = data.accountNumber;
    this.formulario.numeroDocumento.valor = data.customerIdentification;
    this.formulario.nombresTitular.nombresCompleto = data.applicantName; // ???
    this.formulario.minTitular.valor = data.phoneNumber; // contactNumber???

    this.formulario.nombresReporta.nombresCompleto = data.namePersonReport; // namePersonReport: string; y personReport: string;
    this.formulario.minReporta.valor = data.contactNumber; // No encontré el que puede corresponder o es este? contactNumber?
    this.formulario.emailReporta.valor = data.email;

    this.formulario.canal.valor = data.channel;
    this.formulario.nodo.valor = data.node;
    this.formulario.ccmm.valor = data.ccmm;
    this.formulario.transaccion.valor = data.transaction;
    this.formulario.comentarios.valor = data.comments;

    this.formulario.producto.valor = data.product;
    this.formulario.servicio.valor = data.service;
    this.formulario.subservicio.valor = data.subservice;
    this.formulario.funcionalidad.valor = data.functionality;

    this.formulario.departamento.valor = data.department;
    this.formulario.ciudad.valor = data.city;
    this.formulario.direccionTitular.valor = data.addressedTo; // addressFails addressedTo
    this.formulario.regional.valor = ''; // No se cual usar
    this.formulario.zona.valor = data.zone;
    this.formulario.tipoZona.valor = data.zoneType;
    this.formulario.barrio.valor = ''; // No se cual usar
    this.formulario.latitud.valor = data.latitude;
    this.formulario.longitud.valor = data.longitude;
    this.formulario.estado.valor = data.idState != null ? data.idState + '' : ''; // idState
    this.formulario.motivoEstado.valor = data.statusReason; // reason No se si esta
    this.formulario.tiempoEstado.valor = data.timeByState;
    this.formulario.sla.valor = data.sla;

    this.formulario.guiaDiagnostico.valor = data.diagnosticGuide;
    this.formulario.causa.valor = data.cause;
    this.formulario.publicacion.valor = data.idPublication;
    this.formulario.accion.valor = data.action;
    this.formulario.proyectoRelacionado.valor = ''; // No se cual usar
    this.formulario.grupoAsignacionCaso.valor = data.caseAssignmentGroup;
    this.formulario.grupoAsignacionGestor.valor = ''; // No se cual usar
    this.formulario.fechaInicioFalla.valor = data.failureDate;
    // this.formulario.time.valor = data.caseHour; // HORA DE INICIO FALLA NO TIENE CAMPO EN FORMULARIO
    this.formulario.fechaSolucion.valor = data.failureDateSolution;
    this.formulario.impacto.valor = data.impact;
    this.formulario.urgencia.valor = data.urgency;
    this.formulario.prioridad.valor = data.priority;
    this.formulario.problema.valor = data.problem;
    this.formulario.causa.valor = data.cause;
    this.formulario.remedio.valor = data.remedy;
    this.formulario.estacionBase.valor = data.baseStations;
    this.formulario.indicentesRelacionados.valor = data.relatedIncident;
    // this.formulario.time.valor = data.caseHour; // MSISDN con falla NO TIENE CAMPO EN FORMULARIO
    this.formulario.cambioRelacionado.valor = data.relatedChange;
    this.formulario.tecnologia.valor = data.technology;
    this.formulario.tipoPlan.valor = data.planType;
    this.formulario.tipoLinea.valor = data.lineType;
    this.formulario.modeloEquipo.valor = data.equipmentModel;

  }

  formularioToData() {

    const data = {} as UpdateCase;
    data.datos = {} as Datos;
    data.fechas = {} as Fechas;

    data.datos.idCategory = this.formulario.categoria.valor;
    data.datos.idSubcategory = this.formulario.subcategoria.valor;
    data.datos.idCustomerVoice = this.formulario.vozCliente.valor;
    data.datos.idCloseCode = this.formulario.codCierre.valor;

    data.datos.accountNumber = this.formulario.account.valor;
    data.datos.customerIdentification = this.formulario.numeroDocumento.valor;
    data.datos.applicantName = this.formulario.nombresTitular.nombresCompleto;
    data.datos.phoneNumber = this.formulario.minTitular.valor; // contactNumber???

    data.datos.namePersonReport = this.formulario.nombresReporta.nombresCompleto; // namePersonReport: string; y personReport: string;
    data.datos.contactNumber = this.formulario.minReporta.valor; // No encontré el que puede corresponder o es este? contactNumber?
    data.datos.email = this.formulario.emailReporta.valor;

    data.datos.channel = this.formulario.canal.valor;
    data.datos.node = this.formulario.nodo.valor;
    data.datos.ccmm = this.formulario.ccmm.valor;
    data.datos.transaction = this.formulario.transaccion.valor;
    data.datos.comments = this.formulario.comentarios.valor;

    data.datos.product = this.formulario.producto.valor;
    data.datos.service = this.formulario.servicio.valor;
    data.datos.subservice = this.formulario.subservicio.valor;
    data.datos.functionality = this.formulario.funcionalidad.valor;

    data.datos.department = this.formulario.departamento.valor;
    data.datos.city = this.formulario.ciudad.valor;
    data.datos.addressedTo = this.formulario.direccionTitular.valor; // addressFails addressedTo
    // this.formulario.regional.valor = ''; // No se cual usar
    data.datos.zone = this.formulario.zona.valor;
    data.datos.zoneType = this.formulario.tipoZona.valor;
    // this.formulario.barrio.valor = ''; // No se cual usar
    data.datos.latitude = this.formulario.latitud.valor;
    data.datos.longitude = this.formulario.longitud.valor;
    data.datos.idState = this.formulario.estado.valor; // idState
    data.datos.statusReason = this.formulario.motivoEstado.valor; // reason No se si esta
    data.datos.timeByState = this.formulario.tiempoEstado.valor;
    data.datos.sla = this.formulario.sla.valor;

    data.datos.diagnosticGuide = this.formulario.guiaDiagnostico.valor;
    data.datos.cause = this.formulario.causa.valor;
    data.datos.idPublication = this.formulario.publicacion.valor;
    data.datos.action = this.formulario.accion.valor;
    // this.formulario.proyectoRelacionado.valor = ''; // No se cual usar
    data.datos.caseAssignmentGroup = this.formulario.grupoAsignacionCaso.valor;
    // this.formulario.grupoAsignacionGestor.valor = ''; // No se cual usar Nota
    data.fechas.failureDate = this.formulario.fechaInicioFalla.valor;
    data.fechas.caseHour = ''; // HORA DE INICIO FALLA NO TIENE CAMPO EN FORMULARIO
    data.fechas.failureDateSolution = this.formulario.fechaSolucion.valor;
    data.datos.impact = this.formulario.impacto.valor;
    data.datos.urgency = this.formulario.urgencia.valor;
    data.datos.priority = this.formulario.prioridad.valor;
    data.datos.problem = this.formulario.problema.valor;
    data.datos.cause = this.formulario.causa.valor;
    data.datos.remedy = this.formulario.remedio.valor;
    data.datos.baseStations = this.formulario.estacionBase.valor;
    data.datos.relatedIncident = this.formulario.indicentesRelacionados.valor;
    data.fechas.caseHour = ''; // MSISDN con falla NO TIENE CAMPO EN FORMULARIO
    data.datos.relatedChange = this.formulario.cambioRelacionado.valor;
    data.datos.technology = this.formulario.tecnologia.valor;
    data.datos.planType = this.formulario.tipoPlan.valor;
    data.datos.lineType = this.formulario.tipoLinea.valor;
    data.datos.equipmentModel = this.formulario.modeloEquipo.valor;

    data.datos.idCase = sessionStorage.getItem('idCase');
    data.datos.userMod = sessionStorage.getItem('user');
    // data.datos.userMod = sessionStorage.getItem('adviser'); No se a cual porner para el Asesor

    return data;
  }

}

interface Acordeon {
  uno: boolean;
  dos: boolean;
  tres: boolean;
}
