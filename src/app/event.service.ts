import { Injectable } from '@angular/core';

interface Event {
  id: number;
  name: string;
  date: string;
  badgeId: string; // Add badgeId property
  // Add more properties as needed
}

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: Event[] = [
    { id: 1, name: 'Event 1', date: '2024-01-01', badgeId: 'badge1'},
    { id: 2, name: 'Event 2', date: '2024-02-01', badgeId: 'badge2'},
    { id: 3, name: 'Event 3', date: '2024-03-01', badgeId: 'badge3'},
    { id: 4, name: 'Event 4', date: '2024-04-01', badgeId: 'badge4'}
  ];

  constructor() { }

  getEvents(): Event[] {
    return this.events;
  }

  getEventById(id: number): Event | undefined {
    return this.events.find(event => event.id === id);
  }

  validateBadge(badgeId: string): boolean {
    // Logic to validate badge ID
    const event = this.events.find(event => event.badgeId === badgeId);
    return !!event; // Returns true if the badge ID is found, otherwise false
  }
}
