import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Connection } from '../model/connection';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  cityFrom: string = '';
  cityTo: string = '';
  date: Date = new Date();

  connections: Observable<Connection[]> = this.searchService.getConnections();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.cityFrom = params['from'];
      this.cityTo = params['to'];
      this.date = new Date(Date.parse(params['date']));
    });
  }

  onClickBuy(journeyId: number) {
    this.router.navigate(
      ['buy-ticket'], {
      queryParams: {
        journeyId: journeyId
      }
    }
    );

  }



}
