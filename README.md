# ❤️ Projeto Love

<img width="1092" height="477" alt="image" src="https://github.com/user-attachments/assets/9ba25e5c-6d58-45e2-89da-5aa5a5a0e4bd" />

## Acesse o projeto

| Plataforma | Link |
| --- | --- |
| Site | [https://projeto-lovee.netlify.app/](https://projeto-lovee.netlify.app/) |
| GitHub | [github.com/IBrunooDev](https://github.com/IBrunooDev) |
| LinkedIn | [linkedin.com/in/brunocarus](https://www.linkedin.com/in/brunocarus/) |
| Instagram | [instagram.com/ibrunoodev](https://www.instagram.com/ibrunoodev/) |

> Uma experiência web romântica, interativa e responsiva, desenvolvida
> com HTML5, CSS3 e JavaScript puro.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsivo](https://img.shields.io/badge/Responsivo-✓-2ea44f?style=for-the-badge)

------------------------------------------------------------------------

## 💌 Sobre

O **Projeto Love** é um site criado para transformar uma mensagem
especial em uma experiência interativa.

A navegação acontece em etapas: primeiro uma tela de boas-vindas, depois
uma pergunta com interação entre os botões e, por fim, uma página
personalizada com história, imagens, animações e playlist.

O projeto foi construído sem frameworks e sem processo de build,
deixando o código simples de entender, editar e publicar.

------------------------------------------------------------------------

## ✨ Funcionalidades

-   🏠 Tela inicial de boas-vindas.
-   ❤️ Pergunta interativa com os botões **Sim** e **Não**.
-   🖱️ Botão **Não** se movimenta ao tentar interagir.
-   📖 Página dedicada à história e aos momentos especiais.
-   🖼️ Imagens personalizáveis.
-   ✨ Animações acionadas durante a rolagem.
-   🎵 Player de música integrado.
-   ⏭️ Avanço manual para a próxima faixa.
-   🔁 Avanço automático quando uma música termina.
-   📱 Layout responsivo para celular, tablet e desktop.
-   ♿ Suporte a `prefers-reduced-motion`.
-   🎯 HTML semântico e elementos com atributos de acessibilidade.
-   🚫 Nenhuma dependência de Node.js ou framework para executar.

------------------------------------------------------------------------

## 🛠️ Tecnologias

  Tecnologia                 Utilização
  -------------------------- ---------------------------------------------
  **HTML5**                  Estrutura das páginas e conteúdo
  **CSS3**                   Layout, responsividade, efeitos e animações
  **JavaScript**             Interações, navegação e player
  **IntersectionObserver**   Animações durante a rolagem
  **HTML5 Audio**            Reprodução da playlist
  **Google Fonts**           Tipografia das páginas

------------------------------------------------------------------------

## 📁 Estrutura

``` text
Projeto Love/
│
├── index.html
├── style.css
├── README.md
│
├── Primeira Tela/
│   ├── index.html
│   │
│   └── src/
│       ├── css/
│       │   └── style.css
│       ├── img/
│       │   ├── fundo.jpg
│       │   └── icon.png
│       └── js/
│           └── script.js
│
└── Segunda tela/
    ├── index.html
    │
    └── src/
        ├── audio/
        │   ├── Hungria - Amor e Fé.mp3
        │   ├── Henrique e Juliano - Carta Aberta.mp3
        │   ├── Teto - MULHER SECRETA.mp3
        │   ├── Caio Luccas - Close Friends.mp3
        │   └── Djonga - Da Lua.mp3
        │
        ├── css/
        │   ├── style.css
        │   ├── musica.css
        │   └── animate-on-scroll.css
        │
        ├── img/
        │   ├── capa.png
        │   ├── icon.png
        │   ├── momento-1.png
        │   ├── momento-2.png
        │   └── momento-3.png
        │
        └── js/
            ├── script.js
            └── animate-on-scroll.js
```

------------------------------------------------------------------------

## 🚀 Como executar

### Opção 1 --- Abrir diretamente

1.  Extraia o projeto.
2.  Abra a pasta.
3.  Abra o arquivo `index.html` no navegador.

### Opção 2 --- VS Code + Live Server

Para desenvolvimento, é recomendado usar um servidor local.

1.  Abra o projeto no **Visual Studio Code**.
2.  Instale a extensão **Live Server**.
3.  Abra o `index.html`.
4.  Clique com o botão direito.
5.  Selecione **Open with Live Server**.

> O projeto não precisa de `npm install`, Node.js ou comandos de build.

------------------------------------------------------------------------

## 🧭 Fluxo do projeto

``` text
┌────────────────────────┐
│      Tela inicial      │
│    "Olá, bem-vindo!"   │
└────────────┬───────────┘
             │
             ▼
┌────────────────────────┐
│      Primeira Tela     │
│                        │
│  Pergunta interativa   │
└────────────┬───────────┘
             │
        ┌────┴────┐
        │         │
       NÃO       SIM
        │         │
        │         ▼
        │   ┌─────────────────────┐
        │   │    Segunda tela     │
        │   │                     │
        │   │ História + Fotos    │
        │   │ Animações + Música  │
        │   └─────────────────────┘
        │
        └──► Botão se movimenta
```

------------------------------------------------------------------------

## 🎨 Personalização

### 1. Tela inicial

Edite:

``` text
index.html
style.css
```

Você pode alterar a mensagem, descrição e aparência da primeira tela.

### 2. Pergunta

Edite:

``` text
Primeira Tela/index.html
```

É possível trocar o título, textos e conteúdo dos botões.

### 3. Botão "Não"

A lógica do botão está em:

``` text
Primeira Tela/src/js/script.js
```

O script calcula uma nova posição e mantém o botão dentro da área
principal.

### 4. Fotos

Substitua as imagens:

``` text
Segunda tela/src/img/capa.png
Segunda tela/src/img/momento-1.png
Segunda tela/src/img/momento-2.png
Segunda tela/src/img/momento-3.png
```

Se alterar os nomes dos arquivos, atualize os caminhos no
`Segunda tela/index.html`.

### 5. Textos

Edite:

``` text
Segunda tela/index.html
```

Cada seção possui título e parágrafos próprios para facilitar a
personalização.

------------------------------------------------------------------------

## 🎵 Playlist

A playlist está configurada em:

``` text
Segunda tela/src/js/script.js
```

Exemplo:

``` javascript
const playlist = [
  {
    title: 'Minha música',
    src: 'src/audio/minha-musica.mp3'
  }
];
```

Coloque o arquivo correspondente em:

``` text
Segunda tela/src/audio/
```

O player possui:

-   ▶️ Tocar
-   ⏸️ Pausar
-   ⏭️ Próxima
-   🔁 Avanço automático
-   🔢 Identificação da faixa atual
-   🛡️ Tratamento de arquivo de áudio ausente

### ⚠️ Direitos autorais

As músicas incluídas no projeto podem possuir direitos autorais. Antes
de publicar ou redistribuir o projeto, confirme que você possui
autorização para utilizar e distribuir os arquivos de áudio.

------------------------------------------------------------------------

## 📱 Responsividade

O layout possui regras específicas para diferentes tamanhos de tela:

-   📱 Smartphones
-   📲 Tablets
-   💻 Notebooks
-   🖥️ Desktops

Também existem ajustes para telas menores e suporte à preferência de
redução de movimento do sistema.

------------------------------------------------------------------------

## ♿ Acessibilidade

O projeto já utiliza alguns recursos para melhorar a experiência de
navegação:

-   `alt` nas imagens.
-   `aria-label` nos controles.
-   `aria-pressed` no botão do player.
-   `aria-live` para informar a faixa atual.
-   `:focus-visible` para navegação por teclado.
-   `prefers-reduced-motion` para reduzir animações.
-   Botões HTML reais para ações interativas.

------------------------------------------------------------------------

## 🌐 Publicação

Por ser um projeto estático, ele pode ser hospedado em serviços que
suportam HTML, CSS, JavaScript e arquivos estáticos.

Antes de publicar, verifique:

-   caminhos das imagens;
-   caminhos dos arquivos CSS e JavaScript;
-   caminhos das músicas;
-   links entre as páginas;
-   tamanho dos arquivos de áudio;
-   direitos de uso das imagens e músicas.

### GitHub Pages

Se o projeto for publicado dentro de um repositório com endereço
diferente da raiz do domínio, revise os caminhos que começam com `/`.

Por exemplo:

``` html
<a href="/Primeira Tela/index.html">
```

pode precisar ser convertido para um caminho relativo dependendo de onde
o site será hospedado.

------------------------------------------------------------------------

## 💡 Possíveis melhorias

-   [ ] Contador de tempo juntos.
-   [ ] Linha do tempo com datas.
-   [ ] Galeria de fotos.
-   [ ] Mais momentos e seções.
-   [ ] Transições entre páginas.
-   [ ] Controles para música anterior/próxima.
-   [ ] Modo automático de apresentação.
-   [ ] Página final com mensagem personalizada.
-   [ ] Metadados para compartilhamento em redes sociais.
-   [ ] Melhorias adicionais de acessibilidade.

------------------------------------------------------------------------



- ## Links

- [GitHub](https://github.com/IBrunooDev)
- [LinkedIn](https://www.linkedin.com/in/brunocarus/?originalSubdomain=br)
- [Instagram](https://www.instagram.com/IBrunooDev/)
---

Desenvolvido com :heart: por [IBrunooDev](https://github.com/IBrunooDev) 
© 2026 IBrunooDev. Todos os direitos reservados.
