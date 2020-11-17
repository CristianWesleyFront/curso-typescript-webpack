import $ from 'jquery';
import Livro from './model/livro';

const livro = new Livro('Dom Quixote', 108.00, 0.10)

$('body').append(`<h1>${livro.nome}</h1>`)
$('body').append(`
  <h2>Preço: R$${livro.precoComDesconto()}</h2>
`)