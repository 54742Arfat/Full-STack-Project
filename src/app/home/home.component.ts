import { Component  } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { YService } from '../y.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(private serv : YService){}
d:any
weatherData:any
  show(inp:any){
    this.d = inp
    this.serv.ongetData(inp).subscribe((data)=>{
      console.log(data)      
      this.weatherData=data
    })
  }
}
