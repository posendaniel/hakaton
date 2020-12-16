import { RouterModule } from '@angular/router'

import { ApplicationBrokenLinkPage } from './pages/broken/broken.page'
import { ApplicationRootPage } from './pages/root/root.page'

export class ApplicationRouter
{
    static load()
    {
        return RouterModule.forRoot
        ([
            { path: '', component: ApplicationRootPage },
            { path: '**', component: ApplicationBrokenLinkPage }
        ])
    }
}