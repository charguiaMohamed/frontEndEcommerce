import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {InscrireComponent} from './pages/inscrire/inscrire.component';
import {MvtstckComponent} from './pages/mvtstck/mvtstck.component';
import {PageCmdCltFrComponent} from './pages/page-cmd-clt-fr/page-cmd-clt-fr.component';
import {PageDashboardComponent} from './pages/page-dashboard/page-dashboard.component';
import {PageCategorieComponent} from './pages/categories/page-categorie/page-categorie.component';
import {PageArticleComponent} from './pages/articles/page-article/page-article.component';
import {ClientComponent} from './pages/client/client.component';
import {FournisseurComponent} from './pages/page-fournisseur/fournisseur/fournisseur.component';
import {PageProfilComponent} from './pages/profil/page-profil/page-profil.component';
import {NouvelCategorieComponent} from './pages/categories/nouvel-categorie/nouvel-categorie.component';
import {ApplicationGuardService} from './services/guard/application-guard.service';
import {PageAcceuilComponent} from './pages/page-acceuil/page-acceuil.component';
import {PageStatistiqueComponent} from './pages/page-statistique/page-statistique.component';
import {CartComponent} from './composants/cart/cart.component';
import {CheckoutComponent} from './composants/checkout/checkout.component';

const routes: Routes = [
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'inscrire',
    component : InscrireComponent
  },
  {
    path : '',
    component : PageDashboardComponent, canActivate: [ApplicationGuardService],
    children : [
      {
        path : 'acceuil',
        component : PageAcceuilComponent
      },
      {
        path : 'categories',
        component : PageCategorieComponent,
      },
      {
        path : 'nouvelcategorie',
        component : NouvelCategorieComponent,
      },
      {
        path : 'articles',
        component : PageArticleComponent,
      },
      {
        path : 'mvtstck',
        component : MvtstckComponent,
      },
      {
        path : 'clients',
        component : ClientComponent,
      },
      {
        path : 'fournisseurs',
        component : FournisseurComponent,
      },
      {
        path : 'mvtstck',
        component: MvtstckComponent,
      },
      {
        path : 'commandeclient',
        component: PageCmdCltFrComponent,
      },
      {
        path : 'commandefournisseur',
        component: PageCmdCltFrComponent,
      },
      {
        path : 'profile',
        component : PageProfilComponent,
      },
      {
        path : 'statistiques',
        component : PageStatistiqueComponent,
      },
      {
        path : 'cart',
        component : CartComponent,
      },
      {
        path : 'checkout',
        component : CheckoutComponent,
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
