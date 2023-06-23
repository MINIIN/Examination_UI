import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AddScoreService } from './add-score.service';
import { TranslateService } from '@ngx-translate/core';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { MtxDialog } from '@ng-matero/extensions/dialog';
// import { TablesKitchenSinkEditComponent } from 'app/routes/tables/kitchen-sink/edit/edit.component';
import { TablesDataService } from 'app/routes/tables/data.service';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'app-add-score',
  templateUrl: './add-score.component.html',

  providers: [TablesDataService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddScoreComponent implements OnInit {
  // displayedColumns: string[] = ['user_name', 'score'];

  userId = localStorage.getItem('UserId')!;
  // userId = '7';

  // dataSource = this.addScoreService.getScore(this.userId);
  columns: MtxGridColumn[] = [
    {
      header: 'ID',
      field: 'id',
      // sortable: true,
      disabled: true,
      minWidth: 100,
      hide: true,
    },
    {
      header: 'Examination Name',
      field: 'name',
      // sortable: true,
      disabled: true,
      minWidth: 100,
    },
    {
      header: 'Examination ID',
      field: 'studentId',
      // sortable: true,
      disabled: true,
      minWidth: 100,
    },
    {
      header: 'Operation',
      field: 'operation',
      // minWidth: 120,
      width: '50px',
      pinned: 'right',
      type: 'button',
      buttons: [
        {
          type: 'icon',
          icon: 'add',
          tooltip: 'Add score',
          click: record => this.edit(record),
        },
      ],
    },
  ];
  isLoading = true;
  list: any[] = [];

  multiSelectable = true;
  rowSelectable = true;
  hideRowSelectionCheckbox = true;
  showToolbar = false;
  columnHideable = true;
  columnMovable = true;
  rowHover = false;
  rowStriped = false;
  showPaginator = true;
  expandable = false;
  columnResizable = false;

  constructor(
    private addScoreService: AddScoreService,
    private translate: TranslateService,
    public dialog: MtxDialog,
    private dataSrv: TablesDataService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // this.list = this.dataSrv.getData();

    // this.addScoreService.getScore(this.userId).subscribe(result => {
    //   // console.log(result);
    //   this.list = result;
    //   // console.log(this.list);
    //   this.cdr.detectChanges();
    //   this.isLoading = false;
    // })
    // this.list = this.addScoreService.getScore(userId);
    this.getdata();
  }

  getdata(): void {
    this.addScoreService.getScore(this.userId).subscribe(result => {
      // console.log(result);
      this.list = result;
      // console.log(this.list);
      this.cdr.detectChanges();
      this.isLoading = false;
    });
  }

  edit(value: any) {
    const dialogRef = this.dialog.originalOpen(EditComponent, {
      width: '600px',
      data: { record: value },
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
      this.getdata();
    });
  }

  delete(value: any) {
    this.dialog.alert(`You have deleted ${value.position}!`);
  }

  changeSort(e: any) {
    console.log(e);
  }

  changeSelect(e: any) {
    console.log(e);
  }

  enableRowExpandable() {
    this.columns[0].showExpand = this.expandable;
  }
}
