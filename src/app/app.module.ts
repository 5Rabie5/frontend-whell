import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgxWheelModule} from 'ngx-wheel';
import {WheelSelectorModule} from '@hyperblob/ngx-wheel-selector';
import {QuestionComponent} from './wheel/question/question.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TypesBoardComponent } from './types-board/types-board.component';
import { WheelComponent } from './wheel/wheel.component';

@NgModule({
    declarations: [
        AppComponent,
        QuestionComponent,
        TypesBoardComponent,
        WheelComponent
    ],
    imports: [
        BrowserModule,
        NgxWheelModule,
        HttpClientModule,
        WheelSelectorModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
