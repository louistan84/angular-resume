import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {
  title = "RESUME"
  btnText = "Edit Resume"
  btnColor = "blue"
  
  constructor() { }

  ngOnInit() {
  }

  onClick() {
  
    if (this.btnText = "Edit Resume") {
    this.btnText = "Save Changes"
    this.btnColor = "green"}
    else {
      this.btnText = "Edit Resume"
      this.btnColor = "blue"
    }
  }



}
