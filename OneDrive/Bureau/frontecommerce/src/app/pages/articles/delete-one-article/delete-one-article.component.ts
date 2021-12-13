import {Component, OnInit, TemplateRef} from '@angular/core';
import {OpenGenericModalService} from '../../../services/genericModalOpening/open-generic-modal.service';

@Component({
  selector: 'app-delete-ones-article',
  templateUrl: './delete-ones-article.component.html',
  styleUrls: ['./delete-ones-article.component.css']
})

export class DeleteOneArticleComponent implements OnInit {

  closeResult = '';
  constructor(  private modalService: OpenGenericModalService ) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  open(content ){
    this.modalService.openModal(content);
  }
  // tslint:disable-next-line:typedef
  dismiss(){
    this.modalService.modalRef.hide();
  }
}
