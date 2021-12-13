import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CategoryService} from '../../../services/servicesapi/category/category.service';
import {Categorie} from '../../../services/model/category';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvel-categorie',
  templateUrl: './nouvel-categorie.component.html',
  styleUrls: ['./nouvel-categorie.component.css']
})
export class NouvelCategorieComponent implements OnInit {

  category: Categorie;
  closeResult = '';
  categoryform = new FormGroup({
    name: new FormControl('', [Validators.required])
  });

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private categoryservice: CategoryService
  ) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }

  onSubmit(): void{
    this.categoryservice.postcategory(this.categoryform.value).subscribe();
    this.router.navigate(['/categories']);
  }


}
