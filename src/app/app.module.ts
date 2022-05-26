import { UserDetailComponent } from './user-detail/user-detail.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TableModule, UtilitiesModule } from '@coreui/angular';
import {
  FormModule,
  GridModule,
  HeaderModule,
  NavModule,
} from '@coreui/angular';
import { ButtonModule } from '@coreui/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from '@coreui/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register/register.component';
import { HeaderComponent } from './header/header/header.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { IconModule, IconSetService } from '@coreui/icons-angular';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: UserDetailComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    DashboardComponent,
    UserDetailComponent,
  ],
  imports: [
    BrowserModule,
    GridModule,
    ButtonModule,
    ReactiveFormsModule,
    FormModule,
    ModalModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    HttpClientModule,
    HeaderModule,
    NavModule,
    TableModule,
    UtilitiesModule,
    IconModule,
  ],
  providers: [IconSetService],
  bootstrap: [AppComponent],
})
export class AppModule {}
