import { Component, OnInit } from '@angular/core';
import { ProjectItem } from 'src/app/models/project-item';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: ProjectItem[];
  
  constructor(private projectsService: ProjectsService) { }

  async ngOnInit() {
    this.projects = await this.projectsService.GetProjects();
  }
}
