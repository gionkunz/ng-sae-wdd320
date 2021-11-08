import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RepositorySearchResult } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('queryInput') queryInput!: ElementRef<HTMLInputElement>;
  result?: RepositorySearchResult;

  constructor(private http: HttpClient) {

  }

  search() {
    // URL for search: https://api.github.com/search/repositories?q=bitcoin
    const query = this.queryInput.nativeElement.value;
    this.http
      .get<RepositorySearchResult>(`https://api.github.com/search/repositories?q=${query}`)
      .subscribe(result => this.result = result);
  }
}
