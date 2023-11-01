import { Component, Input } from '@angular/core';
import { IUrl } from 'src/app/models/i-url';

@Component({
  selector: 'app-urls-list',
  templateUrl: './urls-list.component.html',
  styleUrls: ['./urls-list.component.css']
})
export class UrlsListComponent  {

  urls: IUrl[] = [];

  constructor() {}

  addUrl(url: IUrl): void {
    this.urls.push(url);
  }

  deleteUrls(index: number): void {
    this.urls.splice(index,1);
  }
}
