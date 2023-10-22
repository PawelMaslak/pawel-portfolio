import { Component, Input, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { ProjectItem } from 'src/app/models/project-item';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() project: ProjectItem;
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
