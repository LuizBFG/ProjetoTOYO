import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  public Usuario = {
    Nome: '',
    sobrenome:'',
    email:'',
    senha:'',
    id:0
  };


  constructor(private router: Router, route: ActivatedRoute, private usuarioService: UsuarioService,
    private navCtrl: NavController) { }

  ngOnInit() { }


  LogIn(){ 
    this.router.navigate(['/home']);
  }
  onClick() {
    this.usuarioService.addUser(this.Usuario);
  }
}
