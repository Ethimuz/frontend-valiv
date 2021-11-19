import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Exam } from 'src/app/core/models/exam.models';
import { ExamService } from '../../../core/services/exam/exam.service';

@Component({
  selector: 'app-action-modal',
  templateUrl: './action-modal.component.html',
  styleUrls: ['./action-modal.component.less']
})
export class ActionModalComponent implements OnInit {

  public exam: Exam | null;

  constructor(
    private dialogRef: MatDialogRef<ActionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { event: string, exam: Exam },
    private examService: ExamService
  ) { 
    if (data.exam) this.exam = data.exam;
    else this.exam = null;
  }

  ngOnInit(): void {
  }
  async action() {
    
    if (this.data.event === 'eliminar') {
      if (this.data.exam._id)
        await this.examService.deleteExam(this.data.exam._id).toPromise();
    }
  }

}
