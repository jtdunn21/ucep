import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EventService } from '../event.service'; // Import the EventService class
import { ConfirmABadgeComponent } from '../confirm-a-badge/confirm-a-badge.component';

@Component({
  // component metadata
  selector: 'app-a-badge', // updated selector
  standalone: true,
  imports: [FormsModule, ConfirmABadgeComponent], // Include FormsModule here
  templateUrl: './a-badge.component.html', // Reference to your HTML file
  styleUrls: ['./a-badge.component.css']  // Reference to your CSS file
})
export class ABadgeComponent {
  badgeId: string = '';

  constructor(private router: Router, private eventService: EventService) {} // Declare eventService as a private property

  onSubmit() {
    this.router.navigate(['/confirm-a-badge'], { queryParams: { badgeId: this.badgeId } })
  .catch(error => console.error(error));
  }
  
  autoCapitalize() {
    if (this.badgeId.length > 0) {
      // Capitalize the first letter and ensure it's an 'A'
      this.badgeId = 'A' + this.badgeId.substring(1).replace(/[^0-9]/g, '');
      // Limit the string to 7 characters
      this.badgeId = this.badgeId.substring(0, 7);
    }
  }


}


