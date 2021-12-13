import {Injectable, TemplateRef} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {map} from 'rxjs/operators';

@Injectable()
export class OpenGenericModalService {

  modalRef: BsModalRef;
  modalScope = {};
  constructor(private modalService: BsModalService) {

  }

  // tslint:disable-next-line:typedef
  openModal(template: TemplateRef<any> , styleConfig ?, scope?) {
    this.modalScope['scope'] = scope;
    const receviedStyleConfig = styleConfig ? styleConfig : {class: 'modal-dialog modal-dialog-centered'};
    this.modalRef = this.modalService.show(template, receviedStyleConfig);
  }

  // tslint:disable-next-line:typedef
  changeScopeModalTagname(tagname) {
    this.modalScope['scope'] = tagname;

  }

  // tslint:disable-next-line:typedef
  onModalShown() {
    return this.modalService.onShown.pipe(map((directive) => ({directive, modalScope: this.modalScope})));
  }

  // tslint:disable-next-line:typedef
  onModalHidden() {
    return this.modalService.onHidden.pipe(map((directive) => ({directive, modalScope: this.modalScope})));
  }
}
