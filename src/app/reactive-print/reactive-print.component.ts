import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reactive-print',
  templateUrl: './reactive-print.component.html',
  styleUrls: ['./reactive-print.component.css']
})
export class ReactivePrintComponent implements OnInit {

  @Input() cName = '';
  @Input() jName = '';
  @Input() yearEmploy = 0;
  @Input() cEmail = '';
  @Input() cContact = '';

  constructor() { }

  ngOnInit(): void {
  }

}
