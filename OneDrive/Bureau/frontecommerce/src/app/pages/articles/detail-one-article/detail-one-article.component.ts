import {Component, OnInit, TemplateRef} from '@angular/core';
import {OpenGenericModalService} from '../../../services/genericModalOpening/open-generic-modal.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-detail-ones-article',
  templateUrl: './detail-ones-article.component.html',
  styleUrls: ['./detail-ones-article.component.css']
})

export class DetailOneArticleComponent implements OnInit {
  validationForm: FormGroup;
  constructor(  private modalService: OpenGenericModalService,
                private formBuilder: FormBuilder) { }

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
  // tslint:disable-next-line:typedef
  initConfig(){
    return this.formBuilder.group({
      code: [''],
      libelle: [''],
      Description: [''],
      TVA: [''],
      HT: [''],
      TTC: [''],
    });
  }
}
