import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from 'baselist.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-college-list',
  templateUrl: './collegelist.component.html'
})
export class CollegeListComponent extends BaseListCtl {

  constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.COLLEGE, locator, route);
  }

}