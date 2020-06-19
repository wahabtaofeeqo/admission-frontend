import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdmissionService } from '../admission.service';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

	applied;
	status;

  	constructor(private builder: FormBuilder, 
                private service: AdmissionService,
                private session: SessionService, 
                private router: Router) { }

  	ngOnInit() {

      if (sessionStorage.getItem("studentEmail") == null) {
          this.router.navigate(['/login']);
      }
      else {
        
        let data = {
          email: sessionStorage.getItem('studentEmail')
        }

        this.checkStatus(data);
      }
  	}


  	checkStatus(data) {
      if (data.email != null) {
          this.service.checkStatus(data).subscribe(res => {
          if (res.error) {
            this.applied = false;
          }
          else {
            this.applied = true;
            this.status = res.status;
          }
        })
      }
  	}

}
