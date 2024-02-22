import { Routes } from '@angular/router';
import { ABadgeComponent } from './a-badge/a-badge.component';
import { ConfirmABadgeComponent } from './confirm-a-badge/confirm-a-badge.component';
import { EventListComponent } from './event-list/event-list.component';
import { ConfirmEventComponent } from './confirm-event/confirm-event.component';

export const appRoutes: Routes = [
  { path: '', component: ABadgeComponent },
  { path: 'confirm-a-badge', component: ConfirmABadgeComponent },
  { path: 'event-list', component: EventListComponent },
  { path: 'confirm-event', component: ConfirmEventComponent }
  // ...other routes
];
