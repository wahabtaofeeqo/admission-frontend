import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UtilsService } from '../utils.service';
import { AdmissionService } from '../admission.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.sass']
})

export class AdminsComponent implements OnInit {

  	admins;

  	constructor(private router: Router, private service: AdmissionService) { }

  	ngOnInit() {
  		this.getAdmins();
  	}

  	getAdmins() {
  		this.service.admins().subscribe(res => {
  			if (res.error) {
  				alert(res.errorMessage);
  			}
  			else {
  				this.admins = res.data;
  			}
  		})
  	}

}
