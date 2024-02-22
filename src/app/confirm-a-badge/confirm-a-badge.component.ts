import { Component, } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  // component metadata
  selector: 'app-confirm-a-badge', // updated selector
  standalone: true,
  imports: [RouterModule],
  templateUrl: './confirm-a-badge.component.html', // Reference to your HTML file
  styleUrls: ['./confirm-a-badge.component.css']  // Reference to your CSS file
})
export class ConfirmABadgeComponent {
  badgeId: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.badgeId = params['badgeId'];
    });
  }

  confirmBadge(isConfirmed: boolean) {
    if (isConfirmed) {
      this.router.navigate(['/event-list']);
    } else {
      this.router.navigate(['']);
    }
  }
  
}
