import { Component, ViewChild } from '@angular/core';
import { NgxWheelComponent, TextAlignment, TextOrientation } from 'ngx-wheel'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  @ViewChild(NgxWheelComponent, { static: false }) wheel;

  seed = [...Array(6).keys()]
  idToLandOn: any;
  items: any[];
  textOrientation: TextOrientation = TextOrientation.HORIZONTAL
  textAlignment: TextAlignment = TextAlignment.OUTER

  ngOnInit(){
    this.idToLandOn = Math.floor(Math.random() * this.seed.length);
    const colors = ['#FF0000', '#660660']
    const des = ['العهد الجديد', 'المختلف','اول من ','العهد القديم', 'قديسين','صح او خطا ']
    this.items = this.seed.map((value) => ({
      fillStyle: colors[value % 2],
      text: des[value],
      id: value,
      textFillStyle: 'white',
      textFontSize: '16'
    }))


  }
  reset() {
    this.wheel.reset()
  }
  before() {

//     alert('Your wheel is about to spin')
  }

  async spin(prize) {
    this.idToLandOn = prize
    await new Promise(resolve => setTimeout(resolve, 0));
    this.wheel.spin()
  }

  after() {

//     alert('You have been bamboozled')
  }

  random() {
    this.reset()
    this.idToLandOn = Math.floor(Math.random() * 8) +1;
    this.wheel.spin()
    // this.wheel.spin(Math.floor((Math.random() * this.seed.length) + 1))
  }
  data = [
    {
      list: ['sun', 'earth', 'moon']
    }
  ]

  change ({ gIndex, iIndex }) {
    console.log(gIndex, iIndex)
  }
}
