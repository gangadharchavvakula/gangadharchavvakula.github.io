import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  rawLines: string[] = [
    '<span class="comment">/**</span>',
    '<span class="comment"> * Digital Solutions Engineer</span>',
    '<span class="comment"> * Building for web, mobile, and beyond</span>',
    '<span class="comment"> */</span>',
    '<span><span class="keyword">const</span> <span class="variable">gangadhar</span> <span class="operator">=</span> <span class="operator">{</span></span>',
    '<span><span class="property">  role</span><span class="operator">:</span> <span class="string">"Front End Developer"</span><span class="operator">,</span></span>',
    '<span><span class="property">  expertise</span><span class="operator">:</span> <span class="operator">[</span></span>',
    '<span><span class="string">    "Angular &amp; Web Apps 🌐"</span><span class="operator">,</span></span>',
    '<span><span class="string">    "Mobile Development 📱"</span><span class="operator">,</span></span>',
    '<span><span class="string">    "Creative UI Design 🎨"</span><span class="operator">,</span></span>',
    '<span class="operator">  ],</span>',
    '<span><span class="property">  approach</span><span class="operator">:</span> <span class="operator">{</span></span>',
    '<span><span class="property">    focus</span><span class="operator">:</span> <span class="string">"User First"</span><span class="operator">,</span></span>',
    '<span><span class="property">    quality</span><span class="operator">:</span> <span class="string">"Pixel Perfect"</span><span class="operator">,</span></span>',
    '<span class="operator">  },</span>',
    '<span><span class="property">  mission</span><span class="operator">:</span> <span class="string">"Simplify. Solve. Scale."</span><span class="operator">,</span></span>',
    '<span class="operator">};</span>',
  ];

  fullContent: string[] = [];
  displayedContent: string[] = [];
  currentLine = 0;
  currentChar = 0;
  isTyping = true;
  totalLines = 20; // force line count

  ngOnInit(): void {
    this.fullContent = this.rawLines.map(line => line);
    this.displayedContent = Array(this.totalLines).fill('');
    this.typeCharacter();
  }

  typeCharacter(): void {
    if (this.currentLine >= this.fullContent.length) {
      this.isTyping = false;
      return;
    }

    const fullLine = this.fullContent[this.currentLine];

    if (this.currentChar < fullLine.length) {
      this.displayedContent[this.currentLine] += fullLine.charAt(this.currentChar);
      this.currentChar++;
      setTimeout(() => this.typeCharacter(), 20); // typing speed
    } else {
      this.currentLine++;
      this.currentChar = 0;
      setTimeout(() => this.typeCharacter(), 200); // delay before next line
    }
  }
}
