import { NgModule } from '@angular/core'
import { BidiModule } from '@angular/cdk/bidi'
import { OverlayModule } from '@angular/cdk/overlay'
import { DragDropModule } from '@angular/cdk/drag-drop'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { MatTooltipModule } from '@angular/material/tooltip'
import { LayoutModule } from '@angular/cdk/layout'
import { RouterModule } from '@angular/router'

import 'hammerjs'
import { MaterialModule } from './modules'
import { ApplicationRouter } from './app.router'

// Global App Pages
import { ApplicationBrokenLinkPage } from './pages/broken/broken.page'
import { ApplicationRootPage } from './pages/root/root.page'

// App Services & Pipes
import { NumericRangeFilter } from './pipes/range'

// App Components


// App Dialogs



// App Services
import { Lambda } from './services/lambda'


@NgModule
({
    declarations: 
    [
        ApplicationBrokenLinkPage,
        ApplicationRootPage,

        NumericRangeFilter
    ],
    imports: 
    [
        ApplicationRouter.load(),
        BidiModule,
        OverlayModule,
        RouterModule,
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        LayoutModule,
        MaterialModule,
        ReactiveFormsModule,
        DragDropModule
    ],
    exports:
    [
        MatTooltipModule
    ],
    providers: 
    [
        Lambda
    ],
    entryComponents:
    [
        
    ],
    bootstrap: [ ApplicationRootPage ]
})
export class AppModule { }
