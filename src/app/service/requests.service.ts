import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RequestService {
  constructor(private http: HttpClient) {}
  // Common get  function which will receive API urls returns the API response
  getAll(url: string) {
    return this.http.get(url);
  }
}
