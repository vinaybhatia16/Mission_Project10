import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from 'baselist.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './studentlist.component.html'
})
export class StudentListComponent extends BaseListCtl {

  constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.STUDENT, locator, route);
  }

}