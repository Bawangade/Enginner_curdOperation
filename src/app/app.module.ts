import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEngineerComponent } from './add-engineer/add-engineer.component';
import { DelEngineerComponent } from './del-engineer/del-engineer.component';
import { ListEnginnerComponent } from './list-enginner/list-enginner.component';
import { UpdateEngineerComponent } from './update-engineer/update-engineer.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEngineerComponent,
    DelEngineerComponent,
    ListEnginnerComponent,
    UpdateEngineerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
