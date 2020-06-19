import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdmissionService } from '../admission.service';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})

export class DetailsComponent implements OnInit {

	id;
	details;
	grades;
	olevels;

  	constructor(private activted: ActivatedRoute, private service: AdmissionService) {

  	}

  	ngOnInit() {
  		this.activted.paramMap.subscribe(params => {

          this.id = params.get("id");
  			  this.getStudent({id: params.get("id")});
  		})
  	}

  	getStudent(data) {
  		this.service.getApplicant(data).subscribe(res => {
  			if (res.error) {
  				alert("This Student Has Not Applied For Admission");
  			}
  			else {
  				this.details = res.data;
  				this.grades = this.details.grades.split(",");
  				this.olevels = this.details.olevels.split(",");
  			}
  		})
  	}
}
