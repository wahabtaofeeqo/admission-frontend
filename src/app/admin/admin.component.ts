import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdmissionService } from '../admission.service';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})

export class AdminComponent implements OnInit {

	applicants;

  	constructor(private builder: FormBuilder, 
                private service: AdmissionService,
                private session: SessionService, 
                private router: Router) { }

  	ngOnInit() {

  		if (sessionStorage.getItem("adminEmail") == null) {
          this.router.navigate(['/admin-login']);
      }
      else {
        this.getApplicants();
      }
  	}

  	getApplicants() {
  		this.service.applicants().subscribe(res => {
  			if (!res.error) {
  				this.applicants = res.data;
  			}
  			else {
  				
  			}
  		})
  	}
}
