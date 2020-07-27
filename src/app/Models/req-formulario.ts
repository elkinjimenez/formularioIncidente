export interface ReqFormulario {

  numeroDocumento: NumeroDocumento;
  account: CampoGeneral;
  nombresTitular: Nombres;
  nombresReporta: Nombres;
  soyDueno: string;
  emailReporta: CampoGeneral;
  minTitular: CampoGeneral;
  minReporta: CampoGeneral;
  direccionTitular: CampoDireccion;
  departamento: Departamento;
  ciudad: Ciudad;
  producto: CampoGeneral;
  servicio: CampoGeneral;
  subservicio: CampoGeneral;
  funcionalidad: CampoGeneral;
  estado: CampoGeneral;
  motivoEstado: CampoGeneral;
  tiempoEstado: CampoGeneral;
  sla: CampoGeneral;
  regional: CampoGeneral;
  categoria: CampoGeneral;
  subcategoria: CampoGeneral;
  vozCliente: CampoGeneral;
  codCierre: CampoGeneral;
  latitud: CampoGeneral;
  longitud: CampoGeneral;
  barrio: CampoGeneral;
  zona: CampoGeneral;
  tipoZona: CampoGeneral;
  // DIAGNOSTICO
  guiaDiagnostico: CampoGeneral;
  accion: CampoGeneral;
  grupoAsignacionCaso: CampoGeneral;
  grupoAsignacionGestor: CampoGeneral;
  impacto: CampoGeneral;
  urgencia: CampoGeneral;
  prioridad: CampoGeneral;
  indicentesRelacionados: CampoGeneral;
  cambioRelacionado: CampoGeneral;
  publicacion: CampoGeneral;
  proyectoRelacionado: CampoGeneral;
  fechaInicioFalla: CampoGeneral;
  fechaSolucion: CampoGeneral;
  tecnologia: CampoGeneral;
  tipoLinea: CampoGeneral;
  tipoPlan: CampoGeneral;
  modeloEquipo: CampoGeneral;
  estacionBase: CampoGeneral;
  problema: CampoGeneral;
  causa: CampoGeneral;
  remedio: CampoGeneral;
  // DATOS DE IDENTIFICACION
  canal: CampoGeneral;
  comentarios: CampoGeneral;
  nodo: CampoGeneral;
  ccmm: CampoGeneral;
  transaccion: CampoGeneral;
}

export interface CampoGeneral {
  valor: string;
  estado: boolean;
  campo: boolean;
  mensaje?: string;
  color?: string;
}

interface NumeroDocumento {
  campo: boolean;
  estado: boolean;
  valor: string;
  tipo?: string;
  mensaje: string;
}

interface Nombres {
  nombre: string;
  apellido: string;
  nombresCompleto: string;
  campo: boolean;
  estado: boolean;
  mensaje: string;
  color?: string;
}

interface CampoDireccion {
  valor: string;
  mensaje: string;
  color: string;
  estado: boolean;
  boton: boolean;
  texto: string;
  campo: boolean;
}

interface Ciudad {
  valor: string;
  descripcion: string;
  estado: boolean;
  campo: boolean;
}

interface Departamento {
  valor: string;
  descripcion: string;
  estado: boolean;
  campo: boolean;
}
