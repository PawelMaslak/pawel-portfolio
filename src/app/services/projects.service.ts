import { Injectable } from '@angular/core';
import { ProjectItem } from '../models/project-item';
import projectsJson from 'src/assets/projects/projects.json';
import { Subject } from 'rxjs';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {
  isLoading: boolean = false;
  progressCycles: number = 100;
  progress: Subject<number> = new Subject<number>();

  constructor(private loadingService: LoadingService) {}

  public async GetProjects(): Promise<ProjectItem[]> {
    return projectsJson as ProjectItem[];
  }
}
