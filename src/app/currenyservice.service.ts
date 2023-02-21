import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class CurrenyserviceService {
  private socket$: WebSocketSubject<any>;

  constructor() {
    this.socket$ = webSocket('wss://stream.binance.com:9443/ws/!ticker@arr');
  }

  getcurrency(): Observable<any> {
    return this.socket$
  .pipe(map(response => ({
    response
    }),
    )
    )
  }

  ngOnDestroy() {
    this.socket$.complete();
  }
}

