import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'path';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: Date | string, dateFormat: string): string {
    if (!value) return '';
    const date = typeof value === 'string' ? new Date(value) : value;
    return format(date, dateFormat);
  }

}
