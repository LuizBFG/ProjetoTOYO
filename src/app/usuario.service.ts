import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


type Usuario = {
  Nome: string,
  sobrenome: string,
  email: string,
  senha:string,
  id:number
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

create(){}
  constructor(private storage: Storage) {
this.loadFromStorage();

   }
public usuarios: Usuario[]=[];

private async loadFromStorage() {
  const storedUsers = await this.storage.get('usuarios');
  if (storedUsers) {
    this.usuarios.push(storedUsers);
  }
}

public allUsers(): Readonly<Usuario>[] { 
  return this.usuarios; 
}

public getUser(Nome: string): Usuario { 



  return this.usuarios.find((s) => s.Nome === Nome); 
} 


public addUser(user : Usuario) {
  const maxId = Math.max(0, ...this.usuarios.map(s => s.id));
  user.id = maxId + 1;
  this.usuarios.push({ ...user});

this.storage.set('usuarios', this.usuarios);
}

public updateUser(user :Usuario, nome: string) { 
  const oldUser = this.usuarios.find((s) => s.Nome === nome);
  oldUser.Nome = user.Nome;
  oldUser.sobrenome = user.sobrenome;
  oldUser.email = user.email;
  oldUser.senha = user.senha;
   

  this.storage.set("usuarios", this.usuarios);
} 


}
