import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionTestComponent } from './QuestionTest.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SheardModule } from '../Sheard/Sheard.module';
import { CreateTestQuestionComponent } from './CreateTestQuestion/CreateTestQuestion.component';
import { AllTestQuestionComponent } from './AllTestQuestion/AllTestQuestion.component';
import { EditTestQuestionComponent } from './EditTestQuestion/EditTestQuestion.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, HttpClientModule,
    SheardModule
  ],
  declarations: [QuestionTestComponent,AllTestQuestionComponent,CreateTestQuestionComponent,EditTestQuestionComponent],
  exports:[AllTestQuestionComponent,CreateTestQuestionComponent,EditTestQuestionComponent]
})
export class QuestionTestModule { }
