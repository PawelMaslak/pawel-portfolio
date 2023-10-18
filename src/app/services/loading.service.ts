import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingProgressSubject: Subject<number> = new Subject<number>();

  get loadingProgress(): Observable<number> {
    return this.loadingProgressSubject.asObservable();
  }

  updateLoadingProgress(progress: number) {
    this.loadingProgressSubject.next(progress);
  }
}
