import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/Layout/Layout.component';
import { LoginTeacherComponent } from 'src/Modules/Auth/LoginTeacher/LoginTeacher.component';
import { CreateCheapterComponent } from 'src/Modules/Cheapter/CreateCheapter/CreateCheapter.component';
import { EditCheapterComponent } from 'src/Modules/Cheapter/EditCheapter/EditCheapter.component';
import { MainCheapterComponent } from 'src/Modules/Cheapter/MainCheapter/MainCheapter.component';
import { DegreeSubjectComponent } from 'src/Modules/DegreeStudent/DegreeSubject/DegreeSubject.component';
import { CreateQuestionComponent } from 'src/Modules/Question/CreateQuestion/CreateQuestion.component';
import { EditQuestionComponent } from 'src/Modules/Question/EditQuestion/EditQuestion.component';
import { MainQuestionComponent } from 'src/Modules/Question/MainQuestion/MainQuestion.component';
import { AllTestQuestionComponent } from 'src/Modules/QuestionTest/AllTestQuestion/AllTestQuestion.component';
import { CreateTestQuestionComponent } from 'src/Modules/QuestionTest/CreateTestQuestion/CreateTestQuestion.component';
import { EditTestQuestionComponent } from 'src/Modules/QuestionTest/EditTestQuestion/EditTestQuestion.component';
import { CountactUsComponent } from 'src/Modules/Sheard/CountactUs/CountactUs.component';
import { HomeComponent } from 'src/Modules/Sheard/Home/Home.component';
import { SpinnerComponent } from 'src/Modules/Sheard/Spinner/Spinner.component';
import { AllStudentComponent } from 'src/Modules/Student/AllStudent/AllStudent.component';
import { BlogChatComponent } from 'src/Modules/Student/BlogChat/BlogChat.component';
import { CreateSubjectComponent } from 'src/Modules/Subject/CreateSubject/CreateSubject.component';
import { EditSubjectComponent } from 'src/Modules/Subject/EditSubject/EditSubject.component';
import { HomeSubjectComponent } from 'src/Modules/Subject/HomeSubject/HomeSubject.component';
import { AllTestComponent } from 'src/Modules/Test/AllTest/AllTest.component';
import { CreateTestComponent } from 'src/Modules/Test/CreateTest/CreateTest.component';
import { EditTestComponent } from 'src/Modules/Test/EditTest/EditTest.component';
import { TestComponent } from 'src/Modules/Test/Test.component';
import { CreateVideoComponent } from 'src/Modules/Video/CreateVideo/CreateVideo.component';
import { MainVideoComponent } from 'src/Modules/Video/MainVideo/MainVideo.component';

const routes: Routes = [
  {path:'',component:LayoutComponent,children:[
    {path:'',component:HomeComponent},
    {path:'Subject',component:HomeSubjectComponent},
    {path:'CreateSubject',component:CreateSubjectComponent},
    {path:'EditSubject',component:EditSubjectComponent},
    {path:'MainCheapter',component:MainCheapterComponent},
    {path:'CreateCheapter',component:CreateCheapterComponent},
    {path:'EditCheapter',component:EditCheapterComponent},
    {path:'MainVideo',component:MainVideoComponent},
    {path:'CreateVideo',component:CreateVideoComponent},
    {path:'EditQuestion',component:EditQuestionComponent},
    {path:'MainQuestion',component:MainQuestionComponent},
    {path:'CreateQuestion',component:CreateQuestionComponent},
    {path:'MainTest',component:AllTestComponent},
    {path:'CreateTest',component:CreateTestComponent},
    {path:'EditTest',component:EditTestComponent},
    {path:'CreateQuestionTest',component:CreateTestQuestionComponent},
    {path:'EditQuestionTest',component:EditTestQuestionComponent},
    {path:'MainQuestionTest',component:AllTestQuestionComponent},
    {path:'AllStudentInSubject',component:AllStudentComponent},
    {path:'Degrees',component:DegreeSubjectComponent},
    // {path:'Blog',component:BlogChatComponent},
  ]},
  {path:'LoginTeacher',component:LoginTeacherComponent},
  {path:'Spinner',component:SpinnerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
