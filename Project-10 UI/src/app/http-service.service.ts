import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpClient: HttpClient, private router: Router) {

  }

  post(endpoint: any, bean: any, callback: any, errorCallback?: any) {
    return this.httpClient.post(endpoint, bean, {withCredentials : true}).subscribe((data) => {
      callback(data);
    }, (error) => {
      if (errorCallback) {
        errorCallback(error);
      } else {
        this.handleError(error);
      }
    });
  }

  get(endpoint: any, callback: any) {
    return this.httpClient.get(endpoint, {withCredentials : true}).subscribe((data) => {
      callback(data);
    }, (error) => {
      this.handleError(error);
    });
  }

  private handleError(error: any): void {
    console.error('Request failed', error);
    if (error.status === 401) {
      localStorage.clear();
      this.router.navigate(['/login'], {
        queryParams: { errorMessage: error.error.error }
      });
    }
  }


  getReport(url: string, token: string) {
    console.log("getReport() called with URL:", url);
    
    this.httpClient
      .get(url, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
        responseType: 'blob',
        withCredentials: true
      })
      .subscribe(
        (res: any) => {
          console.log("Report received successfully, size:", res.size);
          const file = new Blob([res], { type: 'application/pdf' });
          const fileURL = URL.createObjectURL(file);
          console.log("Opening PDF at:", fileURL);
          const newWindow = window.open(fileURL);
          if (!newWindow) {
            alert('Please allow pop-ups for this site to view the report');
          }
        }, 
        (error: any) => {
          console.error('Report error details:', error);
          let errorMsg = 'Failed to generate report';
          
          if (error.status === 0) {
            errorMsg = 'Unable to reach the server. Make sure backend is running.';
          } else if (error.status === 401) {
            errorMsg = 'Unauthorized. Please login again.';
          } else if (error.status === 404) {
            errorMsg = 'Report endpoint not found.';
          } else if (error.status === 500) {
            errorMsg = 'Server error while generating report.';
          }
          
          alert(errorMsg);
          this.handleError(error);
        }
      );
  }
}
