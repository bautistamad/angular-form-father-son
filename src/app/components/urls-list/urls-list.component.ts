import { Component, Input } from '@angular/core';
import { IUrl } from 'src/app/models/i-url';

@Component({
  selector: 'app-urls-list',
  templateUrl: './urls-list.component.html',
  styleUrls: ['./urls-list.component.css']
})
export class UrlsListComponent {

  urls: IUrl[] = [];

  _newPage!: IUrl;

  constructor() {}


  private addUrl(url: IUrl): void {
    this.urls.push(url);
  }

  @Input() set newPage(page: IUrl) {
    if (page) {
      this.addUrl(page);
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
   
  }

  deleteUrls(index: number): void {
    this.urls.splice(index,1);
  }
}
