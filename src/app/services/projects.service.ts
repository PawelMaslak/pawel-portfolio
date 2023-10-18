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
    this.progress.next(0);
    console.log('Getting the data simulation...')

    for (let i = 1; i <= this.progressCycles; i++) {
      await new Promise(f => {
        setTimeout(f, 10);
      });
      this.progress.next(i);
      //Check if this is working
      this.loadingService.updateLoadingProgress(i);
    }

    this.progress.complete();
    console.log('Data fetched!');

    return projectsJson as ProjectItem[];
  }

  // public get projects(): ProjectItem[] {
  //   (async() => {
  //     console.log('Getting the data simulation...')
  //     this.isLoading = true;
  //     await new Promise(f => setTimeout(f, 5000));
  //     this.isLoading = false;
  //     console.log('Data fetched!');
  //     return projectsJson as ProjectItem[];
  //   })();
  // }
}
