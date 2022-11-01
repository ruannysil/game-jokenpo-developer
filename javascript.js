var playerName;
    var playerPoints = 0;
    var jogadorEscolha = 0;

    var computerChoose = 0;
    var computerPoints = 0;

    // Gera números randomicos.
    // 1 - Pedra
    // 2 - Papel
    // 3 - Tesoura
    function draw(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Traduz o número em frase.
    // 1 - Pedra
    // 2 - Papel
    // 3 - Tesoura
    function translateChoose(number) {
      if(number == 1) {
        return 'Pedra';
      }
      else if(number == 2) {
        return 'Papel';
      }
      else if(number == 3) {
        return 'Tesoura';
      }
    }

    // Adiciona a classe selecionado.
    function select(type, choice) {
      document.getElementById(type + '-escolha-' + choice).classList.add('selected');
    }

    // Remove a classe selecionado.
    function deselect(type, choice) {
      document.getElementById(type + '-escolha-' + choice).classList.remove('selected');
    }

    // Escreve na tela uma mensagem.
    function message(text){
      document.getElementById('message').innerHTML = text;
    }

    // Escreve no placar o nome do jogador.
    function definirJogadorNome(name) {
      document.getElementById('player-name').innerHTML = name;
    }

    // Calcula e retorna quem ganhou.
    // 0 - Empate
    // 1 - Jogador
    // 2 - Computador
    function calculateChoose(player, computer) {
      if (player == 1 && computer == 1) {
        return 0;
      }
      else if (player == 1 && computer == 2) {
        return 2;
      }
      else if (player == 1 && computer == 3) {
        return 1;
      }
      else if (player == 2 && computer == 1) {
        return 1;
      }
      else if (player == 2 && computer == 2) {
        return 0;
      }
      else if (player == 2 && computer == 3) {
        return 2;
      }
      else if (player == 3 && computer == 1) {
        return 2;
      }
      else if (player == 3 && computer == 2) {
        return 1;
      }
      else if (player == 3 && computer == 3) {
        return 0;
      }
    }

    // Soma os pontos do jogador
    function addPointPlayer() {
      playerPoints++;
      document.getElementById('player-points').innerHTML = playerPoints;
    }

    // Soma os pontos do computador
    function addPointComputer() {
      computerPoints++;
      document.getElementById('computer-points').innerHTML = computerPoints;
    }

    // Função de jogar
    function player(choice) {
      playerChoose = choice;
      select('jogador', playerChoose);

      computerChoose = draw(1, 3);
      select('computador', computerChoose);

      var winner = calculateChoose(playerChoose, computerChoose);

      if (winner == 0) {
        message('Empate');
      }
      else if (winner == 1) {
        message('Ponto para ' + playerName);
        addPointPlayer();
      }
      else if (winner == 2) {
        message('Ponto para Computador');
        addPointComputer();
      }

      setTimeout(function() {
        deselect('jogador', playerChoose);
        deselect('computador', computerChoose);
        message(playerName + ' escolha uma opção...');
      }, 1500);
    }

    document.getElementById('jogador-escolha-1').onclick = function(){ player(1); };
    document.getElementById('jogador-escolha-2').onclick = function(){ player(2); };
    document.getElementById('jogador-escolha-3').onclick = function(){ player(3); };

    playerName = prompt("Qual é o seu nome?");
    definirJogadorNome(playerName);

    message('Bem-vindo ' + playerName + ' está preparado? Escolha uma opção acima...');