import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  defaultImageURL = '../assets/no-image.png';

  constructor(private http: HttpClient) {}

  transform(imageURL: string): any {
    return imageURL;
  }

}
