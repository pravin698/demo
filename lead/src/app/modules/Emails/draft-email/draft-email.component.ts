import { Component, OnInit } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, TableService } from '@syncfusion/ej2-angular-richtexteditor';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-draft-email',
  templateUrl: './draft-email.component.html',
  styleUrls: ['./draft-email.component.css']
})
export class DraftEmailComponent implements OnInit {
  // richText: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
  public toolsName: object = {
    items: [
           'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
           'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
           'LowerCase', 'UpperCase', '|', 'Undo', 'Redo', '|',
           'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
           'Indent', 'Outdent', '|', 'CreateLink','CreateTable',
           'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen']
   };
}

