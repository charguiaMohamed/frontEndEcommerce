import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
// @ts-ignore
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {OpenGenericModalService} from '../../../services/genericModalOpening/open-generic-modal.service';

@Component({
  selector: 'app-update-ones-article',
  templateUrl: './update-ones-article.component.html',
  styleUrls: ['./update-ones-article.component.css']
})

export class UpdateOneArticleComponent implements OnInit {
  validationForm: FormGroup;
  constructor( private  openModalService: OpenGenericModalService ,
               private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.validationForm = this.initConfig();
  }
  // tslint:disable-next-line:typedef
  open(updateArticle ){
    this.openModalService.openModal(updateArticle);
  }
  // tslint:disable-next-line:typedef
  dismiss(){
    this.openModalService.modalRef.hide();
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
