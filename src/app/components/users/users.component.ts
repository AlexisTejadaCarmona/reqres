import { Component, OnInit } from '@angular/core';
import { ReqresService } from 'src/app/services/reqres.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  constructor(private reqres: ReqresService) { }

  Users: any[] = [];

  ngOnInit(): void {
    this.reqres.getUsers().subscribe((data: any) => {
      this.Users = data.data;
      console.log(this.Users);
    });
  }

}
