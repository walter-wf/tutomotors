import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <nav class="navbar background">
        <ul class="nav-list">
          <div class="logo">
            <img src="/images/Logo.JPG" />
          </div>
          <li>
            <a href="#servicios">Servicios</a>
          </li>
          <li>
            <a href="#consejos">Consejos</a>
          </li>
          <li>
            <a href="#ubicacion">Ubicacion</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>

        <div class="rightNav">
          <input type="text" name="search" id="search" />
          <button class="btn btn-sm">Search</button>
        </div>
      </nav>

      <section class="section">
        <div class="box-main">
          <div class="firstHalf">
            <h1 class="text-big">Fotos con carrousel</h1>
            <p class="text-small">
              Agregar aca boton de WhatsApp "Pedir Turno"
            </p>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="box-main">
          <div class="secondHalf">
            <h1 class="text-big" id="tiendaonline">
              Tienda Online
            </h1>
            <p class="text-small">
              Agregar fotos de productos
              <input type="button" value="Pedir Turno"></input>
            </p>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="box-main">
          <div class="servicios">
            <h1 class="text-big" id="servicios">
              Servicios
            </h1>
            <p class="text-small">
              Servicios en el taller, agregar descripcion
              <li>
                <a href="#Foto1 ejemplo">foto1ejemplo</a>
              </li>
              <li>
                <a href="#Foto2 ejemplo">foto2ejemplo</a>
              </li>
              <li>
                <a href="#Foto2 ejemplo">foto2ejemplo</a>
              </li>
              <li>
                <a href="#Foto3 ejemplo">foto3ejemplo</a>
              </li>
              <li>
                <a href="#Foto4 ejemplo">foto4ejemplo</a>
              </li>
              <input type="button" value="Pedir Turno"></input>
            </p>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="box-main">
          <div class="secondHalf">
            <h1 class="text-big" id="consejos">
              Consejos para el carro
            </h1>
            <p class="text-small">
              Breve descripcion.
              <li>
                <a href="#Foto1 ejemplo">foto1ejemplo</a>
              </li>
              <li>
                <a href="#Foto2 ejemplo">foto2ejemplo</a>
              </li>
              <li>
                <a href="#Foto2 ejemplo">foto2ejemplo</a>
              </li>
              <li>
                <a href="#Foto3 ejemplo">foto3ejemplo</a>
              </li>
              <li>
                <a href="#Foto4 ejemplo">foto4ejemplo</a>
              </li>
              <input type="button" value="Pedir Turno"></input>
            </p>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="box-main">
          <div class="secondHalf">
            <h1 class="text-big" id="ubicacion">
              Ubicacion
            </h1>
            <p class="text-small">
              <li>
                <a href="#Foto4 ejemplo">Horarios de Atencion</a>
              </li>
              <li>
                <a href="#Foto4 ejemplo">Direccion</a>
              </li>
              <li>
                <a href="#Foto4 ejemplo">Mapa</a>
              </li>
              <input type="button" value="Pedir Turno"></input>
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p className="text-footer">Copyright ©-All rights are reserved</p>
      </footer>
    </div>
  );
}

export default App;
