import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  @Input()
  visible: boolean = false;
  @Input()
  notFoundMessage: string = "Not Found!"
  @Input()
  restLinkText: string = "Rest";
  @Input()
  restLinkRounte: string = "/";

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
