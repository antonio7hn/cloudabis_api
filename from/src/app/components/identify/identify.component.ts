import { Component, OnInit } from '@angular/core';
import { HuellasService } from 'src/app/services/huellas.service';

@Component({
  selector: 'app-identify',
  templateUrl: './identify.component.html',
  styleUrls: ['./identify.component.css']
})
export class IdentifyComponent implements OnInit {

  constructor(private huella:HuellasService) { }

  ngOnInit(): void {
    this.huella.iniciar()
  }

  onTemplate(tem){
    // console.log(tem)
    this.huella.identify(tem)
  }

}
