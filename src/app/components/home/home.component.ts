import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('typingAnimation', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(20px)'
      })),
      transition(':enter', [
        animate('0.3s ease-out', style({
          opacity: 1,
          transform: 'translateY(0)'
        }))
      ])
    ]),
    trigger('fadeIn', [
      state('void', style({
        opacity: 0,
        transform: 'scale(0.8)'
      })),
      state('*', style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      transition('void => *', [
        animate('0.5s ease-out')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('solarSystemCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('codeBlock') codeBlockRef!: ElementRef<HTMLElement>;
  private ctx!: CanvasRenderingContext2D;
  private planets: Planet[] = [];
  private stars: Star[] = [];
  private animationFrameId: number = 0;
  private typingInterval: any;
  private currentLine = 0;
  public codeLines = [
    '/**',
    ' * Digital Solutions Architect',
    ' * Crafting innovative experiences',
    ' */',
    '',
    'const engineer = {',
    '  role: "Full Stack Developer",',
    '  expertise: [',
    '    "Web Development 🌐",',
    '    "Mobile Apps 📱",',
    '    "Creative Design ✨"',
    '  ],',
    '  craftsmanship: {',
    '    focus: "pixel-perfect",',
    '    approach: "user-centric"',
    '  },',
    '  mission: "Build. Innovate. Scale."',
    '};',
    '',
    '// Transforming ideas into reality 🚀'
  ];
  showProfile = false;

  constructor() {
    // Initialize planets
    this.planets = [
      { x: 0, y: 0, radius: 20, color: '#FFD700', orbitRadius: 0, speed: 0, angle: 0 }, // Sun
      { x: 0, y: 0, radius: 8, color: '#00CFFF', orbitRadius: 100, speed: 0.001, angle: 0 }, // Planet 1
      { x: 0, y: 0, radius: 12, color: '#FFD700', orbitRadius: 150, speed: 0.0007, angle: 0 }, // Planet 2
      { x: 0, y: 0, radius: 10, color: '#00CFFF', orbitRadius: 200, speed: 0.0005, angle: 0 } // Planet 3
    ];

    // Initialize stars
    for (let i = 0; i < 200; i++) {
      this.stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2,
        opacity: Math.random() * 0.5 + 0.5,
        speed: Math.random() * 0.1 + 0.05
      });
    }
  }

  ngOnInit(): void {
    // Reset scroll position
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Reset typing state
    this.currentLine = 0;
    this.startTyping();

    // Show profile image after all code lines are typed
    setTimeout(() => {
      this.showProfile = true;
    }, 6000); // Adjust timing based on animation duration
  }

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    
    // Set canvas size
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());

    // Start animation
    this.animate();
  }

  private startTyping(): void {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }

    const codeBlock = this.codeBlockRef.nativeElement;
    codeBlock.innerHTML = '';

    this.typingInterval = setInterval(() => {
      if (this.currentLine < this.codeLines.length) {
        const line = this.codeLines[this.currentLine];
        const lineElement = document.createElement('div');
        lineElement.className = 'code-line';
        lineElement.innerHTML = this.highlightSyntax(line);
        codeBlock.appendChild(lineElement);
        this.currentLine++;
      } else {
        clearInterval(this.typingInterval);
      }
    }, 1500); // 1.5s delay between lines
  }

  private highlightSyntax(line: string): string {
    // Basic syntax highlighting
    return line
      .replace(/\/\*\*|\*\/|\* /g, '<span class="comment">$&</span>')
      .replace(/\/\/.*/g, '<span class="comment">$&</span>')
      .replace(/"([^"]*)"/g, '<span class="string">$&</span>')
      .replace(/\b(const|let|var)\b/g, '<span class="keyword">$&</span>')
      .replace(/\b(role|expertise|craftsmanship|focus|approach|mission)\b/g, '<span class="property">$&</span>');
  }

  private resizeCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  private animate(): void {
    this.ctx.clearRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);
    
    // Draw stars
    this.drawStars();
    
    // Update and draw planets
    this.planets.forEach(planet => {
      if (planet.orbitRadius > 0) {
        planet.angle += planet.speed;
        planet.x = Math.cos(planet.angle) * planet.orbitRadius + this.canvasRef.nativeElement.width / 2;
        planet.y = Math.sin(planet.angle) * planet.orbitRadius + this.canvasRef.nativeElement.height / 2;
      } else {
        planet.x = this.canvasRef.nativeElement.width / 2;
        planet.y = this.canvasRef.nativeElement.height / 2;
      }
      
      this.drawPlanet(planet);
    });

    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

  private drawStars(): void {
    this.stars.forEach(star => {
      star.y += star.speed;
      if (star.y > this.canvasRef.nativeElement.height) {
        star.y = 0;
        star.x = Math.random() * this.canvasRef.nativeElement.width;
      }
      
      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      this.ctx.fill();
    });
  }

  private drawPlanet(planet: Planet): void {
    // Draw orbit trail
    if (planet.orbitRadius > 0) {
      this.ctx.beginPath();
      this.ctx.arc(
        this.canvasRef.nativeElement.width / 2,
        this.canvasRef.nativeElement.height / 2,
        planet.orbitRadius,
        0,
        Math.PI * 2
      );
      this.ctx.strokeStyle = 'rgba(0, 207, 255, 0.1)';
      this.ctx.stroke();
    }

    // Draw planet
    this.ctx.beginPath();
    this.ctx.arc(planet.x, planet.y, planet.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = planet.color;
    this.ctx.fill();
    
    // Add glow effect
    const gradient = this.ctx.createRadialGradient(
      planet.x, planet.y, planet.radius,
      planet.x, planet.y, planet.radius * 2
    );
    gradient.addColorStop(0, planet.color);
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    this.ctx.beginPath();
    this.ctx.arc(planet.x, planet.y, planet.radius * 2, 0, Math.PI * 2);
    this.ctx.fillStyle = gradient;
    this.ctx.fill();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationFrameId);
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }
}

interface Planet {
  x: number;
  y: number;
  radius: number;
  color: string;
  orbitRadius: number;
  speed: number;
  angle: number;
}

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}
