import { Component } from '@angular/core';
import { BaseListCtl } from 'baselist.component';
import { ServiceLocatorService } from 'src/app/service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stocklist.component.html',
  styleUrls: ['./stocklist.component.css'],
})
export class StockListComponent extends BaseListCtl {
  constructor(
    public locator: ServiceLocatorService,
    route: ActivatedRoute,
  ) {
    super(locator.endpoints.Stock, locator, route);
  }
}