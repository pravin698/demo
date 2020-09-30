import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';
import { FeedTypes } from 'src/app/shared/models/feedtypes';
import { Feeds } from 'src/app/shared/models/feeds';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-addnotes',
  templateUrl: './addnotes.component.html',
  styleUrls: ['./addnotes.component.css']
})
export class AddnotesComponent implements OnInit {
  // http: any;
  // apiEndPoint: any;
  duedate: any;
  Name: any;
  description: any;

  taskControl = new FormGroup({
    name: new FormControl(''),
    //dueDate: new FormControl(''),
    dueDate : new FormControl(new Date()),
    description: new FormControl(''),
    taskData: new FormControl(''),
    feedTypeData: new FormControl(''),
  })
  getFeedType: any;
  getTask: any;
  lmActionTypeId: any;
  lmtaskid: any;
  feeds = {} as Feeds;

  constructor(private dataService: DataService, private _snackBar: MatSnackBar) { }
  // onUploadClicked($event)
  //  {
  //     let fileList: FileList = event.target.files;
  //     if(fileList.length > 0) {
  //         let file: File = fileList[0];
  //         let formData:FormData = new FormData();
  //         formData.append('uploadFile', file, file.name);
  //         let headers = new Headers();
  //         /** In Angular 5, including the header Content-Type can invalidate your request */
  //         headers.append('Content-Type', 'multipart/form-data');
  //         headers.append('Accept', 'application/json');
  //         // let options = new RequestOptions({ headers: headers });
  //         this.http.post(`${this.apiEndPoint}`, formData)
  //             .map(res => res.json())
  //             .catch(error => Observable.throw(error))
  //             .subscribe(
  //                 data => console.log('success'),
  //                 error => console.log(error)
  //             )
  //     }
  // }


  ngOnInit(): void {
    this.getAddNotesFeedsInDropdown();
    this.getAddNotesTaskInDropdown()
  }
  public tools: object = {
    items: [
      'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
      'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
      'LowerCase', 'UpperCase', '|', 'Undo', 'Redo', '|',
      'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
      'Indent', 'Outdent', '|', 'CreateLink', 'CreateTable',
      'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen']
  };

  saveTask() {
    this.feeds.lm_feeds_types_id = this.lmActionTypeId;
    this.feeds.lm_task_id = this.lmtaskid;
    // this.feeds.name= this.taskControl.controls["name"].value;
     this.feeds.communicated_on = this.taskControl.controls["dueDate"].value;
    this.feeds.description = this.taskControl.controls["description"].value; 
    this.dataService.insertAddNotes(this.feeds).subscribe(data => {
      if (data) {
      console.log(data);
      }
      else {
        this._snackBar.open("Data not send for Add Notes", "", {
          duration: 4000,
        });
      }
    })
  }
  getAddNotesFeedsInDropdown() {
    this.dataService.getAddnotesFeedTypeName().subscribe((data) => {
      if (data) {
        this.getFeedType = data.data;
      }
      else {
        this._snackBar.open("Data not found for Add Notes", "", {
          duration: 4000,
        });
      }
    })
  }
  Onchangefeedstatus(value) {
    if (value) {
      this.lmActionTypeId = value;
    }
    else {
      this._snackBar.open("Data not found for Add Notes", "", {
        duration: 4000,
      });
    }
  }
  Onchangetaskstatus(result) {
    if (result) {
      this.lmtaskid = result;
    }
    else {
      this._snackBar.open("Data not found for Add Notes", "", {
        duration: 4000,
      });
    }
  }
  getAddNotesTaskInDropdown() {
    this.dataService.getAddnotesTaskName().subscribe((data) => {
      if (data) {
        this.getTask = data.data;
      }
      else {
        this._snackBar.open("Data not found for Add Notes", "", {
          duration: 4000,
        });
      }
    })
  }

}

