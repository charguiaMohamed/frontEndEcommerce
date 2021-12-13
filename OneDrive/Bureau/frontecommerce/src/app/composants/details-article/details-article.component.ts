import {Component, OnInit, TemplateRef} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.css']
})
export class DetailsArticleComponent implements OnInit {
  closeResult = '';
  constructor(  private modalService: NgbModal ) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  openModal( template: TemplateRef<any> ){
    this.modalService.open(template, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }
}
