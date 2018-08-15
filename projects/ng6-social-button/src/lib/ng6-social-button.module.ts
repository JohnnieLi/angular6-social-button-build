import { NgModule } from '@angular/core';
import { FacebookLoginButton } from './buttons/facebookLoginButton';
import { GoogleLoginButton } from './buttons/googleLoginButton';
import {FacebookSharingButton} from './buttons/facebookSharingButton';
import {LinkedinLoginButton} from './buttons/linkedinLoginButton';

@NgModule({
    imports: [

    ],
    declarations: [FacebookLoginButton, GoogleLoginButton, FacebookSharingButton, LinkedinLoginButton],
    exports: [FacebookLoginButton, GoogleLoginButton, FacebookSharingButton, LinkedinLoginButton]
})
export class Ng6SocialButtonModule { }
