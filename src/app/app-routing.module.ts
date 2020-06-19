import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from "./register/register.component";
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from "./admin-login/admin-login.component"
import { AdmissionComponent } from './admission/admission.component';
import { PublishComponent } from './publish/publish.component';
import { CriteriaComponent } from './criteria/criteria.component';
import { AdmittedComponent } from './admitted/admitted.component';
import { LogoutComponent } from "./logout/logout.component"
import { StudentsComponent } from './students/students.component';
import { PointsComponent } from './points/points.component';
import { DetailsComponent } from './details/details.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AdminsComponent } from './admins/admins.component';
import { ProfileComponent } from './profile/profile.component'; 

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'register', component: RegisterComponent},
	{path: 'login', component: LoginComponent},
	{path: 'admin', component: AdminComponent},
	{path: 'admin-login', component: AdminLoginComponent},
	{path: 'admission', component: AdmissionComponent},
	{path: 'publish', component: PublishComponent},
	{path: 'criteria', component: CriteriaComponent},
	{path: 'admitted', component: AdmittedComponent},
	{path: 'logout', component: LogoutComponent},
	{path: 'logout', component: LogoutComponent},
	{path: 'students', component: StudentsComponent},
	{path: 'points', component: PointsComponent},
	{path: 'details/:id', component: DetailsComponent},
	{path: 'new-admin', component: AddAdminComponent},
	{path: 'admins', component: AdminsComponent},
	{path: 'profile', component: ProfileComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }