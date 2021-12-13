import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CategoryService} from '../../../services/servicesapi/category/category.service';
@Component({
  selector: 'app-page-categorie',
  templateUrl: './page-categorie.component.html',
  styleUrls: ['./page-categorie.component.css']
})
export class PageCategorieComponent implements OnInit {

  categories: any = [];
  selectedCatIdToDelete ? = -1;
  errorMsgs = '';

  constructor(
    private router: Router,
    private categoryservice: CategoryService
  ) { }

  ngOnInit(): void {
    this.categoryservice.getData().subscribe((categories) => {
      this.categories = categories;
    });
  }
  findAllCategories(): void {
    this.categoryservice.getData()
      .subscribe(res => {
        this.categories = res;
      });
  }
  selectCatPourSupprimer(id?: number): void {
    this.selectedCatIdToDelete = id;
  }

  confirmerEtSupprimerCat(): void {
    if (this.selectedCatIdToDelete !== -1) {
      this.categoryservice.deletecategory(this.selectedCatIdToDelete)
        .subscribe(res => {
          this.findAllCategories();
        }, error => {
          this.errorMsgs = error.error.message;
        });
    }
  }

  annulerSuppressionCat(): void {
    this.selectedCatIdToDelete = -1;
  }
}
