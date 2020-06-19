import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { UtilsService } from '../utils.service';
import { AdmissionService } from '../admission.service';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.sass']
})
export class CriteriaComponent implements OnInit {

	departments;
	criteriaForm;

  	constructor(private builder: FormBuilder, private utils: UtilsService, private service: AdmissionService) { 

  		this.criteriaForm = this.builder.group({
  			school: ['', Validators.required],
  			department: ['',Validators.required],
  			points: ['', Validators.required],
  			jamb: ['', Validators.required]
  		});
  	}

  	ngOnInit() {}

  	populate(val) {

        if (val != "") {
            this.departments = this.utils.getDepartment(val);
        }
    }

    save(data) {
    	if (data.school != "" && data.department != "" && data.points != "" && data.jamb != "") {
    		this.service.criteria(data).subscribe(res => {
    			if (res.error) {
    				alert(res.errorMessage);
    			}
    			else {
    				alert(res.message);
    				this.criteriaForm.reset();
    			}
    		})
    	}
    }

}
