import { HttpClient } from '@angular/common/http';

export class Contact {

    public httpclient:HttpClient;

    
    constructor(public id: string,
                public nom: string,
                public numero: string,
                public utilisateur: string
                ){
 
    }

}   