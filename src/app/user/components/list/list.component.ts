import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Exam } from 'src/app/core/models/exam.models';
import { HelperService } from 'src/app/core/services/helper/helper.service';
import { ActionModalComponent } from '../action-modal/action-modal.component';
import { ExamService } from '../../../core/services/exam/exam.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  public displayedColumns: string[] = ['fullName', 'phone', 'rut', 'age', 'prediction', 'actions'];
  public dataSource: MatTableDataSource<any>;
  public examSelected: Exam | null;
  public exams: Exam[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private helper: HelperService,
    private dialog: MatDialog,
    private examService: ExamService
  ) {
    
    this.exams = [];
    this.dataSource = new MatTableDataSource();
    this.examSelected = null;
  }

  async fetchExams(): Promise<Exam[]> {
   try {
     let response = await this.examService.getExams().toPromise()
     if (response) {
       return response;
     } else {
      return [];
     }
    } catch (error) {
      return [];
    }
  }

  async ngOnInit(): Promise<void> {
    this.exams = await this.fetchExams();
    this.dataSource = new MatTableDataSource(this.exams);
  }
  
  async ngOnChanges() {
    this.exams = await this.fetchExams();
    this.paginator._intl.itemsPerPageLabel = 'Usuarios a mostrar: ';
    this.dataSource = new MatTableDataSource(this.exams);
    this.dataSource.paginator = this.paginator;
  }

  async ngAfterViewInit() {
    this.exams = await this.fetchExams();
    this.paginator._intl.itemsPerPageLabel = 'Usuarios a mostrar: ';
    this.dataSource = new MatTableDataSource(this.exams);
    this.dataSource.paginator = this.paginator;
  }

  onKey(event: Event){
    const filterValue = (event.target as HTMLInputElement)?.value;
    this.dataSource.filter = filterValue?.trim().toLowerCase();
  };

  public openModal(event: string, exam: Exam) {
    this.dialog.open(ActionModalComponent, {
      width: '400px',
      data: {
        event: event,
        exam: this.examSelected === exam ? this.examSelected : exam
      }
    });
  };
}
