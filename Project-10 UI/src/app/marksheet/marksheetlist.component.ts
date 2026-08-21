import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from 'baselist.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-marksheet-list',
  templateUrl: './marksheetlist.component.html'
})
export class MarksheetListComponent extends BaseListCtl {

  constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.MARKSHEET, locator, route);
  }

}