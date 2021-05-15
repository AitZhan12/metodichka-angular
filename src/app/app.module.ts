import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {InformaticsComponent} from './pages/informatics/informatics.component';
import {AppMaterialModule} from './shared/app-material.module';
import {MatDialogModule, MatDialogRef, MatListModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {UploadFileComponent} from './pages/fileUpload/upload-file.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UploadFile} from './services/upload-file.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EngineeringComponent} from './pages/engineering/engineering.component';
import {ProgrammingComponent} from './pages/programming/programming.component';
import {StemServiceService} from './services/stem-service.service';
import {CreateTopicComponent} from './pages/create_topic/create-topic.component';
import {ModalProgrammingComponent} from './pages/modal/modal-programming.component';
import {ModelingComponent} from './pages/modeling/modeling.component';
import {RoboticsComponent} from './pages/robotics/robotics.component';
import {EnginComponent} from './pages/realEngin/engin.component';
import {DownloadPageComponent} from './pages/downloadPage/download-page.component';
import {ContactUsComponent} from './pages/contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {TokenInterceptor} from './_helpers/token';
import {ErrorInterceptor} from './_helpers/error';
import {RegisterComponent} from './rgister/register.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InformaticsComponent,
    UploadFileComponent,
    EngineeringComponent,
    ProgrammingComponent,
    CreateTopicComponent,
    ModalProgrammingComponent,
    ModelingComponent,
    RoboticsComponent,
    EnginComponent,
    DownloadPageComponent,
    ContactUsComponent,
    LoginComponent,
    AdminComponent,
    RegisterComponent
  ],
    imports: [
        BrowserModule,
        AppMaterialModule,
        MatListModule,
        FlexLayoutModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        MatDialogModule,
        ReactiveFormsModule
    ],
  providers: [UploadFile, StemServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
