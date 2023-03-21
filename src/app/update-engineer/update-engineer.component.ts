import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EngineerServiceService } from '../engineer-service.service';

@Component({
  selector: 'app-update-engineer',
  templateUrl: './update-engineer.component.html',
  styleUrls: ['./update-engineer.component.css']
})
export class UpdateEngineerComponent {
  EngineerList: any;
  // addEngineer() {
  // throw new Error('Method not implemented.');
  // }
    Enginner:any
    EngineerForm=new FormGroup({
  
      id:new FormControl,
      firstName:new FormControl,
      lastName:new FormControl,
      emailId:new FormControl,
      
    })
  
    constructor(private UpdateEngineer1 :EngineerServiceService){this.listEnginner()}
    listEnginner(){
      this.UpdateEngineer1.getEngineer2().subscribe(res=>this.EngineerList=res)
    }
    AddEngineer(){
      this.UpdateEngineer1.addEngineer2(this.EngineerForm.value).subscribe(resp=>console.log(resp))
     }
    // UpdateEnginner(id:any,body:any){
    //   this.UpdateEngineer1.UpdateEnginner2(this.EngineerForm.value.id,this.EngineerForm.value).subscribe(resp=>console.log(resp))
    // }
    getEngineerbyID(id:any){
      this.UpdateEngineer1.getbyidEngineer2(id).subscribe((respo:any)=>{this.EngineerForm.setValue(respo)})
    }
}
