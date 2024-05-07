import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './Video.component';
import { MainVideoComponent } from './MainVideo/MainVideo.component';
import { CreateVideoComponent } from './CreateVideo/CreateVideo.component';
import { SheardModule } from "../Sheard/Sheard.module";
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [VideoComponent, MainVideoComponent, CreateVideoComponent],
    exports: [MainVideoComponent, CreateVideoComponent],
    imports: [
        CommonModule,
        SheardModule,FormsModule
    ]
})
export class VideoModule { }
