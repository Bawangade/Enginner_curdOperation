import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EngineerServiceService {

 
  constructor(private Http:HttpClient) { }
  baseUrl:any='http://3.110.193.86:4444'
  getEngineer2(){
    return this.Http.get(`${this.baseUrl}/engineer`)
  }
  addEngineer2(body:any){
    return this.Http.post(`${this.baseUrl}/engineer`,body)
  }
  UpdateEnginner2(id:any,body:any){
    return this.Http.put(`${this.baseUrl}/engineer/${id}`,body)
  }
  getbyidEngineer2(id:any){
    return this.Http.get(`${this.baseUrl}/engineer/${id}`)
  }
  delEnginner2(id:number){
    return this.Http.delete(`${this.baseUrl}/engineer/${id}`)
  }
}
