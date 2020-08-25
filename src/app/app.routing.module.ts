import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { AuthGuard } from './core/auth/auth.guard';
import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';



const routes:Routes = [

    {path:'',
     pathMatch:'full',
     redirectTo: 'home'   
    },

    {
        path:'home',
        loadChildren:'./home/home.module#HomeModule'   
    
    },
    
    
    {path:'user/:userName',
     component:PhotoListComponent,
     resolve:{
         photos:PhotoListResolver
     }
     },

    {path:'p/add',
    component:PhotoFormComponent,
    canActivate: [AuthGuard]},

    {path:'p/:photoId',
    component:PhotoDetailsComponent,
    },

    {path:'not-found',
    component:NotFoundComponent
    },

    {path:'**',
    redirectTo: 'not-found'
    }//Quando acessa uma rota inexistente
];

@NgModule({

    imports:[RouterModule.forRoot(routes,{useHash:true})],//useHash => Compatibilidade de rotas na maioria dos navegadores

    exports:[RouterModule]
})
export class AppRoutingModule {



}