import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.USER, locator, route);
  }

  fileToUpload: File | null = null;

  override submit(): void {
    this.serviceLocator.httpService.post(this.api.save, this.form.data, (res: any) => {
      this.form.message = '';
      this.form.inputerror = {};

      if (!res.success) {
        this.form.error = true;
        this.form.inputerror = res.result?.inputerror || {};
        this.form.message = res.result?.message;
        return;
      }

      this.form.error = false;
      this.form.message = res.result.message;
      this.form.data.id = res.result.data;

      if (this.fileToUpload && this.form.data.id) {
        this.uploadProfileImage();
      }
    });
  }

  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.fileToUpload = input.files?.item(0) || null;
  }

  private uploadProfileImage(): void {
    const formData = new FormData();
    formData.append('file', this.fileToUpload as File);
    this.serviceLocator.httpService.post(
      this.endpoint + '/profilePic/' + this.form.data.id,
      formData,
      () => undefined,
      (error: any) => console.error('Profile image upload failed', error)
    );
  }

}
