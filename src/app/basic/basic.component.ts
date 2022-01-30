import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../github-api.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  profile: any;

  constructor(private githubapiservice:GithubApiService) { }

  ngOnInit(): void {
    this.profile=this.githubapiservice.getProfile();
  }

}
