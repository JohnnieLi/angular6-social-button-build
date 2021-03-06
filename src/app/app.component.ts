import {Component} from '@angular/core';
import {SocialService} from 'ngx-social-button';
// import {
//   SocialService
// } from 'ng6-social-button'
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'ngx-social-button';
    shareObj = {};

    constructor(private socialAuthService: SocialService) {
    }

    signOut() {
        if (this.socialAuthService.isSocialLoggedIn()) {
            this.socialAuthService.signOut().catch((err) => {

            });
        }
    }

    getSocialUser(event) {
        console.log(event);
    }
}
