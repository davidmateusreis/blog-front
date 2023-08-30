import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  API = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  public sendMessage(message: FormData) {
    return this.httpClient.post(this.API + "/sendMessage", message);
  }
}
