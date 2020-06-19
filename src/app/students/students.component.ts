import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdmissionService } from '../admission.service';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.sass']
})
export class StudentsComponent implements OnInit {

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
	        this.getStudents();
	    }
  	}

  	getStudents() {
  		this.service.allStudents().subscribe(res => {
  			if (!res.error) {
  				this.applicants = res.data;
  			}
  			else {
  				
  			}
  		})
  	}
}
