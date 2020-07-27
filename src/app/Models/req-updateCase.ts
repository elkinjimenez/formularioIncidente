export interface UpdateCase {
  datos: Datos;
  fechas: Fechas;
}

export interface Datos {
  request: string;
  reason: string;
  phoneNumber: string;
  addressedTo: string;
  applicantName: string;
  applicantSurname: string;
  email: string;
  contactNumber: string;
  requestObject: string;
  factsRequest: string;
  accountNumber: string;
  transaction: string;
  idState: string;
  idCategory: string;
  idSubcategory: string;
  idCustomerVoice: string;
  idCloseCode: string;
  originCase: string;
  channel: string;
  adviser: string;
  comments: string;
  customerIdentification: string;
  personReport: string;
  namePersonReport: string;
  node: string;
  ccmm: string;
  product: string;
  service: string;
  subservice: string;
  functionality: string;
  statusReason: string;
  timeByState: string;
  sla: string;
  addressFails: string;
  city: string;
  department: string;
  latitude: string;
  longitude: string;
  sector: string;
  zone: string;
  zoneType: string;
  diagnosisLevel: string;
  typificationCloseCase: string;
  diagnosticGuide: string;
  cause: string;
  action: string;
  caseAssignmentGroup: string;
  incidentAssignmentGroup: string;
  notes: string;
  impact: string;
  urgency: string;
  priority: string;
  relatedIncident: string;
  relatedChange: string;
  idPublication: string;
  incidentManagementSystem: string;
  baseStations: string;
  msisdnFailure: string;
  technology: string;
  lineType: string;
  planType: string;
  equipmentModel: string;
  idCase: string;
  userMod: string;
  status: string;
  typeRequest: string;
  problem: string;
  remedy: string;
  userCreate: string;
}

export interface Fechas {
  dateCase: string;
  caseDateEnd: string;
  caseHour: string;
  caseHourEnd: string;
  failureDate: string;
  failureDateSolution: string;
  dateMod: string;
  dateCreate: string;
}
