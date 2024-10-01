import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import {RetroButtonDirective} from "../../directives/retro-button.directive";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {AppService} from "../../services/app.service";
import {AsyncPipe, NgClass} from "@angular/common";


@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [
    RetroButtonDirective,
    MatButtonToggleGroup,
    MatButtonToggle,
    AsyncPipe,
    NgClass,
  ],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.sass'
})
export class BadgeComponent {
  @ViewChild('canvasRef', {static: true}) canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('fileInput', {static: true}) fileInput!: ElementRef<HTMLInputElement>;
  app = inject(AppService);
  isMobile$ = this.app.isMobile$;
  isTab$ = this.app.isTab$;
  ctx: CanvasRenderingContext2D | null = null;
  baseWidth: number = 4320;
  baseHeight: number = 4320;
  shapeData: string = 'square';
  downloadVisible: boolean = false;
  image: HTMLImageElement | null = null;
  banner: HTMLImageElement;

  ngOnInit() {
    if (this.app.isBrowser) {
      this.banner = new Image();
      this.initializeCanvas();
    }
  }

  initializeCanvas() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d');
    this.banner.src = this.shapeData === 'square' ? 'https://df24.b-cdn.net/badge/frame.png' : 'https://df24.b-cdn.net/badge/frame-circle.png';
    this.banner.crossOrigin = 'Anonymous';
    this.banner.width = this.baseWidth;
    this.banner.height = this.baseHeight;
    this.banner.onload = () => {
      this.draw();
    };
  }

  upload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.image = new Image();
        this.image.onload = () => this.draw();
        this.image.src = e.target?.result as string;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  draw() {
    const canvas = this.canvasRef.nativeElement;
    if (!canvas || !this.ctx) return;

    canvas.width = this.baseWidth;
    canvas.height = this.baseHeight;

    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (this.image) {
      this.drawImage();
    } else {
      this.ctx.fillStyle = '#f0ebdb';
      this.ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    this.drawBanner();
    this.applyShape();
  }

  drawImage() {
    const canvas = this.canvasRef.nativeElement;
    if (!this.image || !this.ctx) return;


    canvas.width = this.baseWidth;
    canvas.height = this.baseHeight;
    const hRatio = canvas.width / this.image.width;
    const vRatio = canvas.height / this.image.height;
    const ratio = Math.max(hRatio, vRatio);
    const x = (canvas.width - this.image.width * ratio) / 2;
    const y = (canvas.height - this.image.height * ratio) / 2;
    this.ctx.drawImage(
      this.image,
      0,
      0,
      this.image.width,
      this.image.height,
      x,
      y,
      this.image.width * ratio,
      this.image.height * ratio
    );

  }

  drawBanner() {
    const canvas = this.canvasRef.nativeElement;
    const wrapperWidth = this.canvasRef.nativeElement.parentElement?.clientWidth;
    if (!this.banner || !this.ctx) return;

    const height = (this.banner.height / this.banner.width) * canvas.width;
    console.log(height);
    const y = canvas.height - height;
    this.ctx.drawImage(
      this.banner,
      0,
      0,
      this.banner.width,
      this.banner.height,
      0,
      y,
      canvas.width,
      height
    );
  }


  changeShape(type) {
    console.log(type);
    this.shapeData = type.value;
    switch (type.value) {
      case 'circle':
        this.baseHeight = 4264
        this.baseWidth = 4264
        break;
      case 'square':

        this.baseHeight = 4320
        this.baseWidth = 4320
        break;
    }
    this.initializeCanvas();
  }

  applyShape() {
    if (this.shapeData === "circle") {
      this.ctx.globalCompositeOperation = "destination-in";
      this.ctx.beginPath();
      this.ctx.arc(
        this.canvasRef.nativeElement.width / 2,
        this.canvasRef.nativeElement.height / 2,
        this.canvasRef.nativeElement.height / 2,
        0,
        Math.PI * 2
      );
      +
        this.ctx.closePath();
      this.ctx.fill();
    }
  };

  download() {
    const canvas = this.canvasRef.nativeElement;
    const a = document.createElement('a');
    const url = canvas.toDataURL('image/png;base64');
    a.download = `badge_${this.shapeData}_${Date.now()}.png`;
    a.href = url;
    a.click();
  }
}
