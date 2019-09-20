
export class Question {
    constructor(public designation: string,
                public responsesPossible: string[],
                public reponse: string,
                public categorie: string,
                public subQuestion?: Question,
                ){
 
    }

}   