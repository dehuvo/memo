import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MemoHttpService } from './memo-http.service';
import { Memo } from './memo';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css']
})
export class MemoComponent implements OnInit {
  memos: Memo[];
  errorMessage: string;

  constructor(private memoHttpService: MemoHttpService) { }

  ngOnInit() {
    this.getMemos();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const memo = Object.assign({ date: Date.now() }, form.value);
      this.memoHttpService.addMemo(memo).subscribe(
        id => {
          memo.id = id;
          this.memos.push(memo);
          form.reset();
        },
        error => this.errorMessage = error
      );
    }
  }

  getMemos() {
    this.memoHttpService.getMemos().subscribe(
      memos => this.memos = memos,
      error => this.errorMessage = error
    );
  }

  removeMemo(id: number) {
    this.memoHttpService.removeMemo(id).subscribe(
      () => {
        const index = this.memos.findIndex(data => data.id === id);
        this.memos.splice(index, 1);
      },
      error => this.errorMessage = error
    );
    return false;
  }
}
