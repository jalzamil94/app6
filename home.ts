export class HomePage {
  constructor() {}
  openPage(site:string){
  console.log('this site'+site)
}

}


import { CommonModule, NgForOf } from '@angular/common';


export class HomePage {
names=[
  { name:'Mohammed'},
    { name:'Mohammed al '}

]
Sliding: IonItemSliding | undefined;
  constructor() {}
  call(sliding:IonItemSliding){
    console.log('call me please')
    sliding.close();
  }
}
