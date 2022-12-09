import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { EmployeService } from '../services/employe.service';
import { employe } from '../model/employe.model';
import { Grade } from '../model/grade.model';

@Component({
  selector: 'app-update-employe',
  templateUrl: './update-employe.component.html',
  styles: [],
})
export class UpdateEmployeComponent implements OnInit {
  currentEmploye = new employe();
  grade! : Grade[];
  updatedGId! : number ;


  constructor(private activatedRoute: ActivatedRoute,
    private employeService: EmployeService , private router :Router,
    ) { }

    ngOnInit() {
      this.employeService.listeGrade().
      subscribe(grades => {this.grade= grades;
      console.log(grades);
      });

      this.employeService.consulterEmploye(this.activatedRoute.snapshot.params['id']).
        subscribe( emp =>{ this.currentEmploye = emp; 
        this.updatedGId = 
        this.currentEmploye.grade.idG;
        } ) ;
      
      }

      updateEmploye() {
        this.currentEmploye.grade = this.grade.find(grade => grade.idG == this.updatedGId)!;
        this.employeService.updateEmploye(this.currentEmploye).subscribe(grade => {
        this.router.navigate(['employes']); }
        );
        }

}
