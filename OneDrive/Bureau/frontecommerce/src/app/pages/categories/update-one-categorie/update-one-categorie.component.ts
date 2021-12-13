import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {OpenGenericModalService} from '../../../services/genericModalOpening/open-generic-modal.service';

@Component({
  selector: 'app-update-one-categorie',
  templateUrl: './update-one-categorie.component.html',
  styleUrls: ['./update-one-categorie.component.css']
})
export class UpdateOneCategorieComponent implements OnInit {
  validationForm: FormGroup;

  constructor(private  openModalService: OpenGenericModalService ,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.validationForm = this.initConfig();
  }
// tslint:disable-next-line:typedef
  open(updatecategorie ){
    this.openModalService.openModal(updatecategorie);
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
