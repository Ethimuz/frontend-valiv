import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/core/models/user.model';
import { HelperService } from 'src/app/core/services/helper/helper.service';
import { ActionModalComponent } from '../action-modal/action-modal.component';
import { UserService } from '../../../core/services/user/user.service';

@Component({
  selector: 'app-list-unvalidated',
  templateUrl: './list-unvalidated.component.html',
  styleUrls: ['./list-unvalidated.component.less']
})
export class ListUnvalidatedComponent implements OnInit {

  public displayedColumns: string[] = ['fullName', 'phone', 'institution', 'speciality', 'actions'];
  public dataSource: MatTableDataSource<any>;
  public userSelected: User | null;
  public users: User[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private helper: HelperService,
    private dialog: MatDialog,
    private userService: UserService
  ) {
    this.users = [];
    this.dataSource = new MatTableDataSource();
    this.userSelected = null;
  }

  
  async ngOnInit(): Promise<void> {
    this.users = await this.fetchUsers();
    this.dataSource = new MatTableDataSource(this.users);
  }
  
  async fetchUsers(): Promise<User[]> {
    try {
      let response = await this.userService.getUnvalidates().toPromise()
      if (response) {
        return response;
      } else {
       return [];
      }
     } catch (error) {
       return [];
     }
   }

   async ngOnChanges() {
    this.users = await this.fetchUsers();
    this.paginator._intl.itemsPerPageLabel = 'Usuarios a mostrar: ';
    this.dataSource = new MatTableDataSource(this.users);
    this.dataSource.paginator = this.paginator;
  }

  async ngAfterViewInit() {
    this.users = await this.fetchUsers();
    this.paginator._intl.itemsPerPageLabel = 'Usuarios a mostrar: ';
    this.dataSource = new MatTableDataSource(this.users);
    this.dataSource.paginator = this.paginator;
  }

  onKey(event: Event){
    const filterValue = (event.target as HTMLInputElement)?.value;
    this.dataSource.filter = filterValue?.trim().toLowerCase();
  };

  public openModal(event: string, user: User) {
    this.dialog.open(ActionModalComponent, {
      width: '400px',
      data: {
        event: event,
        user: this.userSelected === user ? this.userSelected : user
      }
    });
  };
}
