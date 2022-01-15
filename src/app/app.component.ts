/* https://github.com/lindell/JsBarcode/wiki */

import { Component, OnInit } from '@angular/core';
import JsBarcode /* , { Options as jsBarcodeOptions } */ from 'jsbarcode';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  px2mmFactor: number;

  ngOnInit() {
    this.px2mmFactor = this.calcPx2MmFactor();

    let data: string = '230220119012';

    JsBarcode('#barcode', data, {
      format: 'code128', // default
      height: 10 * this.px2mmFactor, // 10mm
      width: 2.3,
      // displayValue: false,
      text: '-' + data + '-',
      background: 'rgba(0,0,0,0.1)',
      font: 'monospace',
      fontOptions: 'bold',
      fontSize: 16,
      lineColor: 'darkblue',
      margin: 5 * this.px2mmFactor, // 5mm
      textMargin: 2 * this.px2mmFactor, // 2mm
      // textAlign: 'right',
      // textPosition: 'top',
    });
  }

  private calcPx2MmFactor() {
    let e = document.createElement('div');
    e.style.position = 'absolute';
    e.style.width = '100mm';
    document.body.appendChild(e);
    let rect = e.getBoundingClientRect();
    document.body.removeChild(e);
    return rect.width / 100;
  }
}
