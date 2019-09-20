import { HttpClient } from '@angular/common/http';
import { Contact } from './contact.model';

export class User {

    public httpclient:HttpClient;

    
    constructor(public urgence: Contact[],
                public prenom: string,
                public nom: string,
                public date_naissance: string,
                public lieu_naissance: string,
                public genre: string,
                public avatar: string,
                public telphone: string,
                public poids: string,
                public adresse: string,
                public fiche: string,
                public id?: string,
                ){
 
    }

}   