import {RouterModule, Routes} from '@angular/router';
import {InformaticsComponent} from './pages/informatics/informatics.component';
import {UploadFileComponent} from './pages/fileUpload/upload-file.component';
import {EngineeringComponent} from './pages/engineering/engineering.component';
import {ProgrammingComponent} from './pages/programming/programming.component';
import {CreateTopicComponent} from './pages/create_topic/create-topic.component';
import {ModalProgrammingComponent} from './pages/modal/modal-programming.component';
import {ModelingComponent} from './pages/modeling/modeling.component';
import {EnginComponent} from './pages/realEngin/engin.component';
import {RoboticsComponent} from './pages/robotics/robotics.component';
import {ContactUsComponent} from './pages/contact-us/contact-us.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './_helpers/auth.guard';
import {Role} from './_models/Role';
import {RegisterComponent} from './rgister/register.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: '/informatics', pathMatch: 'full' },
  { path: 'informatics', component: InformaticsComponent },
  { path: 'addBook', component: UploadFileComponent},
  { path: 'engineering', component: EngineeringComponent},
  { path: 'programming', component: ProgrammingComponent},
  { path: 'create', component: CreateTopicComponent},
  { path: 'modeling', component: ModelingComponent},
  { path: 'engin', component: EnginComponent},
  { path: 'robotics', component: RoboticsComponent},
  { path: 'contactUs', component: ContactUsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '**', redirectTo: '/informatics' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,
    { useHash: true, relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ],
  entryComponents: [ModalProgrammingComponent]
})

export class AppRoutingModule {}
