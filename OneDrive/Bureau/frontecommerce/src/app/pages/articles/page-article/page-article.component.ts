import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NouvelArticleComponent} from '../nouvel-article/nouvel-article.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-page-article',
  templateUrl: './page-article.component.html',
  styleUrls: ['./page-article.component.css']
})
export class PageArticleComponent implements OnInit {

  constructor(
    private modalService: NgbModal

  ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  openModel() {
    this.modalService.open('#nouvart');
  }
}
