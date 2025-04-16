import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
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

@Component({
  selector: 'app-background',
  standalone: true,
  template: '<canvas #solarSystemCanvas></canvas>',
  styles: [`
    canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: linear-gradient(to bottom, #000000, #0a0a0f);
    }
  `]
})
export class BackgroundComponent implements AfterViewInit, OnDestroy {
  @ViewChild('solarSystemCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private stars: Star[] = [];
  private planets: Planet[] = [];
  private animationFrameId: number = 0;

  constructor() {
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

    // Initialize planets
    this.planets = [
      { x: 0, y: 0, radius: 20, color: '#FFD700', orbitRadius: 0, speed: 0, angle: 0 }, // Sun
      { x: 0, y: 0, radius: 8, color: '#00CFFF', orbitRadius: 100, speed: 0.001, angle: 0 }, // Planet 1
      { x: 0, y: 0, radius: 12, color: '#FFD700', orbitRadius: 150, speed: 0.0007, angle: 0 }, // Planet 2
      { x: 0, y: 0, radius: 10, color: '#00CFFF', orbitRadius: 200, speed: 0.0005, angle: 0 } // Planet 3
    ];
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
  }
} 