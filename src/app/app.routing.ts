import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user/user.component';
import { AboutComponent } from './components/about/about.component';
import { PostComponent } from './components/post/post.component';

/* Mapeia as rotas da aplicacao */
const appRoutes: Routes = [
    {
        path: '',
        component: UserComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'posts',
        component: PostComponent
    }
];

/* Exporta as rotas mapeadas */
export const Routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);