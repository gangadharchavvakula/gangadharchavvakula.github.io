import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

interface Skill {
  name: string;
  icon: string;
  color: string;
  direction: 'left' | 'right';
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        query('.skill-card', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ])
    ])
  ]
})
export class SkillsComponent implements OnInit {
  categories: SkillCategory[] = [
    {
      name: 'Frontend Technologies',
      skills: [
        { name: 'HTML5', icon: 'fab fa-html5', color: '#ffdf00', direction: 'left' },
        { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#00cfff', direction: 'right' },
        { name: 'JavaScript', icon: 'fab fa-js-square', color: '#ffdf00', direction: 'left' },
        { name: 'TypeScript', icon: 'fab fa-js', color: '#00cfff', direction: 'right' },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#ffdf00', direction: 'left' },
        { name: 'Angular', icon: 'fab fa-angular', color: '#00cfff', direction: 'right' },
        { name: 'React', icon: 'fab fa-react', color: '#ffdf00', direction: 'left' },
        { name: 'React Native', icon: 'fab fa-react', color: '#00cfff', direction: 'right' }
      ]
    },
    {
      name: 'Tools',
      skills: [
        { name: 'Git', icon: 'fab fa-git-alt', color: '#ffdf00', direction: 'left' },
        { name: 'GitHub', icon: 'fab fa-github', color: '#00cfff', direction: 'right' }
      ]
    }
  ];

  activeCategory: string = 'Frontend Technologies';
  showCards = false;

  ngOnInit() {
    setTimeout(() => {
      this.showCards = true;
    }, 100);
  }

  setActiveCategory(category: string) {
    this.activeCategory = category;
  }

  getActiveSkills() {
    return this.categories.find(cat => cat.name === this.activeCategory)?.skills || [];
  }
}
