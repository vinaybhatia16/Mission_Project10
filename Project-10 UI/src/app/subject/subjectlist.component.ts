import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from 'baselist.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subjectlist.component.html'
})
export class SubjectListComponent extends BaseListCtl {

  constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.SUBJECT, locator, route);
  }

}