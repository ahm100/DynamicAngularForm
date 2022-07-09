import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'myJson', pure: false})
export class JsonPipe implements PipeTransform {
  /**
   * @param value A value of any type to convert into a JSON-format string.
   */
  transform(value: any): string {
    return JSON.stringify(value, null, 4);
  }
}