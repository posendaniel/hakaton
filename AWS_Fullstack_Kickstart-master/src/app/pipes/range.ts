import { Pipe, PipeTransform } from '@angular/core'

@Pipe
({
    name: 'numericRangeFilter'
})
export class NumericRangeFilter implements PipeTransform 
{
    transform(options: Array<any>, range: { from: number, to: number }): any 
    {
        if (!range) range = { from: null, to: null }
        if (isNaN(range.from)) range.from = -Infinity
        if (isNaN(range.to)) range.to = Infinity  

        return options.filter(option => option.value >= range.from && option.value <= range.to)
    }
}