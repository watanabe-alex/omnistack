/**
 * npm install intl
 * pra funcionar no android (o R$ antes do valor) parece que precisa disso
 * mas eu não consegui fazer funcionar aqui
 */
// import 'intl';
// import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import Routes from './src/routes';

/**
 * Não tem as mesmas tags do HTML
 * E aqui não tem semântica
 */

/**
 * A estilização é style que recebe com objeto de estilização
 * Todos elementos já vem com display flex
 * 
 * Não existe herança de estilos, não dá pra mudar a cor de um texto
 * configurando o style do pai
 */

export default function App() {
  return (
    <Routes />
  );
}



