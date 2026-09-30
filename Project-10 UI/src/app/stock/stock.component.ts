import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
})
export class StockComponent extends BaseCtl{
constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
      super(locator.endpoints.Stock, locator, route);
    }

}