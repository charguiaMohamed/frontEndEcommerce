import {Component, OnInit} from '@angular/core';
import {OpenGenericModalService} from '../../../services/genericModalOpening/open-generic-modal.service';

@Component({
  selector: 'app-changer-mot-de-passe',
  templateUrl: './changer-mot-de-passe.component.html',
  styleUrls: ['./changer-mot-de-passe.component.css']
})
export class ChangerMotDePasseComponent implements OnInit {

  closeResult = '';

  constructor(private modalService: OpenGenericModalService) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  open(content) {
    this.modalService.openModal(content);
  }

  // tslint:disable-next-line:typedef
  dismiss() {
    this.modalService.modalRef.hide();
  }
}
