import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

interface Project {
  title: string;
  duration: string;
  company: string;
  description: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        query('.project-card', [
          style({ opacity: 0, transform: 'translateY(50px)' }),
          stagger(200, [
            animate('0.5s ease', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ])
    ])
  ]
})
export class ProjectsComponent implements OnInit {
  showCards = false;

  projects: Project[] = [
    {
      title: 'ATS (Applicant Tracking System)',
      duration: 'June 2023 – December 2023',
      company: 'Vee Technologies Pvt Ltd',
      description: 'A comprehensive <span class="highlight">HRMS</span> platform designed to streamline the entire employee lifecycle. Built for HR teams and managers, it handles everything from hiring and onboarding to performance reviews and payroll. The system makes it easy to schedule interviews, manage employee data, and process payments, all in one place.'
    },
    {
      title: 'E-commerce Platform',
      duration: 'June 2022 – May 2023',
      company: 'Vee Technologies Pvt Ltd',
      description: 'A full-featured <span class="highlight">e-commerce platform</span> that connects buyers and sellers. Users can create accounts, list products, browse items, and make purchases. The platform includes a shopping cart, secure checkout, and a messaging system for direct communication between buyers and sellers.'
    },
    {
      title: 'Billing Central',
      duration: 'June 2020 – May 2022',
      company: 'Adyaha Ways Pvt Ltd',
      description: 'A secure web application that provides 24/7 access to medical billing information. Designed for healthcare providers and patients, it allows users to view billing details, track claims, and communicate securely. The system helps streamline the billing process and improve transparency in healthcare payments.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showCards = true;
    }, 100);
  }
}
