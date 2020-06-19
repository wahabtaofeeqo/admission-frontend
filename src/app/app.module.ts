import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ApplyComponent } from './apply/apply.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { StuSidebarComponent } from './stu-sidebar/stu-sidebar.component';
import { AdmissionComponent } from './admission/admission.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PublishComponent } from './publish/publish.component';
import { CriteriaComponent } from './criteria/criteria.component';
import { AdmittedComponent } from './admitted/admitted.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AdminsComponent } from './admins/admins.component';
import { LogoutComponent } from './logout/logout.component';
import { StudentsComponent } from './students/students.component';
import { PointsComponent } from './points/points.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ApplyComponent,
    AdminComponent,
    AdminLoginComponent,
    NavbarComponent,
    ProfileComponent,
    StuSidebarComponent,
    AdmissionComponent,
    SidebarComponent,
    PublishComponent,
    CriteriaComponent,
    AdmittedComponent,
    AddAdminComponent,
    AdminsComponent,
    LogoutComponent,
    StudentsComponent,
    PointsComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
