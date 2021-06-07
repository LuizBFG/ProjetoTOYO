import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.page.html',
  styleUrls: ['./endereco.page.scss'],
})
export class EnderecoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  LogIn(){ 
    this.router.navigate(['/home']);
  }
}
