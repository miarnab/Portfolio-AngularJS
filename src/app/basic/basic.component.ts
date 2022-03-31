import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubApiService } from '../github-api.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  profile: any;

  constructor(private githubapiservice:GithubApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.get
  }

}
