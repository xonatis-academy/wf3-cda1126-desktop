import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'frontangular';

    public searchText: string = '';
    public entries: string[] = [];

    constructor(private httpClient: HttpClient) {
    }

    public handleList(): void {
        this.httpClient.get<any[]>('http://localhost:4000')
        .subscribe(data => {
            this.entries = data.map(x => Object.values(x).join(' - '))
        })
    }

    public handleSearch(): void {
        this.httpClient.post<any[]>('http://localhost:4000/search', {
            text: this.searchText
        }).subscribe(data => {
            this.entries = data.map(x => Object.values(x).join(' - '))
        })
    }
}
