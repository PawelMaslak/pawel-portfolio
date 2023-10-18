import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent{
  loadingProgress: number = 0;

  constructor(private loadingService: LoadingService) {
    this.loadingService.loadingProgress.subscribe((progress) => {
      this.loadingProgress = progress;
      console.log(this.loadingProgress);
    });
  }
}
