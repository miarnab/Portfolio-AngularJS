import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  profileLink="https://api.github.com/users/miarnab";
  repoLink="https://api.github.com/users/miarnab/repos";

  constructor(private http:HttpClient) { }

  getProfile()
  {
    return this.http.get(`${this.profileLink}`);
  }

  getRepos()
  {
    return this.http.get(`${this.repoLink}`);
  }
}
