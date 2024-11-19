import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { NotFoundComponent } from './not-found/not-found.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'services', component: ServicePageComponent },
    { path: 'portfolio', component: PortfolioPageComponent },
    { path: 'contact', component: ContactPageComponent },
    { path: 'blog', component: BlogPageComponent },
    // Wildcard route for "Not Found" page
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
export class AppRoutingModule {}