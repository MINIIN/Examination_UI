import { Component, OnInit } from '@angular/core';
import { AdminDashbordService } from './admin-dashbord.service';
import { resolveObjectURL } from 'buffer';

@Component({
  selector: 'app-admin-dashbord',
  templateUrl: './admin-dashbord.component.html',
})
export class AdminDashbordComponent implements OnInit {
  displayedColumnsUser: string[] = ['name', 'count'];

  // userId = localStorage.getItem('UserId')!;

  dataSourceUser = this.adminDashbordService.getUser();
  dataSourceExamination = this.adminDashbordService.getExamination();

  address = '';
  balance = '';
  countBlock = '';
  lastTxAddress = '';
  // lastData = ''

  constructor(private adminDashbordService: AdminDashbordService) {}

  ngOnInit(): void {
    this.adminDashbordService.getaddress().subscribe(result => {
      console.log(result);
      this.address = result.result;
    });

    this.adminDashbordService.getbalance().subscribe(result => {
      console.log(result);
      this.balance = result.result;
    });

    this.adminDashbordService.getcountBlock().subscribe(result => {
      console.log(result);
      this.countBlock = result.result;
    });

    this.adminDashbordService.getlastTxAddress().subscribe(result => {
      console.log(result);
      this.lastTxAddress = result.result;
    });
  }
}
