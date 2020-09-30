import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormArray, FormControl} from '@angular/forms';


@Component({
  selector: 'app-potentials',
  templateUrl: './potentials.component.html',
  styleUrls: ['./potentials.component.css']
})
export class PotentialsComponent implements OnInit {
  itemsForm: FormGroup;
  
  constructor(private fb:FormBuilder) { 
    this.itemsForm = this.fb.group({
      items: this.fb.array([]) ,
    });
  }

  ngOnInit(): void {
  }

  /**
* This is the items() function
* @returns returns item as FormArray
*/

  items() : FormArray {
    return this.itemsForm.get("items") as FormArray
  }

  /**
* This is the newQuantity() function
* @returns returns fb, formGroup parameter
*/

  newQuantity(): FormGroup {
    return this.fb.group({
      itm: '',
    })
  }

  /**
* This is the addItems() function
* @returns returns void
*/
  addItems()
  {
    this.items().push(this.newQuantity());
  }
}
