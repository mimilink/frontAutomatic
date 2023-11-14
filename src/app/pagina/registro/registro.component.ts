import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioDTO } from '../../modelo/usuario-dto';
import { Console } from 'console';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
  
})
export class RegistroComponent {

  usuario:UsuarioDTO;
constructor(){
  this.usuario = new UsuarioDTO();
}

public registrar(){
  console.log(this.usuario);
  
}

}

