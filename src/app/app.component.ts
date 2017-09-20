import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl} from '@angular/forms'
import {Hospital } from './hospital';
import { HospitalService } from './hospitalService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HospitalService]
})
export class AppComponent implements OnInit {
  title = 'Hospital';
  myForm: any;
  doctor: Hospital;
  model = new Hospital();
  chgid:number;

  constructor(public hospitalService:  HospitalService) { }

  ngOnInit() {
    this.getDetail();
}
getDetail() {
    this.hospitalService.getData()
      .subscribe(doctor => {
        this.doctor = doctor;
      })
  }

  addPatient1() {
    if (!this.model.id){
    this.hospitalService.addPatient(this.model)
      .subscribe(doctor => {
        this.model = doctor;
        this.getDetail();
        this.clearModel();
      });
    }
   else {
      console.log('editpatient ' + this.model.id);
       this.hospitalService.updatedetails(this.model.id,this.model)
      .subscribe(doctor => {
        this.model = doctor;
        this.getDetail();
        this.clearModel();
      });
    }
  }

  deletepatient(id) {
    this.hospitalService.deletepatient(id)
      .subscribe(() => {
        this.getDetail();
      });
  }

  editpatient(id){
    console.log('updatedetails ' + id);
    this.hospitalService.getPatient(id)
        .subscribe(ds=>{
          this.model = ds;
        })
  }


//  getPatient(id){
//     this.hospitalService.getPatient(id)
//         .subscribe(doctor=>{
//           this.model=doctor;
//         })
//}

clearModel(){
 this.model.id=0;
 this.model.name="";
 this.model.reason="";
 this.model.phone_no="";
}

}