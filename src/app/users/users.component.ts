import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  usersData: any;

  constructor(private data: DataService) {
    console.log('data inside users contsructor', this.data);
  }
  ngOnInit() {
    console.log('this.data.getUser()', this.data.getUsers());
    this.data.getUsers().subscribe((data) => {
      this.usersData = data;
    });
    console.log('usersData inside ngOnInit user component', this.usersData);
  }
}
