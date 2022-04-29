import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descriptionShortener'
})
export class DescriptionShortenerPipe implements PipeTransform {

  transform(value: string, wordCount: number): string {
    return value.split(" ").slice(0,wordCount).join(" ");
  }

}

// .split("")  -  tykeldab stringi alamstringide massiiviks
// .slice()  -  teeb yhest massiivist lyhema teise massiivi
// .join("")  -  teeb massiivist tagasi stringi

// Elas metsas mutionu, keset kuuski

// split(" ")
// ["Elas", "metsas", "mutionu,", "keset", "kuuski" ]

// slice(0,3)  esimene nr kaasarvatud, teine mitte
// ["Elas", "metsas", "mutionu,"]

// join(" ")
// Elas metsas mutionu,
