import { ConsultationType } from './consultationType.model';


export class Consultation {

    
    constructor(public id: string,
                public code: string,
                public etat: string,
                public adresse: string,
                public note: string,
                public dateAlert: string,
                public consultationtype: ConsultationType,
                public dateDebut: string,
                public dateFin: string,
                public medecin?: string,
                ){
 
    }
    

 
}