import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Tasks } from 'src/app/shared/models/tasks';
import { DataService } from 'src/app/shared/services/data.service';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-createnewtasks',
  templateUrl: './createnewtasks.component.html',
  styleUrls: ['./createnewtasks.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class CreatenewtasksComponent implements OnInit {
  duedate:any;
  Name: any;
  description: any;

  taskControl = new FormGroup({
    name: new FormControl(''),
    dueDate: new FormControl(''),
    description: new FormControl(''),
    feedTypeData: new FormControl(''),
  })
 
  task = {} as Tasks;
  getFeedType: any;
  lmActionTypeId: any;
  constructor( private dataService: DataService,) { }

  ngOnInit(): void {
    this.getFeedTypeNameInDropdown()
  }
  public tools: object = {
    items: [
           'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
           'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
           'LowerCase', 'UpperCase', '|', 'Undo', 'Redo', '|',
           'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
           'Indent', 'Outdent', '|', 'CreateLink','CreateTable',
           'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen']
   };
   saveTask(){

    this.task.name= this.taskControl.controls["name"].value;
    this.task.due_date = this.taskControl.controls["dueDate"].value;
    this.task.task_description = this.taskControl.controls["description"].value;
    this.task.lm_feeds_types_id =this.lmActionTypeId;
    this.dataService.inserttasks(this.task).subscribe(data => {
      console.log(data);
    })
   }

   //get Feedtype Name in dropdown from lm_feeds_types
   getFeedTypeNameInDropdown() {
    this.dataService.getFeedTypeName().subscribe((data) => {
      if (data) {
        this.getFeedType = data.data;
      }
    })
  }
  Onchangestatus(value) {
    this.lmActionTypeId =value;
  }
}
