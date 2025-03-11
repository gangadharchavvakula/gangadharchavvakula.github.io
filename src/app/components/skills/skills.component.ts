import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule], // ✅ Add CommonModule here
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  selectedTab = 0; // Default first tab selected

  skills = [
    { name: "Angular", description: "Experienced in building scalable Angular applications with best practices, lazy loading, and state management." },
    { name: "React.js", description: "Skilled in developing modern React applications using hooks, Redux, and component-based architecture." },
    { name: "TypeScript", description: "Expertise in TypeScript to write strongly typed, maintainable, and scalable code." },
    { name: "Bootstrap & CSS3", description: "Capable of designing responsive, mobile-friendly UI using Bootstrap, Flexbox, and CSS animations." },
    { name: "Web3 & Blockchain", description: "Exploring Web3 technologies, smart contracts, and blockchain integration using Solidity & Web3.js." }
  ];

  selectTab(index: number) {
    this.selectedTab = index;
  }
}
