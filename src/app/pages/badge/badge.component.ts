import {Component, ElementRef, ViewChild} from '@angular/core';
import {RetroButtonDirective} from "../../directives/retro-button.directive";

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [
    RetroButtonDirective
  ],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.sass'
})
export class BadgeComponent {
  @ViewChild('canvasRef', {static: true}) canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('fileInput', {static: true}) fileInput!: ElementRef<HTMLInputElement>;

  shapeData: string = 'original';
  downloadVisible: boolean = false;
  image: HTMLImageElement | null = null;
  banner: HTMLImageElement = new Image();
  ctx: CanvasRenderingContext2D | null = null;

  ngOnInit() {
    this.initializeCanvas();
  }

  initializeCanvas() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d');

    this.banner.src = 'https://df24.b-cdn.net/badge/frame.svg';
    this.banner.width = 250
    this.banner.height = 250
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

    canvas.width = 250;
    canvas.height = 250;

    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (this.image) {
      this.drawImage();
    } else {
      this.ctx.fillStyle = '#fff';
      this.ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    this.drawBanner();
  }

  drawImage() {
    const canvas = this.canvasRef.nativeElement;
    if (!this.image || !this.ctx) return;

    switch (this.shapeData) {
      case 'original':
        canvas.width = 250;
        canvas.height = 250;
        this.ctx.drawImage(
          this.image,
          0,
          0,
          canvas.width,
          canvas.height
        );
        break;
      default:
        canvas.width = 250;
        canvas.height = 250;
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
        break;
    }
  }

  drawBanner() {
    const canvas = this.canvasRef.nativeElement;
    if (!this.banner || !this.ctx) return;

    const height = (this.banner.height / this.banner.width) * canvas.width;
    const y = canvas.height - height;
    this.ctx.drawImage(
      this.banner,
      0,
      0,
      this.banner.width,
      this.banner.height,
      0,
      0,
      canvas.width,
      height
    );
  }


  changeShape(type: string) {
    this.shapeData = type;
    this.draw();
  }

  download() {
    const canvas = this.canvasRef.nativeElement;
    const a = document.createElement('a');
    const url = canvas.toDataURL('image/png;base64');
    a.download = 'badge.png';
    a.href = url;
    a.click();
  }
}
