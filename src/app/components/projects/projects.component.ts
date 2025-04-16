import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition, stagger, query } from '@angular/animations';

interface Project {
  title: string;
  timeline: string;
  company: string;
  description: string;
  highlights: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('cardAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(50px)' }),
          stagger(100, [
            animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('flipCard', [
      state('front', style({
        transform: 'rotateY(0deg)'
      })),
      state('back', style({
        transform: 'rotateY(180deg)'
      })),
      transition('front => back', animate('0.5s ease-out')),
      transition('back => front', animate('0.5s ease-out'))
    ])
  ]
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'ATS (Applicant Tracking System)',
      timeline: '06/2023 – 12/2023',
      company: 'Vee Technologies Pvt Ltd',
      description: 'HRMS-like system supporting 5 user roles with features like interview scheduling, employee management, and payroll.',
      highlights: [
        'Built responsive UI with Angular, Bootstrap',
        'Integrated REST APIs with HttpClient',
        'Role-based routing (AuthGuard)',
        'Used Reactive Forms for dynamic inputs'
      ]
    },
    {
      title: 'Ecommerce Platform',
      timeline: '06/2022 – 05/2023',
      company: 'Vee Technologies Pvt Ltd',
      description: 'Shopping platform with user registration, product listing, cart, messaging, and orders.',
      highlights: [
        'Implemented JWT Auth & user sessions',
        'Built cart & messaging modules',
        'Used Angular Pipes & Directives',
        'Performed CRUD with Node.js & MongoDB'
      ]
    },
    {
      title: 'Billing Central',
      timeline: '06/2020 – 05/2022',
      company: 'Adyaha Ways Pvt Ltd',
      description: 'Web app for 24/7 access to billing info, claims, invoices, and communication between clients & patients.',
      highlights: [
        'Developed UI in Angular',
        'Built message center with real-time updates',
        'Secured access with JWT & guards',
        'Used RxJS Observables for async handling'
      ]
    }
  ];

  cardStates: { [key: string]: 'front' | 'back' } = {};

  ngOnInit() {
    this.projects.forEach(project => {
      this.cardStates[project.title] = 'front';
    });
  }

  toggleCard(project: Project) {
    this.cardStates[project.title] = this.cardStates[project.title] === 'front' ? 'back' : 'front';
  }
}
