import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {NgxSocialButtonModule, SocialServiceConfig} from 'ngx-social-button';

// import {
//   Angular6SocialButtonModule,
//   SocialServiceConfig
// } from "angular6-social-button";

// Configs
export function getAuthServiceConfigs() {
    return new SocialServiceConfig()
        .addFacebook('1665468547084549')
        .addGoogle('414646750345-q77prfo2b7s87ki0di3i1jv5t3uh91ok.apps.googleusercontent.com')
        .addLinkedIn('86vl0z9qqi1cva');
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, NgxSocialButtonModule
    ],
    providers: [{
        provide: SocialServiceConfig,
        useFactory: getAuthServiceConfigs
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}

