import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './Question.component';
import { MainQuestionComponent } from './MainQuestion/MainQuestion.component';
import { CreateQuestionComponent } from './CreateQuestion/CreateQuestion.component';
import { EditQuestionComponent } from './EditQuestion/EditQuestion.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SheardModule } from "../Sheard/Sheard.module";

@NgModule({
    declarations: [QuestionComponent, MainQuestionComponent, CreateQuestionComponent, EditQuestionComponent],
    exports: [CreateQuestionComponent, MainQuestionComponent, EditQuestionComponent],
    imports: [
        CommonModule, FormsModule, HttpClientModule,
        SheardModule
    ]
})
export class QuestionModule { }
