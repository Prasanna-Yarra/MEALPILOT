import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.html',
  styleUrl: './auth-callback.css'
})
export class AuthCallback {
  public message = 'Reading authentication response...';

  constructor(route: ActivatedRoute) {
    const params = route.snapshot.queryParamMap;
    const code = params.get('code');
    const state = params.get('state');
    const error = params.get('error');
    const errorDescription = params.get('error_description');

    if (error || errorDescription) {
      this.message = 'Swiggy authentication failed. Please try again from the authorization flow.';
      return;
    }

    if (code && state) {
      this.message = 'Swiggy authentication response received.';
      return;
    }

    this.message = 'No authentication response was received. Please return to the app and retry the authorization flow.';
  }
}
