import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HTTP_INTERCEPTORS } from "@angular/common/http";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'brodcast';

  stream: boolean = false;
  embededUrl: any;
  constructor(public http: HttpClient,private sanitizer: DomSanitizer) {

  }



  startStream() {
    this.stream = true;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.bambuser.v1+json',
      'Authorization': 'Bearer GF1CJ6J6kfwbQmjk5mLA6V',
    });

    this.http.post('https://api.bambuser.com/broadcasterEmbedUrl',
      '{"applicationId": "bI1ca3azlqV8LDUlIZHeug", "domain": "iamnavino.github.io"}'
      , { headers: headers }).subscribe((data: any) => {

        this.embededUrl = this.sanitizer.bypassSecurityTrustResourceUrl(data.embedUrl);
      })
  }
}
