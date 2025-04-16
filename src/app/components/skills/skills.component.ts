import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule

interface Skill {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule], // ✅ Add CommonModule here
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  selectedTab = 0; // Default first tab selected

  skills: Skill[] = [
    { name: 'HTML5', icon: 'assets/icons/html5.svg' },
    { name: 'CSS3', icon: 'assets/icons/css3.svg' },
    { name: 'JavaScript', icon: 'assets/icons/javascript.svg' },
    { name: 'Angular', icon: 'assets/icons/angular.svg' },
    { name: 'React.js', icon: 'assets/icons/react.svg' },
    { name: 'React Native', icon: 'assets/icons/react-native.svg' },
    { name: 'TypeScript', icon: 'assets/icons/typescript.svg' }
  ];

  selectTab(index: number) {
    this.selectedTab = index;
  }
}
