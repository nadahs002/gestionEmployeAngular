import { Component, OnInit } from '@angular/core';
import { employe } from '../model/employe.model';
import { EmployeService } from '../services/employe.service';
import { ActivatedRoute , Router} from '@angular/router';
import { Grade } from '../model/grade.model';

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent implements OnInit {

  newEmploye = new employe();
  grade! : Grade[];
  newIdG! : number;
  newGrade! : Grade;

  constructor(private employeService: EmployeService,
    private router : Router ,) { 
    
  }
  ngOnInit(): void {
    this.employeService.listeGrade().subscribe(grade => {this.grade = grade;
    console.log(grade);

    });
    
    }
    

    addEmploye(){
      this.newEmploye.grade = this.grade.find(grade => grade.idG == this.newIdG)!;
      this.employeService.ajouterEmploye(this.newEmploye)
      .subscribe(emp => {
      console.log(emp);
      this.router.navigate(['employes']);
      });
      }
      



}
