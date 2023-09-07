import React from 'react';
import ReactDOM from 'react-dom/client';
import { v4 as uuidv4 } from 'uuid';

const quotes = [
  "Educação não transforma o mundo. Educação muda as pessoas. Pessoas transformam o mundo.",
  "Ensinar não é transferir conhecimento, mas criar as possibilidades para a sua própria produção ou a sua construção.",
  "Se a educação sozinha não transforma a sociedade, sem ela tampouco a sociedade muda.",
  "Ninguém educa ninguém, ninguém educa a si mesmo, os homens se educam entre si, mediatizados pelo mundo.",
  "A leitura do mundo precede a leitura da palavra.",
  "Se a educação sozinha não pode transformar a sociedade, tampouco sem ela a sociedade muda.",
  "A educação é um ato de amor, por isso, um ato de coragem.",
  "A escola não é a fábrica do conhecimento, mas a fábrica de aprender a pensar.",
  "O diálogo é uma das mais extraordinárias formas de produção do conhecimento.",
  "A verdadeira educação é aquela que se preocupa com a transformação do mundo."
];

const Quote = ({ value }) => (
  <h2 style={{ color: 'green', marginTop: 30, fontFamily: 'Arial' }}>
    <span>• "{value}"</span>
  </h2>
);

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <div>
        {quotes.map(quote => <Quote value={quote} key={uuidv4()} />)}
      </div>
    </React.StrictMode>
  );

