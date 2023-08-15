
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

## Golpe Page ##
A função Golpe é um componente React que exibe informações sobre um movimento específico de artes marciais. Ela busca os detalhes do movimento de uma API e os renderiza na página, juntamente com vídeos relacionados. A função também inclui um menu de navegação na barra lateral.

### Exemplo de uso ###
```javascript
<Golpe params={{ golpe: "karate-chop" }} />
```

### Flow ###
- A função primeiramente chama a função getGolpe, passando o caminho URL do golpe, para buscar os detalhes do movimento na API. Ela também chama a função getRandomGolpes para buscar uma lista de movimentos relacionados aleatórios.
- Se os detalhes do golpe forem obtidos com sucesso, a função renderiza um layout com uma barra lateral e uma área de conteúdo principal. A barra lateral contém links de navegação para diferentes seções da aplicação. A área de conteúdo principal exibe os detalhes do golpe selecionado, incluindo seu nome, um vídeo do movimento, uma descrição e detalhes adicionais.
- A função também renderiza uma lista de movimentos relacionados, obtidos a partir do array vejaMais. Cada movimento relacionado é exibido como um componente CardVideo, que inclui o nome do movimento e um link para ver mais detalhes.
- Em resumo, a função Golpe fornece uma interface de usuário para visualizar e explorar movimentos de artes marciais, buscando dados de uma API e os renderizando de maneira estruturada e visualmente atraente.

