import { Component } from '@angular/core';
import { RapportPage } from '../rapport/rapport.page';
import { ModalController } from '@ionic/angular';
<<<<<<< HEAD
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Consultation } from '../models/consultation.model';
import { ConsultationType } from '../models/consultationType.model';
import { User } from '../models/user.model';
import { Question } from '../models/question.model';
const TOKEN_KEY = 'auth-token';
=======

>>>>>>> f9c98761773c959bb0d5f1f3a2c5744346a84977
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
<<<<<<< HEAD
  public user : User;
  public fiche : Question[];
  public consultations : Consultation[];
  public pages_fiche : Question[][] = [[new Question("",[""],"","")]];
  public pages : Consultation[][] = [[new Consultation("","","","","","",new ConsultationType("","","","","","",""),"","")]]
  constructor(public modalController:ModalController,private storage: Storage,public httpclient:HttpClient) {
    this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.user = <User>res ;
        this.getFiche();
        this.getConsultations();
      }
    })
  }

  async getFiche(){
    
    this.httpclient.get<any>(this.user.fiche).subscribe(
    (res) => {
      this.pages_fiche.shift();
      this.fiche = res;
      this.fiche = (<Question []> res.map(question_item => new Question(question_item.designation,question_item.reponse_possible,question_item.reponse,question_item.categorie) ));
      
      for (let i = 0; i < (this.fiche.length +1); i=i+7) {
        let temp:Question[] = [new Question("",[""],"","")];
        temp.shift();
        if(this.fiche[i]){temp.push(this.fiche[i]); }
        if(this.fiche[i+1]){temp.push(this.fiche[i+1]); }
        if(this.fiche[i+1]){temp.push(this.fiche[i+2]); }
        if(this.fiche[i+1]){temp.push(this.fiche[i+3]); }
        if(this.fiche[i+1]){temp.push(this.fiche[i+4]); }
        if(this.fiche[i+1]){temp.push(this.fiche[i+5]); }
        if(this.fiche[i+1]){temp.push(this.fiche[i+6]); }
        this.pages_fiche.push(temp);
      }
      console.log(this.pages_fiche)
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
=======

  constructor(public modalController:ModalController) {}

>>>>>>> f9c98761773c959bb0d5f1f3a2c5744346a84977
  async showrapport(){
      const modal: HTMLIonModalElement =
        await this.modalController.create({
            component: RapportPage            
      });

      await modal.present();
  }

}
