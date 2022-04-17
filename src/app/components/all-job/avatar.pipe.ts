import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avatar',
})
export class AvatarPipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase().substring(0, 1);
  }
}
