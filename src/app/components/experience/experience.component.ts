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
    { company: "Vee Technologies Pvt Ltd", role: "Software Engineer 1", duration: "06/2022 - 12/2023", description: "Worked on Web 3.0 applications, integrated blockchain technology, and optimized web performance." },
    { company: "Adyaha Ways Pvt Ltd", role: "Software Engineer", duration: "03/2020 - 06/2022", description: "Developed responsive web applications, API integrations, and UI improvements for enterprise clients." }
  ];
}
