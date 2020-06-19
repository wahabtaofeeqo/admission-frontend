import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { UtilsService } from '../utils.service';
import { AdmissionService } from '../admission.service';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.sass']
})
export class PublishComponent implements OnInit {

	departments;
	publishForm;

  	constructor(private builder: FormBuilder, private utils: UtilsService, private service: AdmissionService) {

  		this.publishForm = this.builder.group({
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

    publish(data) {
    	if (data.school != "" && data.department != "" && data.points != "" && data.jamb != "") {
    		this.service.publish(data).subscribe(res => {
    			console.log(res);
    			if (res.error) {
    				alert(res.errorMessage);
    			}
    			else {
    				alert(res.message);
    				this.publishForm.reset();
    			}
    		})
    	}
    }
}
