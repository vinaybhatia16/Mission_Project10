import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from 'baselist.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-faculty-list',
  templateUrl: './facultylist.component.html'
})
export class FacultyListComponent extends BaseListCtl {

  constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.FACULTY, locator, route);
  }

}
