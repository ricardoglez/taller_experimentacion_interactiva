import React from 'react';
// import { Navbar } from 'react-bulma-components';
// import 'react-bulma-components/dist/react-bulma-components.min.css' ;
import Helmet from 'react-helmet';
import docs from '../../assets/documentacion/documentacion-descripcion-escrita.svg'

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mounted: false,
    }
  }
  render(){
    return (
      <div>
      <Helmet
         title="Taller Experimentacion interactiva."
         meta={[
           { charSet: 'utf-8' },
           { name: 'description', content: 'Taller experimentacion Interactiva' },
           { name: 'viewport', content: 'width=device-with, initial-scale=1' },
           { name: 'keywords', content: 'taller, experimentacion,interactiva,arte,mexico' },
         ]}
         link={[
           {'rel':'stylesheet', 'href': 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.0/css/bulma.min.css'}
         ]}
         script={[
           { defer:'true', 'src': 'https://use.fontawesome.com/releases/v5.0.7/js/all.js'},
         ]}
       />
      <div class='container'>
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            MCPC
          </div>
        </nav>
        <div class='section'>
          <div class='container '>
              <section class="introduction hero">
              <div class="hero-body">
                <div class="container">
                  <h1 class="title">
                    Taller de experimentación interactiva.
                  </h1>
                  <h2 class="subtitle">
                    Puedes explorar cada una de las diferentes secciones que se explorarán en el taller.
                  </h2>
                </div>
              </div>
            </section>
            <div class='columns'>
              <div class='column'>
                Documentación
                <figure class="image is-128x128">
                  <img src="" />
                </figure>
              </div>
              <div class='column'>
                Contexto
              </div>
              <div class='column'>
                Concepto
              </div>
              <div class='column'>
                Interacción
              </div>
              <div class='column'>
                Documentación
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
    )
  }
}

export default Home;
