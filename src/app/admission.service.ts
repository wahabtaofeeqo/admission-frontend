import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpParams, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AdmissionService {

	baseURL = "http://localhost/admission";
  	constructor(private client: HttpClient, private httpHandler: HttpHandler, private router: Router) { 

  	}

  	sendComplain(data): Observable<any> {
  		const httpOptions = {
			  headers: new HttpHeaders({
			    'Content-Type':  'application/x-www-form-urlencoded'
			  })
			};

		return this.client.post<any>(`${this.baseURL}/complain`, {data: data}, httpOptions)
		.pipe(catchError(this.handler));
  	}

  	contact(data): Observable<any> {
  		const httpOptions = {
			  headers: new HttpHeaders({
			    'Content-Type':  'application/x-www-form-urlencoded'
			  })
			};

		return this.client.post<any>(`${this.baseURL}/contact`, {data: data}, httpOptions)
		.pipe(catchError(this.handler));
  	}

  	private handler(error: HttpErrorResponse) {
		console.log(error);

		console.log(error.message);
		return throwError("Error!");
	}

	login(data): Observable<any> {

		const httpOptions = {
			  	headers: new HttpHeaders({
			    	'Content-Type':  'application/x-www-form-urlencoded'
			  	})
			};

		return this.client.post<any>(`${this.baseURL}/login`, {data: data}, httpOptions)
		.pipe(catchError(this.handler));
	}

	adminLogin(data): Observable<any> {

		const httpOptions = {
			  	headers: new HttpHeaders({
			    	'Content-Type':  'application/x-www-form-urlencoded'
			  	})
			};

		return this.client.post<any>(`${this.baseURL}/admin`, {data: data}, httpOptions)
		.pipe(catchError(this.handler));
	}

	register(data): Observable<any> {
		const httpOptions = {
			  	headers: new HttpHeaders({
			    	'Content-Type':  'application/x-www-form-urlencoded'
			  	})
			};

		return this.client.post<any>(`${this.baseURL}/register`, {data: data}, httpOptions)
		.pipe(catchError(this.handler));
	}

	public complaints(): Observable<any> {
		return this.client.get<any>(`${this.baseURL}/complaints`).pipe(catchError(this.handler));
	}

	complaint(complainID): Observable<any> {
		const httpOptions = {
			  	headers: new HttpHeaders({
			    	'Content-Type':  'application/x-www-form-urlencoded'
			  	})
			};

		return this.client.post<any>(`${this.baseURL}/complaint`, {data: complainID}, httpOptions)
		.pipe(catchError(this.handler));
	}

	reply(data): Observable<any> {
		const httpOptions = {
			  	headers: new HttpHeaders({
			    	'Content-Type':  'application/x-www-form-urlencoded'
			  	})
			};

		return this.client.post<any>(`${this.baseURL}/reply`, {data: data}, httpOptions)
		.pipe(catchError(this.handler));
	}

	response(data): Observable<any> {
		const httpOptions = {
			  	headers: new HttpHeaders({
			    	'Content-Type':  'application/x-www-form-urlencoded'
			  	})
			};

		return this.client.post<any>(`${this.baseURL}/response`, {data: data}, httpOptions)
		.pipe(catchError(this.handler));
	}

	admin(data): Observable<any> {
		const httpOptions = {
			  	headers: new HttpHeaders({
			    	'Content-Type':  'application/x-www-form-urlencoded'
			  	})
			};

		return this.client.post<any>(`${this.baseURL}/addAdmin`, {data: data}, httpOptions)
		.pipe(catchError(this.handler));
	}

	public admins(): Observable<any> {
		return this.client.get<any>(`${this.baseURL}/admins`).pipe(catchError(this.handler));
	}

	public allStudents(): Observable<any> {
		return this.client.get<any>(`${this.baseURL}/all-students`).pipe(catchError(this.handler));
	}

	students(data): Observable<any> {
		const httpOptions = {
			  	headers: new HttpHeaders({
			    	'Content-Type':  'application/x-www-form-urlencoded'
			  	})
			};

		return this.client.post<any>(`${this.baseURL}/students`, {data: data}, httpOptions)
		.pipe(catchError(this.handler));
	}

	deptDomplaints(data): Observable<any> {
		const httpOptions = {
			  	headers: new HttpHeaders({
			    	'Content-Type':  'application/x-www-form-urlencoded'
			  	})
			};

		return this.client.post<any>(`${this.baseURL}/dept-complaints`, {data: data}, httpOptions)
		.pipe(catchError(this.handler));
	}

	searchDomplaints(data): Observable<any> {
		const httpOptions = {
			  	headers: new HttpHeaders({
			    	'Content-Type':  'application/x-www-form-urlencoded'
			  	})
			};

		return this.client.post<any>(`${this.baseURL}/search-complaints`, {data: data}, httpOptions)
		.pipe(catchError(this.handler));
	}


	apply(data): Observable<any> {
		const httpOptions = {
			  	headers: new HttpHeaders({
			    	'Content-Type':  'application/x-www-form-urlencoded'
			  	})
			};

		return this.client.post<any>(`${this.baseURL}/apply`, {data: data}, httpOptions)
		.pipe(catchError(this.handler));
	}


	checkStatus(data): Observable<any> {
		const httpOptions = {
			  	headers: new HttpHeaders({
			    	'Content-Type':  'application/x-www-form-urlencoded'
			  	})
			};

		return this.client.post<any>(`${this.baseURL}/status`, {data: data}, httpOptions)
		.pipe(catchError(this.handler));
	}

	applicants(): Observable<any> {
		const httpOptions = {
			  	headers: new HttpHeaders({
			    	'Content-Type':  'application/x-www-form-urlencoded'
			  	})
			};

		return this.client.get<any>(`${this.baseURL}/applicants`, httpOptions)
		.pipe(catchError(this.handler));
	}

	admitted(): Observable<any> {
		const httpOptions = {
			  	headers: new HttpHeaders({
			    	'Content-Type':  'application/x-www-form-urlencoded'
			  	})
			};

		return this.client.get<any>(`${this.baseURL}/admitted`, httpOptions)
		.pipe(catchError(this.handler));
	}


	publish(data): Observable<any> {
		const httpOptions = {
			  	headers: new HttpHeaders({
			    	'Content-Type':  'application/x-www-form-urlencoded'
			  	})
			};

		return this.client.post<any>(`${this.baseURL}/publish`, {data: data}, httpOptions)
		.pipe(catchError(this.handler));
	}

	criteria(data): Observable<any> {
		const httpOptions = {
			  	headers: new HttpHeaders({
			    	'Content-Type':  'application/x-www-form-urlencoded'
			  	})
			};

		return this.client.post<any>(`${this.baseURL}/criteria`, {data: data}, httpOptions)
		.pipe(catchError(this.handler));
	}

	getApplicant(data): Observable<any> {
		const httpOptions = {
			  	headers: new HttpHeaders({
			    	'Content-Type':  'application/x-www-form-urlencoded'
			  	})
			};

		return this.client.post<any>(`${this.baseURL}/applicant`, {data: data}, httpOptions)
		.pipe(catchError(this.handler));
	}
}