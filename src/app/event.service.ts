import { Injectable } from '@angular/core';

interface Event {
  id: number;
  name: string;
  date: string;
  time: string; 
  badgeId: string; 
  location: string;
  description: string;
  // Add more properties as needed
}

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: Event[] = [
    { 
      id: 1, 
      name: 'TechCon 2024', 
      date: 'April 12, 2024',
      time: '9:00 AM - 5:00 PM',
      badgeId: 'badge1',
      description: 'A cutting-edge technology conference showcasing the latest in tech innovations.',
      location: 'Silicon Valley Convention Center'
    },
    { 
      id: 2, 
      name: 'Leadership and Innovation Seminar', 
      date: 'May 20, 2024',
      time: '9:00 AM - 5:00 PM',
      badgeId: 'badge2',
      description: 'A seminar focused on developing leadership skills and innovative business strategies.',
      location: 'New York Marriott Marquis'
    },
    { 
      id: 3, 
      name: 'Business Networking Mixer', 
      date: 'June 1, 2024',
      time: '9:00 AM - 5:00 PM',
      badgeId: 'badge3',
      description: 'An informal gathering for professionals to network and share ideas in a relaxed atmosphere.',
      location: 'Chicago Rooftop Bar'
    },
    { 
      id: 4, 
      name: 'Annual Corporate Excellence Gala', 
      date: 'July 10, 2024',
      time: '9:00 AM - 5:00 PM',
      badgeId: 'badge4',
      description: 'A prestigious gala celebrating corporate achievements and excellence in the industry.',
      location: 'The Ritz-Carlton, Paris'
    }
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
