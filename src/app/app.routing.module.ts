import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { SignInComponent } from './home/signin/signin.component';
import { AuthGuard } from './core/auth/auth.guard';
import { SignUpComponent } from './home/signup/signup.component';


const routes:Routes = [

    {path:'',
    component:HomeComponent,
    canActivate:[ AuthGuard ],
    children:[

        {path:'',
        component:SignInComponent        
        },

        {path:'signup',
        component:SignUpComponent    
        },

    ]
    },
    
    
    {path:'user/:userName',
     component:PhotoListComponent,
     resolve:{
         photos:PhotoListResolver
     }
     },

    {path:'p/add',
    component:PhotoFormComponent},

    {path:'**',
    component:NotFoundComponent}//Quando acessa uma rota inexistente
];

@NgModule({

    imports:[RouterModule.forRoot(routes)],

    exports:[RouterModule]
})
export class AppRoutingModule {



}