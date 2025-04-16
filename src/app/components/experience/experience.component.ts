import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  type: string;
  responsibilities: string[];
  logo?: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'Self-Learning & Freelance Development',
      role: 'FrontEnd Developer',
      period: '01/2024 - Present',
      type: 'Freelancer',
      responsibilities: [
        'Explored & Upgraded Skills: Learned React.js, React Native, and the latest Angular 19 features (Standalone Components, Signals, State Management)',
        'Developed and deployed Web 3.0-based applications, integrating blockchain technology for decentralized functionality',
        'Worked with clients globally, gathering business requirements and delivering high-quality web solutions',
        'Explored backend technologies (Node.js, MongoDB) and API integrations for seamless data flow',
        'Optimized performance of web applications with lazy loading, caching, and efficient state management',
        'Integrated Smart Contracts & DApps using Ethereum, Solidity, and Web3.js'
      ]
    },
    {
      company: 'Vee Technologies Pvt Ltd',
      role: 'Software Engineer 1',
      period: '06/2022 - 12/2023',
      location: 'Salem, Tamilnadu',
      type: 'Full-time',
      responsibilities: [
        'Developed & Maintained Web Applications: Built and optimized E-commerce and ATS projects using Angular, TypeScript, HTML5, and CSS3',
        'Implemented Routing & Route Guards: Configured Angular Routing with lazy loading, Route Guards for navigation and user access',
        'Reactive Forms & Validations: Created dynamic Reactive Forms with custom validations and error messages',
        'API Integration & CRUD Operations: Used Angular Services and HTTPClient for RESTful API operations',
        'State Management & Optimization: Utilized RxJS for asynchronous data flow and performance improvement',
        'Responsive UI & Cross-Browser Support: Designed responsive, mobile-friendly UI using Bootstrap',
        'Version Control & Team Collaboration: Worked in Agile environment with Git/GitHub'
      ]
    },
    {
      company: 'Adyaha Ways Pvt Ltd',
      role: 'Software Engineer',
      period: '03/2020 - 06/2022',
      location: 'Hyderabad',
      type: 'Full-time',
      responsibilities: [
        'Developed & Maintained UI: Built responsive and interactive web applications using Angular, TypeScript, HTML5, and CSS3',
        'API Integration: Integrated RESTful APIs using HTTPClient Module for data communication',
        'Responsive & Cross-Browser Design: Ensured mobile-friendly UI using Bootstrap, Flexbox, and Media Queries',
        'Debugging & Performance Optimization: Identified and fixed UI/UX issues using Chrome DevTools',
        'Version Control & Collaboration: Used Git & GitHub for source code management and code reviews',
        'Continuous Learning & Testing: Enhanced coding skills and wrote unit tests using Jasmine & Karma'
      ]
    }
  ];
}
