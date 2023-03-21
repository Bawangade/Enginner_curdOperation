import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EngineerServiceService } from '../engineer-service.service';

@Component({
  selector: 'app-add-engineer',
  templateUrl: './add-engineer.component.html',
  styleUrls: ['./add-engineer.component.css']
})
export class AddEngineerComponent {
  engineerList: any;
  EngineerForm = new FormGroup({

    id: new FormControl,
    firstName: new FormControl,
    lastName: new FormControl,
    emailId: new FormControl
  })

  constructor(private AddEngineer1: EngineerServiceService) { }
  addEngineer() {
    this.AddEngineer1.addEngineer2(this.EngineerForm.value).subscribe(resp => console.log(resp))
  }

}
