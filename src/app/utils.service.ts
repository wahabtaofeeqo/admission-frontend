import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

	items;
	
  	constructor() { }

  	getDepartment(school): any {
  		switch (school) {
  			case "science":
  				this.items = ['Computer Science', 'Food Technology', 'Hospitality Management', 'Leisure and Tourism', 'Nutrition and Dietetics', 'Pharmaceutical Technology', 'Science Laboratory Technology', 'Statistics & Mathematics'];
  				break;
  			
  			case "management":
	  			this.items = ['Accountancy', 'Banking and Finance', 'Business Administration', 'Marketing'];
	  			break

	  		case "communication":
	  			this.items = ['Mass Communication', 'Office and Technology Management'];
	  			break

	  		case "environmental":
	  			this.items = ['Architecture', 'Urban and Regional Planning', 'Estate Management', 'Building Technology', 'Quantity Surveying', 'Surveying and Geo Informatics', 'Leisure and Tourism'];
	  			break;

	  		case "engineering":
	  			this.items = ['Civil Engineering', 'Computer Engineering', 'Mechanical Engineering', 'Electrical OR Electronic Engineering'];
	  			break
  		}

  		return this.items;
  	}

    getDepartments() {

        const depts = ['Computer Science', 
        'Food Technology', 'Hospitality Management', 'Leisure and Tourism', 
        'Nutrition and Dietetics', 'Pharmaceutical Technology', 
        'Science Laboratory Technology', 
        'Statistics & Mathematics',
        'Accountancy', 
        'Banking and Finance', 'Business Administration', 'Marketing',
        'Mass Communication', 'Office and Technology Management',
        'Architecture', 'Urban and Regional Planning', 'Estate Management', 
        'Building Technology', 
        'Quantity Surveying', 
        'Surveying and Geo Informatics', 'Leisure and Tourism',
        'Civil Engineering', 'Computer Engineering', 'Mechanical Engineering', 'Electrical OR Electronic Engineering'];

        return depts;
    }

  	getSchools(): any {
  		const schools = ["Science and Technology", 
  		"Business and Management Studies", 
  		"Communication and Information Technology",
  		"Environmental Studies",
  		"Engineering"];

  		return schools;
  	}
}
