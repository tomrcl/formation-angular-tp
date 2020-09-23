import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uneLettreSurDeuxMaj'
})
export class UneLettreSurDeuxMajPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return [...value].map((letter, index) => index % 2 === 0 ? letter.toUpperCase() : letter).join('');
  }

}
