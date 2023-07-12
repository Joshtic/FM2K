import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DocumentosComponent } from './components/configuracion/documentos/documentos.component';
import { EmpleadosComponent } from './components/configuracion/empleados/empleados.component';
import { RuteoComponent } from './components/configuracion/ruteo/ruteo.component';
import { AplicacionesComponent } from './components/seguridad/aplicaciones/aplicaciones.component';
import { FuncionesComponent } from './components/seguridad/funciones/funciones.component';
import { TransaccionesComponent } from './components/seguridad/transacciones/transacciones.component';
import { UsuariosComponent } from './components/seguridad/usuarios/usuarios.component';
import { RolesComponent } from './components/seguridad/roles/roles.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { FormsModule } from '@angular/forms';
import { SolicotiComponent } from './components/procesos/solicoti/solicoti.component';
import { SoliocComponent } from './components/procesos/solioc/solioc.component';
import { SolipagoComponent } from './components/procesos/solipago/solipago.component';
import { MainSeguridadComponent } from './components/seguridad/main-seguridad.component';
import { MainConfiguracionComponent } from './components/configuracion/main-configuracion.component';
import { MenuComponent } from './components/templates/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DocumentosComponent,
    EmpleadosComponent,
    RuteoComponent,
    AplicacionesComponent,
    FuncionesComponent,
    TransaccionesComponent,
    UsuariosComponent,
    RolesComponent,
    LoginComponent,
    MainComponent,
    SolicotiComponent,
    SoliocComponent,
    SolipagoComponent,
    MainSeguridadComponent,
    MainConfiguracionComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

@Injectable()
export class TuServicio {
  private apiUrl = 'https://localhost:7086/swagger/index.html'; // Ajusta la URL de la API según tu configuración

  constructor(private http: HttpClient) { }

  guardarSolicitud(solicitud: any) {
    return this.http.post(this.apiUrl, solicitud);
  }
}