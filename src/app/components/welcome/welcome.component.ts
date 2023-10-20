import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  @ViewChild('image') image: ElementRef;
  @ViewChild('loading') loading: ElementRef;

  constructor(private renderer: Renderer2) { }

  public async onLoadImage(image: HTMLImageElement, loading: HTMLElement): Promise<void> {
    this.renderer.setStyle(loading, 'opacity', 0);
    this.renderer.setStyle(image, 'display', 'block');

    setTimeout(() => {
      this.renderer.setStyle(image, 'opacity', 1);
      this.renderer.setStyle(loading, 'display', 'none');
    }, 700);
  }
}
