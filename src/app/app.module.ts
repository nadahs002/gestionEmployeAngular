import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployesComponent } from './employes/employes.component';
import { AddEmployeComponent } from './add-employe/add-employe.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeComponent } from './update-employe/update-employe.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParGradeComponent } from './recherche-par-grade/recherche-par-grade.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { UpdateGradeComponent } from './update-grade/update-grade.component';
import { ListeGradesComponent } from './liste-grades/liste-grades.component';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    EmployesComponent,
    AddEmployeComponent,
    AddEmployeComponent,
    UpdateEmployeComponent,
    RechercheParGradeComponent,
    RechercheParNomComponent,
  
    UpdateGradeComponent,
    ListeGradesComponent,
    LoginComponent
    
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
