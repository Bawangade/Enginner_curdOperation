import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EngineerServiceService } from '../engineer-service.service';

@Component({
  selector: 'app-del-engineer',
  templateUrl: './del-engineer.component.html',
  styleUrls: ['./del-engineer.component.css']
})
export class DelEngineerComponent {
  akshay:any
  delEngineerForm=new FormGroup({

    id:new FormControl,
    firstName:new FormControl,
    lastName:new FormControl,
    emailId:new FormControl,
    

  })
  constructor(private delEngineer1:EngineerServiceService){this.listEnginner()}
  listEnginner(){
    this.delEngineer1.getEngineer2().subscribe(res=>this.akshay=res)
  }
  
  delEngineer(id:number){
    this.delEngineer1.delEnginner2(id).subscribe(respo=>console.log(respo))

  }

}
