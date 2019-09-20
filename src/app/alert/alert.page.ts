import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { ConsultationType } from '../models/consultationType.model';
=======
>>>>>>> f9c98761773c959bb0d5f1f3a2c5744346a84977

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
<<<<<<< HEAD
public position : String[];
public consultationTypes: ConsultationType[] = [new ConsultationType("","","","","","","")];
private consultationTypeselected = new ConsultationType("","","","","","","");
  constructor(public modalCtrl: ModalController,public httpclient:HttpClient) { 

    this.getConsultationType().then(
      res=>{
        this.consultationTypes.shift()
        this.consultationTypes = <ConsultationType []> res;
      },
      error=>{
        console.log(error)
      }
    )
  }
  selecteCT(e){
    this.consultationTypeselected = <ConsultationType>e.detail.value;
  }
=======

  constructor(public modalCtrl: ModalController) { }
>>>>>>> f9c98761773c959bb0d5f1f3a2c5744346a84977

  ngOnInit() {
  }

<<<<<<< HEAD
  async getConsultationType(): Promise<any>{
    return new Promise<any>((resolve,reject) => {
      this.httpclient.get<any>('http://www.sosante.ifcad.info/web/consultation-type/read.php',{}).subscribe(
      (res) => {
        resolve(<ConsultationType []> res.records.map(consultationType_item => new ConsultationType(consultationType_item.id,consultationType_item.prix_matin,consultationType_item.prix_soir,consultationType_item.prix_nuit,consultationType_item.delai,consultationType_item.nom,consultationType_item.description) ))
      },
      (error) => {
          reject(error);
      }
      );
    });
  }

  annulerSos(){
    this.modalCtrl.dismiss();
  }
  
  async getConsultations(){
    this.httpclient.get<any>('http://sosante.ifcad.info/web/consultation/readForUser.php',{
      params: {
      },
    }).subscribe(
    (res) => {
      

    },
    (error) => {
        return false;
    }
    );
  }


  ionViewDidEnter() { 
    // this.geolocation.getCurrentPosition().then((resp) => {

    //   this.position[0] = resp.coords.latitude+"";
    //   this.position[1] = resp.coords.longitude+"";
    //   // resp.coords.latitude
    //   // resp.coords.longitude
    //  }).catch((error) => {
    //    console.log('Error getting location', error);
    //  });
  }
=======
  annulerSos(){
    this.modalCtrl.dismiss();
  }
>>>>>>> f9c98761773c959bb0d5f1f3a2c5744346a84977

}
