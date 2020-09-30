import { Component, OnInit } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, TableService } from '@syncfusion/ej2-angular-richtexteditor';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-send-emails',
  templateUrl: './send-emails.component.html',
  styleUrls: ['./send-emails.component.css']
})
export class SendEmailsComponent implements OnInit {
  // richText: FormGroup;
  constructor() { }

  ngOnInit(): void {
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
}
