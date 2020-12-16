import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class Lambda
{
    constructor(private http: HttpClient) {}

    private lambdaUrl: string

    get valid() : boolean { return this.lambdaUrl ? true : false }

    url(address: string)
    {
        this.lambdaUrl = address
    }

    async run(action: string, payload: any = {}) : Promise<any>
    {
        return this.http.post(this.lambdaUrl, { action, payload }).toPromise().then((result: any) =>
        {
            const data = result.body || {}

            return data instanceof Object ? data : JSON.parse(data)
        })
    }
}