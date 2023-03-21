import { Component } from '@angular/core';
import { EngineerServiceService } from '../engineer-service.service';

@Component({
  selector: 'app-list-enginner',
  templateUrl: './list-enginner.component.html',
  styleUrls: ['./list-enginner.component.css']
})
export class ListEnginnerComponent {

  EngineerList:any;
  constructor(private ListEngineer1:EngineerServiceService){this.listEnginner()}

  listEnginner(){
    this.ListEngineer1.getEngineer2().subscribe(res=>this.EngineerList=res)
  }
}
