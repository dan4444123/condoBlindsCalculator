import { Injectable } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import {filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  updatesAvailable;
  constructor(updates: SwUpdate) {
    this.updatesAvailable = updates.versionUpdates.pipe(
      filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
      map(evt => ({
        type: 'UPDATE_AVAILABLE',
        current: evt.currentVersion,
        available: evt.latestVersion
      })));
  
  }
}
