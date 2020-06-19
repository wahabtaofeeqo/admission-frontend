import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdmissionService } from '../admission.service';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.sass']
})
export class AdmissionComponent implements OnInit {

	admissionForm;
	email;
  departments;

  	constructor(private builder: FormBuilder, 
                private service: AdmissionService,
                private session: SessionService, 
                private router: Router,
                private utils: UtilsService) {
  		this.admissionForm = builder.group({
  			father: ['', Validators.required],
  			mother: ['', Validators.required],
  			fatherNumber: ['', Validators.required],
  			occupation: ['', Validators.required],
  			sex: ['', Validators.required],
  			address: ['', Validators.required],
  			religion: ['', Validators.required],
  			score: ['', Validators.required],
  			olevel1: ['', Validators.required],
  			grade1: ['', Validators.required],
  			olevel2: ['', Validators.required],
  			grade2: ['', Validators.required],
  			olevel3: ['', Validators.required],
  			grade3: ['', Validators.required],
  			olevel4: ['', Validators.required],
  			grade4: ['', Validators.required],
  			olevel5: ['', Validators.required],
  			grade5: ['', Validators.required],
  			olevel6: ['', Validators.required],
  			grade6: ['', Validators.required],
  			olevel7: ['', Validators.required],
  			grade7: ['', Validators.required],
  			olevel8: ['', Validators.required],
  			grade8: ['', Validators.required],
  			olevel9: ['', Validators.required],
  			grade9: ['', Validators.required],
  			department: ['', Validators.required],
        school: ['', Validators.required],
        email: ['', Validators.required]
  		});
  	}

  	ngOnInit() {

      if(sessionStorage.getItem('studentEmail') == null) {
        this.router.navigate(['/login']);
      }
      else {
        this.email = sessionStorage.getItem('studentEmail');
        console.log(this.email);
      }
  	}

  	validate(data) {
  		if (data.father == "") {
  			return false;
  		}

  		return true;
  	}

  	apply(data) {

  		if (this.email != "") {

        console.log(this.email);

          const d = {
            father: data.father,
            mother: data.mother,
            fatherNumber: data.fatherNumber,
            occupation: data.occupation,
            sex: data.sex,
            address: data.address,
            religion: data.religion,
            score: data.score,
            olevel1: data.olevel1,
            grade1: data.grade1,
            olevel2: data.olevel2,
            grade2: data.grade2,
            olevel3: data.olevel3,
            grade3: data.grade3,
            olevel4: data.olevel4,
            grade4: data.grade4,
            olevel5: data.olevel5,
            grade5: data.grade5,
            olevel6: data.olevel6,
            grade6: data.grade6,
            olevel7: data.grade7,
            grade7: data.grade7,
            olevel8: data.olevel8,
            grade8: data.grade8,
            olevel9: data.olevel9,
            grade9: data.grade9,
            department: data.department,
            school: data.school,
            email: this.email
          };

  			this.service.apply(d).subscribe(res => {

          console.log(res);

  				if (res.error) {
  					  alert(res.errorMessage);
  				}
  				else {
  					alert(res.message);
  					this.router.navigate(['/profile']);
  				}
  			})
  		}
  	}

    populate(val) {

        if (val != "") {
            this.departments = this.utils.getDepartment(val);
        }
    }
}
