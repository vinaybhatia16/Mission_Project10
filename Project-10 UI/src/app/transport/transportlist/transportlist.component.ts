import { Component } from '@angular/core';
import { BaseListCtl } from 'baselist.component';
import { ServiceLocatorService } from 'src/app/service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transport-list',
  templateUrl: './transportlist.component.html',
})
export class TransportListComponent extends BaseListCtl{

  constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
        super(locator.endpoints.Transport, locator, route);
      }

}