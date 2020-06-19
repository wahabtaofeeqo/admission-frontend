import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UtilsService } from '../utils.service';
import { AdmissionService } from '../admission.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.sass']
})
export class AddAdminComponent implements OnInit {

  	adminForm;
	schools;
	departments;

  	constructor(private builder: FormBuilder, private utils: UtilsService, private service: AdmissionService) { 
  		this.adminForm = this.builder.group({
  			name: '',
  			password: '',
  			email: '',
  			phone: ''
  		})
  	}

  	ngOnInit() {}

  	populate(type) {
  		if (type == "pro") {
  			this.departments = this.utils.getDepartments();
  		}
  		else {
  			this.departments = null;
  		}
  	}

    addAdmin(data) {

    	if (data.name != "" && data.email != "" && data.phone != "" && data.password != "") {
    		this.service.admin(data).subscribe(res => {
	            if (res.error) {
	                alert(res.errorMessage);
	            }
	            else {

	                this.adminForm.reset();
	                alert(res.message);
	            }
	        })
    	}
    }

}
