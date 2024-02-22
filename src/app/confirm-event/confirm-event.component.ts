import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  // component metadata
  selector: 'app-confirm-event',
  standalone: true,
  imports: [RouterModule], // Include FormsModule here
  templateUrl: './confirm-event.component.html', // Reference to your HTML file
  styleUrls: ['./confirm-event.component.css']  // Reference to your CSS file
})
export class ConfirmEventComponent {
  eventName: string = '';

  constructor(private route: ActivatedRoute, private eventService: EventService, private router: Router) {
    this.route.queryParams.subscribe(params => {
      const eventId = Number(params['eventId']);
      const event = this.eventService.getEventById(eventId);
      this.eventName = event ? event.name : 'Event not found';
    });
  }

  confirmEvent(isConfirmed: boolean) {
    if (isConfirmed) {
      alert('You have successfully confirmed your attendance.');
  
      // Navigate to the event list after the alert is closed.
      this.router.navigate(['/event-list']);
    } else {
      this.router.navigate(['/event-list']);
    }
  }
}
