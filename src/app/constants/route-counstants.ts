import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class RouteConstants {
  places = '/places/';
  base_url = environment.base_url;
}
