import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map' ;

@Injectable()
export class HospitalService {

  constructor( private http:Http) { }
  getData(){
    return this.http.get("http://localhost:8080/hospital")
        .map(res => res.json());
  }
   addPatient(info){
    return this.http.post("http://localhost:8080/hospital",info)
        .map(res => res.json());
  }
  getPatient(id){
    return this.http.get("http://localhost:8080/hospital/"+id)
        .map(res => res.json());
  }
  deletepatient(id){
    return this.http.delete("http://localhost:8080/hospital/"+id)
  }
  updatedetails(id, info){
    return this.http.put("http://localhost:8080/hospital/"+id,info)
        .map(res => res.json());
  }
}