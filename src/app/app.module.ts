import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SheardModule } from 'src/Modules/Sheard/Sheard.module';
import { LayoutComponent } from 'src/Layout/Layout.component';
import { AuthModule } from 'src/Modules/Auth/Auth.module';
import { SubjectModule } from 'src/Modules/Subject/Subject.module';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from 'src/interseptor.service';
import { CheapterModule } from 'src/Modules/Cheapter/Cheapter.module';
import { VideoModule } from 'src/Modules/Video/Video.module';
import { QuestionModule } from 'src/Modules/Question/Question.module';
import { TestModule } from 'src/Modules/Test/Test.module';
import { QuestionTestModule } from 'src/Modules/QuestionTest/QuestionTest.module';
import { StudentModule } from 'src/Modules/Student/Student.module';
import { DegreeStudentModule } from 'src/Modules/DegreeStudent/DegreeStudent.module';

@NgModule({
  declarations: [	
    AppComponent,
    LayoutComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    QuestionModule,
    AppRoutingModule,SheardModule,AuthModule,SubjectModule,FormsModule,CheapterModule,VideoModule,TestModule,
    QuestionTestModule,StudentModule,DegreeStudentModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
