import { Component, Input, OnInit } from '@angular/core';
import { ProjectItem } from 'src/app/models/project-item';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() project: ProjectItem;

  ngOnInit(): void {
    
  }
}
