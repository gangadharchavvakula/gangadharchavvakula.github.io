import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences = [
    {
      company: "Vee Technologies Pvt Ltd",
      role: "Software Engineer 1",
      duration: "06/2022 - 12/2023",
      description: "Led the development of interactive Web3 applications using Angular and Blockchain technologies. Implemented optimized API integrations, reducing load time by 30% and enhancing user experience. Collaborated with cross-functional teams to build scalable enterprise solutions."
    },
    {
      company: "Adyaha Ways Pvt Ltd",
      role: "Software Engineer",
      duration: "03/2020 - 06/2022",
      description: "Designed and developed robust front-end interfaces with Angular and Bootstrap, improving accessibility and responsiveness. Integrated RESTful APIs, ensuring seamless data flow between client and server. Spearheaded performance enhancements, resulting in a 25% increase in page speed."
    }
  ];
}
