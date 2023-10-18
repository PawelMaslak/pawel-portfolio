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
  isLoading: boolean = true;
  loadingProgress: number = 0;

  constructor(private projectsService: ProjectsService) { }

  async ngOnInit() {
    this.projectsService.progress.subscribe((progress) => {
      this.loadingProgress = progress;
    });

    this.projects = await this.projectsService.GetProjects();

    this.isLoading = false;
  }
}
