import { Component, OnInit } from '@angular/core';
import { Address } from '../../model/Address';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  private name: string;
  private email: string;
  private address: Address;
  private hobbies: string[];
  private showHobbies: boolean;
  private showEdit: boolean;

  /* Chama o meu service */
  constructor() { 
    console.log('constructor()');
  }

  /* Iniciado apos o carregamento da aplicacao, apos o construtor */
  ngOnInit() {
    console.log('ngOnInit()');
    this.name = "Bruno Felix";
    this.email = "bruno.felix10@hotmail.com";
    this.address = {
      street: "Comerciante José Formiga de Assis",
      city: "João Pessoa",
      state: "Paraíba"
    }
    this.hobbies = ['Music', 'Games', 'Movies', 'eSports'];
    this.showHobbies = false;
    this.showEdit = false;
  }

  /* Exibe e esconde os hobbies */  
  public toggleHobbies(){
    if(this.showHobbies == true){
      this.showHobbies = false;
    }else{
      this.showHobbies = true;
    }
  }

  /* Exibe e esconde o formulário */ 
  public toggleEditUser(){
    if(this.showEdit == true){
      this.showEdit = false;
    }else{
      this.showEdit = true;
    }
  }

  /* Adiciona um hobby na lista */
  public addHobby(hobby: string){
    this.hobbies.push(hobby);
  }

  /* Deleta um hobby na lista */
  public deleteHobby(i: number){
    this.hobbies.splice(i, 1);
  }

}
