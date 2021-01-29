import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgxWheelModule} from 'ngx-wheel';
import {WheelSelectorModule} from '@hyperblob/ngx-wheel-selector';
import {QuestionComponent} from './question/question.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        QuestionComponent
    ],
    imports: [
        BrowserModule,
        NgxWheelModule,
        HttpClientModule,
        WheelSelectorModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
