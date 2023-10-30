import { ReactElement } from 'react';

function Guide(): ReactElement {
  return (
    <div className="mx-auto w-full lg:w-[826px] h-fit p-7 lg:py-16 lg:px-20 rounded-lg flex flex-col justify-center items-center gap-5 lg:gap-8 bg-b-dark">
      <h1 className="mt-0 text-lg lg:text-xl text-center font-[500] lg:font-[700] text-t-dark">
        Guia inicial para obter uma chave da OpenAI
      </h1>
      <ol className="list-decimal flex flex-col gap-4">
        <li className="ml-4 text-t-light">
          <div className="text-sm lg:text-lg">
            Realize um cadastro: Acesse o site da
            <a
              className="ml-1 text-blue-400 font-[700] hover:brightness-[.7]"
              href="https://www.openai.com/"
              target="_blank"
              rel="noreferrer"
            >
              OpenAI
            </a>
            ;
          </div>
        </li>
        <li className="ml-4 text-t-light text-sm lg:text-lg">
          Acesse o Painel de API: Dentro do painel vá até o seu avatar e clique
          em
          {' '}
          <strong>View API keys</strong>
          ;
        </li>
        <li className="ml-4 text-t-light text-sm lg:text-lg">
          Crie uma nova chave: Ao clicar no botão de
          {' '}
          <strong>+ Create new secret key</strong>
          {' '}
          adicione um apelido para a
          chave e um novo código será gerado;
        </li>
        <li className="ml-4 text-t-light text-sm lg:text-lg">
          Copie a chave gerada e cole abaixo; 👇
        </li>
      </ol>
    </div>
  );
}

export default Guide;
