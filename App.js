import pagos from './';
import './App.css';
import { useState } from 'react';


function Pagos() {
  return (
    <>
      <div className="body_pay">
        <h1>Realiza aqui tus pagos seguros</h1>
        <p>En el apartado de abajo ingresaras los datos de tu tarjeta para
          realizar el pago, receurda que los datos proporcionados estan protegidos. </p>

        <div className="cards">
          <img src="visa_marter.png" alt="crd" />

        </div>

        <div className="escudo_pay">

          <img src="PACHUCA.png" alt="PACHUCA" />
        </div>

        <div className="numbers">
          <h5>Numero de tarjeta:</h5>
          <input className="card" type="text" size="20" /> <br />
          <br />

          <h5>Fecha de vencimiento:</h5>
          mm<input className="date_card" type="text" size="5" />
          aa<input className="date_card" type="text" size="5" />
          <br />
          <br />
          <h5>CVV:</h5>
          <input className="date_card" type="password" name="contraseña" size="5" />
          <br />
          <button>Confirmar</button>
        </div>
        <a href="/">VOLVER A PAGINA PRINCIPAL</a>

      </div>

    </>
  )
}

function Homepage() {
  return (

    <div className="header_1">


      <header className="header">
        <nav className="bar_menu">
          <img className="mini_logo" src="PACHUCA.png" alt='NO' />

          <h2 className="logo"> PACHUCA SAN MARCOS</h2>
          <ul className="menu">
            <li><a href="">GALERIA</a></li>
            <li><a href="">COSTOS</a></li>
            <li><a href="">UNIFORMES</a></li>
            <li><a href='/pagos' >PAGOS</a></li>
          </ul>
        </nav>

      </header>
      <div className="escudo">
        <img src="PACHUCA.png" alt="PACHUCA" />

        <h1>"CEFOR PACHUCA SAN MARCOS"</h1>

      </div>


      <p>Somos una escuela de futbol, donde tenemos el compromiso
        de fomentar los valores mas valiosos, como la honestidad,
        el trabajo en equipo, la lealtad, el compromiso,
        la disciplina entre muchos mas, nuestro objetivo es claro
        formar personas de bien y de la mano formar jugadores con futuro
      </p>

      <p>En esta pagina podras encontrar toda nuestra informacion relevante
        de nuestra escuela como categorias, costos, uniformes, torneos, galeria
        entre muchas otras cosas mas.
        <br /> Asi mismo podras conocer a cada uno de nuestros jugadores
        que integran esta gran escuela, contamos tanto con jugadores
        como con jugadoras. Podras ver la seccion de niñas donde encontraras
        galerias de jugadoras, uniformes y mucho mas.

        <br /> Al fondo de esta pagina podras encontrar todos los medios
        de contacto que tenemos para que con un solo clic nos digas
        en que te podemos ayudar y con mucho gusto te atenderemos
      </p>

      <img className="team" src="pachuca.jpg" />

      <p>Contamos con profesores altamente capacitados, licenciados en cultura
        fisica y deportes, asi como nutriologos especialistas en el deporte,
        administradores que nos ayudan a cabo para ser de los mejores centros
        de formacion de la zona
      </p>

      <p> Participamos en las mejores ligas de futbol , tanto de la zona como
        del estado, dandole oportunidad a todos nuestros jugadores de formarse
        dentro de un proceso el cual es necesario para llegar a formar parte
        de fuerzas bascas de un club profesional </p>

      <p>Nuesto centro de formacion Pachuca San Marcos se compromete con cada
        jugador a llevarlo a realizar periodicamente visorias para formar parte de
        las feurzas basicas de algun club profesional con vision a ascender al futbol profesional
        de primera division del futbol mexicano</p>

      <p> Es importante que nos des tu punto de vista, tus recomendacions
        y que te gustaria quese implemetara en este centro para tu mayor confianza
        y comodidad, de esta maneratratamos de mejorar dia con dia, para ser
        tu mejor eleccion, recuerda que nuestro lema es formar personas de bien
        antes de formar futbolistas </p>
      <img className="team1" src="pachuca.jpg" />
      <p> Recuerdda que contamos con nuestros pagos seguros, es una seccion
        en la cual tu podras ingresar tus datos como, numero de tarjeta bancaria
        con la seguridad de que esos datos estaran protegidos y jamas seran
        revelados o vendidos a terceras personas, por eso es importante
        que siempre revises que tu pago hayasido registrado de una manera exitos
        y asi evitar cualquier inconveniente, nuestro sistema noguarda ninguna
        informacion de tus datos personales, para brindarte la mayor seguridad
        que te puedas imaginar.</p>


      <p className="comentarios">DEJANOS SABER TUS COMENTARIOS AQUI ABAJO:</p>
      <textarea name="comentarios" class="coments_box"> </textarea>

      <button>ENVIAR</button>






    </div>



  );
}

function App() {
  const [currentPath, setCurrenthPath] = useState(window.location.pathname)
  return (
    <main>
      {currentPath == '/' && <Homepage />}
      {currentPath == '/pagos' && <Pagos />}

    </main>

  )
}


export default App;
