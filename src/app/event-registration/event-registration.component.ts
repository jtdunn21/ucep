import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-event-registration',
  standalone: true,
  imports: [FormsModule, RouterModule], // FormsModule should be added here if needed
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.css']
})
export class EventRegistrationComponent {
  badgeId: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Submitted badge ID:', this.badgeId);
    // Implement your form submission logic here
    // Example navigation
    this.router.navigate(['/confirm-a-badge'], { queryParams: { badgeId: this.badgeId }});
  }
}
