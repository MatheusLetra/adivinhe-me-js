# Adivinhe-me

**Adivinhe-me** é um jogo interativo de adivinhação de palavras em que os jogadores têm que adivinhar uma palavra aleatória de cinco letras. O jogo é baseado em um sistema de tentativas, onde os jogadores recebem feedback sobre a validade de suas escolhas.

## Funcionalidades

- **Jogo de Adivinhação:** Tente adivinhar a palavra correta com base no feedback de suas tentativas.
- **Feedback de Tentativas:** As letras corretas e suas posições são destacadas com cores diferentes.
- **Sequência de Palavras Corretas:** O jogo rastreia quantas palavras você acertou em sequência, armazenando essa informação no `localStorage`.
- **Teclado Virtual:** O jogo inclui um teclado virtual com letras que os jogadores podem usar para suas tentativas.

## Como Jogar

1. Ao abrir o jogo, uma palavra aleatória será sorteada.
2. Digite suas tentativas nos campos disponíveis.
3. Pressione `Enter` após preencher a última letra para validar sua tentativa.
4. As letras serão coloridas para indicar se estão corretas:
   - Verde: A letra está correta e na posição certa.
   - Amarelo: A letra está correta, mas na posição errada.
   - Vermelho: A letra não está na palavra.
5. Continue tentando até adivinhar a palavra ou esgotar suas tentativas.

## Instalação

Para executar o projeto localmente:

1. Clone o repositório:
   ```bash
   git clone https://github.com/MatheusLetra/adivinhe-me-js.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd adivinhe-me-js
   ```
3. Abra o arquivo `index.html` em um navegador da sua escolha.

## Tecnologias Usadas

- HTML
- CSS
- JavaScript

## Link de Produção

O jogo está disponível online em: [Adivinhe-me](https://matheusletra.github.io/adivinhe-me-js/)

Projeto inspirado no tradicional jogo [Wordle](https://www.nytimes.com/games/wordle/index.html)

## Contribuições

Sinta-se à vontade para contribuir para o projeto. Sugestões, melhorias e correções de bugs são bem-vindas!