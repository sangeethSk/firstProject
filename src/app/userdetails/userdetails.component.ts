import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from '../userdetails.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  userdetails: any ='';


  constructor(private service:UserdetailsService) { }


  ngOnInit(): void {
    this.service.SharingData.subscribe((res:any)=> {
      this.userdetails = res
    })
  }

}
