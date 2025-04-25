import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  template: `
    <div class="profile-container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Profile Settings</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
            <mat-form-field appearance="outline">
              <mat-label>Full Name</mat-label>
              <input matInput formControlName="fullName">
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Email</mat-label>
              <input matInput formControlName="email" type="email">
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Phone</mat-label>
              <input matInput formControlName="phone">
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Address</mat-label>
              <textarea matInput formControlName="address" rows="3"></textarea>
            </mat-form-field>

            <button mat-raised-button color="primary" type="submit" [disabled]="!profileForm.valid">
              Save Changes
            </button>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .profile-container {
      max-width: 600px;
      margin: 2rem auto;
      padding: 0 1rem;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    mat-form-field {
      width: 100%;
    }
    button {
      align-self: flex-end;
    }
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      address: ['']
    });
  }

  ngOnInit() {
    // TODO: Load user profile data from service
  }

  onSubmit() {
    if (this.profileForm.valid) {
      // TODO: Save profile data using a service
      console.log(this.profileForm.value);
    }
  }
} 