import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

interface Experience {
  title: string;
  company: string;
  period: string;
  points: string[];
  isCurrent?: boolean;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  animations: [
    trigger('timelineAnimation', [
      transition(':enter', [
        query('.experience-card', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ])
    ])
  ]
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [
    {
      title: 'Self-Learning & Freelance Development',
      company: 'Freelancer',
      period: '01/2024 - Present',
      points: [
        'Explored and upgraded skills in React.js, React Native, and Angular 19 features.',
        'Developed Web 3.0 apps using blockchain integration (Ethereum, Solidity, Web3.js).',
        'Worked with global clients, delivering custom web solutions and API integrations.'
      ],
      isCurrent: true
    },
    {
      title: 'Software Engineer 1',
      company: 'Vee Technologies Pvt Ltd',
      period: '06/2022 - 12/2023',
      points: [
        'Developed and maintained e-commerce and ATS systems using Angular, TypeScript.',
        'Optimized performance with RxJS and state management techniques.',
        'Integrated RESTful APIs and built dynamic forms with Angular Reactive Forms.'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Adyaha Ways Pvt Ltd',
      period: '03/2020 - 06/2022',
      points: [
        'Built responsive UI and integrated APIs using Angular, TypeScript, and HTML5.',
        'Enhanced performance through debugging and cross-browser optimization.',
        'Collaborated with teams in an Agile environment using Git/GitHub.'
      ]
    }
  ];

  showTimeline = false;

  ngOnInit() {
    setTimeout(() => {
      this.showTimeline = true;
    }, 100);
  }

  getExperienceNumber(index: number): number {
    return this.experiences.length - index;
  }

  isLastExperience(index: number): boolean {
    return index === 0;
  }
}
