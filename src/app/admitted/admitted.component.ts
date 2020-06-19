import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdmissionService } from '../admission.service';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admitted',
  templateUrl: './admitted.component.html',
  styleUrls: ['./admitted.component.sass']
})

export class AdmittedComponent implements OnInit {

  	applicants;

  	constructor(private builder: FormBuilder, 
                private service: AdmissionService,
                private session: SessionService, 
                private router: Router) { }

  	ngOnInit() {
  		this.getApplicants();
  	}

  	getApplicants() {
  		this.service.admitted().subscribe(res => {
  			console.log(res);
  			if (!res.error) {
  				this.applicants = res.data;
  			}
  			else {
  				alert(res.errorMessage);
  			}
  		})
  	}
}
