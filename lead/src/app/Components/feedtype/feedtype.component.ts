import { Component, OnInit } from '@angular/core';
import { FeedTypes } from 'src/app/shared/models/feedtypes';
import { DataService } from 'src/app/shared/services/data.service';
@Component({
  selector: 'app-feedtype',
  templateUrl: './feedtype.component.html',
  styleUrls: ['./feedtype.component.css']
})
export class FeedtypeComponent implements OnInit {
name: any;
description:any;
FeedTypes = {} as FeedTypes;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onSave()
  {
    // console.log(this.name,this.description);
    const FeedTypes = {} as FeedTypes;

    this.FeedTypes.name = this.name;
    this.FeedTypes.description = this.description;
    
     this.dataService.onFeedTypeSave(this.FeedTypes).subscribe(data => {
      console.log(data);
    })
  }
  onImport() {
   


  }
}
