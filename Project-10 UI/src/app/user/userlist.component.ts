import { Component } from '@angular/core';
import { BaseListCtl } from 'baselist.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './userlist.component.html'
})
export class UserListComponent extends BaseListCtl {

  constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.USER, locator, route);
  }

}