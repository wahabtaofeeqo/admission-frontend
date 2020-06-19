import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdmissionService } from '../admission.service';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})


export class LoginComponent implements OnInit {

	  loginForm;

  	constructor(private builder: FormBuilder, 
                private service: AdmissionService,
                private session: SessionService, 
                private router: Router) {

  		this.loginForm = this.builder.group({
  			email: ['', Validators.required],
  			password: ['', Validators.required]
  		});
  	}

  	ngOnInit() {
      	if (this.isOnline()) {
      		this.router.navigate(['/profile']);
      	}
  	}

  	isOnline() {

      let e = sessionStorage.getItem('studentEmail');
      if (e != null) {
        return true;
      }
      else {
        return false;
      }
    }

  	processLogin(data) {
  		
      	this.service.login(data).subscribe(res => {

          	if (res.error) {
              	alert(res.errorMessage);
          	}
          	else {

              	sessionStorage.setItem("studentEmail", data.email);
              	this.router.navigate(['/profile']);
          	}
      	})
  	}
}
