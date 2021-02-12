import { Component } from '@angular/core';

// import { AuthService } from './user/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageTitle = 'Sky';

  get isLoggedIn(): boolean {
    // return this.authService.isLoggedIn;
    return true;
  }

  get userName(): string {
    // if (this.authService.currentUser) {
    //   return this.authService.currentUser.userName;
    // }
    // return '';
    return 'Eugene';
  }

  constructor(
    // private authService: AuthService
    ) { }

  logOut(): void {
    // this.authService.logout();
    console.log('Log out');
  }
}