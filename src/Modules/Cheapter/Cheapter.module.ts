import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheapterComponent } from './Cheapter.component';
import { MainCheapterComponent } from './MainCheapter/MainCheapter.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SheardModule } from "../Sheard/Sheard.module";
import { CreateCheapterComponent } from './CreateCheapter/CreateCheapter.component';
import { EditCheapterComponent } from './EditCheapter/EditCheapter.component';

@NgModule({
    declarations: [CheapterComponent, MainCheapterComponent,CreateCheapterComponent,EditCheapterComponent],
    exports: [MainCheapterComponent,CreateCheapterComponent,EditCheapterComponent],
    imports: [
        CommonModule, FormsModule, HttpClientModule,
        SheardModule
    ]
})
export class CheapterModule { }
