import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { UtilsService } from '../utils.service';
import { AdmissionService } from '../admission.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})

export class RegisterComponent implements OnInit {

	createForm;

  	constructor(private builder: FormBuilder, private utils: UtilsService, private service: AdmissionService) { 

  		this.createForm = this.builder.group({
          	firstname: '',
          	lastname: '',
          	others: '',
          	email: '',
          	phone: '',
          	password: ''
  		});
  	}

  	ngOnInit() {}

  	register(data) {

        if (this.validate(data)) {
        	this.service.register(data).subscribe(res => {

	            if (res.error) {
	                alert(res.errorMessage);
	            }
	            else {
	              alert("Account Created Successfully");
	              this.createForm.reset();
	            }
	        });
        }
    }

    validate(data) {

    	if (data.firstname == "") {
    		return false;
    	}

    	if (data.lastname == "") {
    		return false;
    	}

    	if (data.others == "") {
    		return false;
    	}

    	if (data.email == "") {
    		return false;
    	}


    	if (data.phone == "") {
    		return false;
    	}

    	if (data.password == "") {
    		return false;
    	}

    	return true;
    }
}
