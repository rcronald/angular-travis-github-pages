import {Injectable} from '@angular/core';
import {Router} from '@angular/router';


(window as any).global = window;

@Injectable()
export class AuthService {


  accessToken: string;
  expiresAt: number;

  constructor(public router: Router) {}

  public login(): void {
  }

  public handleAuthentication(): void {
    this.router.navigate(['/dashboard']);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    this.accessToken = null;
    this.expiresAt = null;
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    return true;
  }
}
