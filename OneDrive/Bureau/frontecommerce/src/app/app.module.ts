// @ts-ignore

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { InscrireComponent } from './pages/inscrire/inscrire.component';

import { MvtstckComponent } from './pages/mvtstck/mvtstck.component';
import { PageCmdCltFrComponent } from './pages/page-cmd-clt-fr/page-cmd-clt-fr.component';
import { PageStatistiqueComponent } from './pages/page-statistique/page-statistique.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { ClientComponent } from './pages/client/client.component';
import { FournisseurComponent } from './pages/page-fournisseur/fournisseur/fournisseur.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { NouvelCategorieComponent } from './pages/categories/nouvel-categorie/nouvel-categorie.component';
import { PageCategorieComponent } from './pages/categories/page-categorie/page-categorie.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { ChangerMotDePasseComponent } from './pages/profil/changer-mot-de-passe/changer-mot-de-passe.component';
import { DetailsArticleComponent } from './composants/details-article/details-article.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { DetailMvtStkArticleComponent } from './composants/detail-mvt-stk-article/detail-mvt-stk-article.component';
import { DetailMvtStkComponent } from './composants/detail-mvt-stk/detail-mvt-stk.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DetailsClientComponent } from './composants/details-client/details-client.component';
import {DetailOneArticleComponent} from './pages/articles/detail-one-article/detail-one-article.component';
import {DeleteOneArticleComponent} from './pages/articles/delete-one-article/delete-one-article.component';
import {UpdateOneArticleComponent} from './pages/articles/update-one-article/update-one-article.component';
import {OpenGenericModalService} from './services/genericModalOpening/open-generic-modal.service';
import {BsModalService} from 'ngx-bootstrap/modal';
import { DetailCmdCltFrComponent } from './composants/detail-cmd-clt-fr/detail-cmd-clt-fr.component';
import { DetailCmdComponent } from './composants/detail-cmd/detail-cmd.component';
import { UpdateOneCategorieComponent } from './pages/categories/update-one-categorie/update-one-categorie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule} from '@angular/material/card';
import { PageAcceuilComponent } from './pages/page-acceuil/page-acceuil.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import {ChartsModule} from 'ng2-charts';
import { CartComponent } from './composants/cart/cart.component';
import { CheckoutComponent } from './composants/checkout/checkout.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpInterceptorInterceptor} from './services/interceptor/http-interceptor.interceptor';
import {CategoryService} from './services/servicesapi/category/category.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscrireComponent,
    MvtstckComponent,
    PageCmdCltFrComponent,
    PageStatistiqueComponent,
    PageDashboardComponent,
    ClientComponent,
    FournisseurComponent,
    PageArticleComponent,
    NouvelCategorieComponent,
    PageCategorieComponent,
    PageProfilComponent,
    ChangerMotDePasseComponent,
    DetailsArticleComponent,
    PaginationComponent,
    DetailMvtStkArticleComponent,
    DetailMvtStkComponent,
    NouvelArticleComponent,
    DetailsClientComponent,
    DetailOneArticleComponent,
    DeleteOneArticleComponent,
    UpdateOneArticleComponent,
    DetailCmdCltFrComponent,
    DetailCmdComponent,
    UpdateOneCategorieComponent,
    PageAcceuilComponent,
    CartComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatCardModule,
    MatSidenavModule,
    ChartsModule,
    HttpClientModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [OpenGenericModalService,
              BsModalService, {
              provide : HTTP_INTERCEPTORS,
              useClass : HttpInterceptorInterceptor,
              multi: true},
              CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
