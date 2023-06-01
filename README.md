
## 🥋 Getting Started with Kata-Academy 🥋

First, run the development server:
```bash
npm install
# then
npm run dev
```



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Home Page ##

### Descrição ###
O objetivo da função Home é renderizar a página principal do site, que inclui uma chamada para os componentes Commentaries e Middle.

### Flow ###
- A função primeiro chama o hook useGoogleAuth para verificar se o usuário está logado.
- Se o usuário estiver logado, a função redireciona para a página do painel de controle.
- Em seguida, a função renderiza o conteúdo principal da página, incluindo o texto "tatame digital", uma descrição da plataforma e um link para saber mais.
- A função também chama os componentes Commentaries e Middle para renderizar as avaliações e a seção de vídeos, respectivamente.
