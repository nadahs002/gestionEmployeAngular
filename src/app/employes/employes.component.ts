import { Component, OnInit } from '@angular/core';
import { employe } from '../model/employe.model';
import { AuthService } from '../services/auth.service';
import { EmployeService } from '../services/employe.service';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent implements OnInit {

  employes !: employe[]; //tableay d'employe
  

  constructor(private employeService: EmployeService,
    public authService: AuthService ) {
    //this.employes = employeService.listeEmployes();
    }

    ngOnInit(): void {
      this.chargerEmployes();
      }
      chargerEmployes(){
      this.employeService.listeEmployes().subscribe(emps => {
      console.log(emps);
      this.employes = emps;
      });
      }
      supprimerEmploye(p: employe)
      {
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
      this.employeService.supprimerEmploye(p.idEmploye!).subscribe(() => {
      console.log("employe supprimé");
      this.chargerEmployes();
      });
      } 

  

 

}
