import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdmissionService } from '../admission.service';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.sass']
})

export class AdminLoginComponent implements OnInit {

	loginForm;
  	constructor(private builder: FormBuilder, 
                private service: AdmissionService,
                private session: SessionService, 
                private router: Router) { 

  		this.loginForm = this.builder.group({
  			username: ['', Validators.required],
  			password: ['', Validators.required]
  		});
  	}

  	ngOnInit() {
  		
  	}

  	processLogin(data) {
  		if (data.username != "" && data.password != "") {
  			this.service.adminLogin(data).subscribe(res => {
  			
	  			if (res.error) {
	  				alert(res.errorMessage);
	  			}
	  			else {

	  				sessionStorage.setItem("adminEmail", data.username);
	  				this.router.navigate(['/admin']);
	  			}
	  		})
  		}
  	}
}
