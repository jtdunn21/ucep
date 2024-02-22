import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../event.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  // component metadata
  selector: 'app-event-list',
  standalone: true,
  imports: [
    CommonModule, RouterModule // Import CommonModule here
  ],
  templateUrl: './event-list.component.html', // Reference to your HTML file
  styleUrls: ['./event-list.component.css']  // Reference to your CSS file
})
export class EventListComponent implements OnInit {
  events: any[] = []; // Consider defining a specific type for events

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  selectEvent(eventId: number) {
    this.router.navigate(['/confirm-event'], { queryParams: { eventId: eventId } });
  }
}
