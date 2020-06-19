import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AdmissionService } from '../admission.service';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit {

  loginForm;
  contactForm;
  online;

    constructor(private builder: FormBuilder, private service: AdmissionService, private router: Router) { 
      this.loginForm = this.builder.group({
        email: '',
        password: ''
      });

      this.contactForm = this.builder.group({
        subject: '',
        message: ''
      });
    }

    ngOnInit() {
        console.log(sessionStorage.getItem("studentEmail"));
        
        if (sessionStorage.getItem('studentEmail') == null) {
          this.online = false;
        }
        else {
          this.online = true;
        }
    }

    processLogin(data):void {

        if (data.username != "" || data.password != "") {
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

    processContact(data) {
        if (data.subject != "" && data.message != "") {

            const d = {
              subject: data.subject,
              message: data.message,
              email: sessionStorage.getItem("studentEmail")
            }

            this.service.contact(d).subscribe(res => {
              if (res.error) {
                  alert(res.errorMessage);
              }
              else {
                alert(res.message);
                this.contactForm.reset();
              }
            })
        }
    }

}