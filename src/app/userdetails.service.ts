import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  SharingData = new Subject();  
  constructor() { }  
}
