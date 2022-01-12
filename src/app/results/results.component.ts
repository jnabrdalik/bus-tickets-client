import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Journey } from '../model/journey';
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

  journeys: Journey[];
  loaded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.loaded = false;
      this.cityFrom = params['from'];
      this.cityTo = params['to'];
      this.date = new Date(Date.parse(params['date']));
      this.searchService.getAllJourneys(params['date'], params['from'], params['to']).subscribe(
        journeys => {
          this.journeys = journeys;
          this.loaded = true;
        }
      );
    });
  }

  onClickBuy(journeyId: string) {
    this.router.navigate(
      ['buy-ticket'], {
      queryParams: { journeyId }
    }
    );
  }

}
