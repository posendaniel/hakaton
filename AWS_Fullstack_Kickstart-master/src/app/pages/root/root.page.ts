import { Component } from '@angular/core'
import { Lambda } from '../../services/lambda'

@Component
({
    selector: 'app-root',
    templateUrl: './root.page.html',
    styleUrls: [ './root.page.scss' ]
})

export class ApplicationRootPage
{
    constructor(private lambda: Lambda) 
    {
        this.dbResults = []

        // define you aws REST api gateway address (after deploying your api)
        this.lambda.url('')
    }

    public readonly dbResults: Array<any>

    // deploy echo function (code located under `lambda/echo` folder)
    ping()
    {
        this.lambda.run('ping').then(item => this.dbResults.push(item))
    }

    click_button()
    {
        //
        // TO DO //
        //
    }
}


