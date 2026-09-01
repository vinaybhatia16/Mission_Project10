import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  endpoint = "http://localhost:8080/Auth/login";

  form: any = {
    error: false,
    message: '',
    data: { },
    inputerror: {},
    messsage : ""
  };

  constructor(private httpService: HttpServiceService, private router: Router, private activatedRoute : ActivatedRoute) {

    this.activatedRoute.queryParams.subscribe(params => {
      if (params['message']) {
        this.form.message = params['message'];
      }
      if (params['errorMessage'] || params['errorMsg']) {
        this.form.error = true;
        this.form.message = params['errorMessage'] || params['errorMsg'];
      }
    });
  }

  signIn() {
    const _self = this;
    _self.form.message = '';
    _self.form.error = false;
    _self.form.inputerror = {};

    this.httpService.post(this.endpoint, this.form.data, function (res: any) {
      const result = res?.result || {};

      _self.form.error = !res?.success;
      if (_self.form.error) {
        _self.form.inputerror = result.inputerror || {};
        _self.form.message = result.message || res.message ;
        return;
      }

      localStorage.setItem("loginId", result.loginId);
      localStorage.setItem("role", result.role);
      localStorage.setItem("fname", result.fname);
      localStorage.setItem("lname", result.lname);
      localStorage.setItem("userId", result.data.id);
      localStorage.setItem('token' , 'Bearer ' + res.result.token );

      _self.form.message = result.message || res.message || 'Login successful';
      _self.router.navigateByUrl('dashboard');
    }, function (error: any) {
      const errorBody = error?.error || {};
      const result = errorBody.result || {};

      _self.form.error = true;
      _self.form.inputerror = result.inputerror || errorBody.inputerror || {};
      _self.form.message = result.message || errorBody.message || errorBody.error || 'Unable to sign in. Please check your login ID and password.';
    });
  }

  signUp() {
    this.router.navigateByUrl('signup');
  }


}