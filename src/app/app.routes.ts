import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { RegistroActividadesComponent } from './pagina/registro-actividades/registro-actividades.component';
import { RegistroClientesComponent } from './pagina/registro-clientes/registro-clientes.component';
import { SubirDocumentoComponent } from './pagina/subir-documento/subir-documento.component';

const routes: Routes = [
{ path: "", component: InicioComponent },
{ path: "login", component: LoginComponent },
{ path: "registro", component: RegistroComponent },
{ path: "registro actividades", component: RegistroActividadesComponent},
{ path: "registro clientes", component: RegistroClientesComponent},
{ path: "subir documentos", component: SubirDocumentoComponent},
{ path: "**", pathMatch: "full", redirectTo: "" }
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }