import { Injectable } from '@angular/core';

//1. Import HTTP libs for API calls
import { HttpClient, HttpHeaders} from '@angular/common/http';

//Import Observable
import { Observable } from 'rxjs';

// Import the User object
import { User } from './user';

// Set outbound HTTP headers to JSON
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class UsersService {

  //Set up the URL
  private url: string = 'http://localhost:3000/api/users';
  
  //Call the HttpClinet in the Constructor
  constructor(private http: HttpClient) {}

  // Set up a simple observable 
  getUsers(): Observable<User>{
    return this.http.get<User>(this.url);
  }
}