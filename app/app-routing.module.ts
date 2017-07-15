import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { ProductComponent }   from './components/product/product.component';
import { EditProductComponent }   from './components/edit-product/edit-product.component';
import { AddProductComponent }   from './components/add-product/add-product.component';
import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
    { path: 'products', component: ProductComponent },
    { path: 'products/:id', component: EditProductComponent },
    { path: 'add', component: AddProductComponent },
    { path: '',   redirectTo: '/products', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}

   