import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button routerLink="/">Return to Home</button>
    </div>
  `,
  styles: [`
    .not-found-container {
      text-align: center;
      padding: 50px;
    }
    button {
      padding: 10px 20px;
      margin-top: 20px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
  `]
})
export class NotFoundComponent {} 