import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    { name: "ATS (Applicant Tracking System)", description: "A complete HRMS portal with role-based authentication and payroll management.", link: "https://github.com/gangadhar-ats" },
    { name: "E-Commerce Website", description: "A shopping platform with user authentication, product management, and real-time chat.", link: "https://github.com/gangadhar-ecommerce" },
    { name: "Billing Central", description: "A secure billing system with invoice generation and real-time messaging.", link: "https://github.com/gangadhar-billing" }
  ];
}
