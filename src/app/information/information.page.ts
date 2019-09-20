import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Consultation } from '../models/consultation.model';
import { ConsultationType } from '../models/consultationType.model';
import { User } from '../models/user.model';
import { Question } from '../models/question.model';
const TOKEN_KEY = 'auth-token';

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage implements OnInit {

  public authorisation : boolean = false;
  public user : User;
  public fiche : Question[] = [new Question("",[""],"","")]
  public consultations : Consultation[];
  public pages : Consultation[][] = [[new Consultation("teste","","","","","",new ConsultationType("","","","","","",""),"","")]]
 
  constructor(public modalCtrl:ModalController,private storage: Storage,public httpclient:HttpClient) {
    this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.user = <User>res ;
        this.getFiche();
        this.getConsultations();
      }
    })
   }

  ngOnInit() {
  }

  annuler(){
    this.modalCtrl.dismiss();
  }
  authoriser(){
    this.authorisation = this.authorisation ? false: true;
  }
  async getFiche(){
    
    this.httpclient.get<any>(this.user.fiche).subscribe(
    (res) => {
      this.fiche.shift();
      this.fiche = (<Question []> res.map(question_item => new Question(question_item.designation,question_item.reponse_possible,question_item.reponse,question_item.categorie) ));
      console.log(this.fiche)
    },
    (error) => {
        return false;
    }
    );
  }

  async getConsultations(){
    this.httpclient.get<any>('http://sosante.ifcad.info/web/consultation/readForUser.php',{
      params: {
        user: this.user.id
      },
    }).subscribe(
    (res) => {
      
      this.consultations = (<Consultation []> res.records.map(consultation_item => new Consultation(consultation_item.id,consultation_item.code,consultation_item.etat,consultation_item.adresse,consultation_item.note,consultation_item.dateAlert,new ConsultationType(consultation_item.consultationtype.id,consultation_item.consultationtype.prix_matin,consultation_item.consultationtype.prix_soir,consultation_item.consultationtype.nuit,consultation_item.consultationtype.delai,consultation_item.consultationtype.nom,consultation_item.consultationtype.decription),consultation_item.dateDebut,consultation_item.dateFin,consultation_item.medecin.id)));
      this.pages.shift()
      for (let i = 0; i < (this.consultations.length +1); i=i+2) {
        let temp:Consultation[] = [new Consultation("","","","","","",new ConsultationType("","","","","","",""),"","")];
        temp.shift();
        if(this.consultations[i]){temp.push(this.consultations[i]); }
        if(this.consultations[i+1]){temp.push(this.consultations[i+1]); }
        this.pages.push(temp);
      }
    },
    (error) => {
        return false;
    }
    );
  }

}
