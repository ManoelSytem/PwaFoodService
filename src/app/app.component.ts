import { Serializer } from '@angular/compiler';
import { Component } from '@angular/core';
import { Service } from './service/AppService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pwaFoodService';
  tokenUsuario: any;


constructor( public  AppService: Service){
}

// ngOnInit(){
//   this.GerarToken();
// }

GerarToken(){
  this.AppService.GerarToken().toPromise().then((res) => {
    debugger   
    this.tokenUsuario = res;
  })

}

}


