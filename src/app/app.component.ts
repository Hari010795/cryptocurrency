import { Component, OnInit, OnDestroy } from '@angular/core';
import { CurrenyserviceService } from './currenyservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy  {
  title = 'cryptocurrency';
  datasource: any;
  displayedColumns = ['Last price', 'Last quantity', 'Best bid price', 'Best bid quantity',
  'Best ask price','Best ask quantity','Open price','High price','Low price'];
  private subscription: any;

  constructor(private currencyService: CurrenyserviceService){ }
  
  ngOnInit() {
    this.subscription = this.currencyService.getcurrency().subscribe(
      (response) => {
        this.datasource = response.response;
        console.log(this.datasource);
        console.log(response)
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.currencyService.ngOnDestroy();
  }
}
