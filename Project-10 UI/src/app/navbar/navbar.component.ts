import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import { ServiceLocatorService } from '../service-locator.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  endpoint = "http://localhost:8080/Auth/";
  menuOpen = false;
  selectedLocale = localStorage.getItem("locale") || 'en';

  form: any = {
    data: {},
    message : ''
  }

  constructor(private translate: TranslateService,private httpService: HttpServiceService, private router: Router, private servicelocator: ServiceLocatorService) {
 const locale = localStorage.getItem("locale") || 'en';
    translate.setDefaultLang(locale);
    translate.use(locale);

  }

    changeLocale(locale: string) {
      this.selectedLocale = locale;
    localStorage.setItem("locale", locale);
    this.translate.use(locale);
  }

  isLogin() {
    let check = localStorage.getItem('fname');
    if (check != "null" && check != null) {
      this.form.data.fname = localStorage.getItem("fname");
      this.form.data.role = localStorage.getItem("role");
      return true;
    } else {
      return false;
    }
  }

  logout() {
    var _self = this;
    this.httpService.get(this.endpoint + 'logout', function (res: any) {
      
      localStorage.clear();
      _self.router.navigateByUrl('login?message=user logout successfully')
      
    });
    
  }

  forward() {
    this.form.data.userId = localStorage.getItem("userId");
    this.servicelocator.forward("/myprofile/" + this.form.data.userId);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}