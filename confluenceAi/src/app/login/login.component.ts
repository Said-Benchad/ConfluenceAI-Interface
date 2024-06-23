import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loading = false;

  constructor(private router: Router) {}

  onSignIn() {
    this.loading = true;
    
    // Simulate an authentication delay
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/home']);
    }, 2000); // Adjust the delay as needed
  }
}
