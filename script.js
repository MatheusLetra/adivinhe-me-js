document.addEventListener('DOMContentLoaded', () => {
    const WORDS = [
        "ABACO", "ABADA", "ABAFA", "ABALO", "ABANO", "ABATE", "ABEBE", "ABUSO", "ACABE", "ACELA",
        "ACERO", "ADUBA", "ADUTO", "AGUAR", "AGUDO", "AJUDA", "ALADO", "ALAMO", "ALAVO", "ALGAR",
        "ALIVA", "ALMAS", "ALOLO", "AMADO", "AMIGO", "ANEXO", "ANIMA", "ANOTE", "APAGA", "APELO",
        "APENA", "APITO", "APOGE", "ARARA", "ARADO", "ARGUE", "ARRAN", "ATACA", "ATILO", "ATIMO",
        "ATRAS", "ATUA", "AVELO", "AZULO", "BANCO", "BARCO", "BASTA", "BEATO", "BEIJA", "BENDA",
        "BERRO", "BISCO", "BOATO", "BOLAS", "BOSTA", "BRAVA", "BRAVO", "BRUTO", "BUFAO", "BURRA",
        "CABRA", "CACAO", "CADAR", "CAIR", "CALDO", "CALOR", "CAMPE", "CANAL", "CANJO", "CAPAS",
        "CARRO", "CASAL", "CATAR", "CAUSO", "CESTO", "CHATO", "CIGAR", "CLARA", "CLARO", "COALA",
        "COBRE", "CORTE", "COSTA", "CRAVE", "CRAVO", "CRIAR", "CUIDO", "DARAS", "DENSO", "DEIXA",
        "DICAS", "DOLAR", "DROPE", "DURAL", "DURAN", "DÚZIA", "ECLOR", "ELEVO", "ENGAS", "ESTOU",
        "FALAR", "FALHO", "FANTA", "FERIR", "FESTA", "FEIRA", "FEIRA", "FLETO", "FLORA", "FOLHA",
        "FRASE", "GANDA", "GARRA", "GELAR", "GERAR", "GENTE", "GIRAR", "GLOBO", "GOLPE", "GRUPO",
        "HARAS", "HORAS", "IDOSA", "ILUME", "IRADO", "JAZER", "JOGO", "JUROS", "JUNHO", "JUSTO",
        "KARMA", "LARVA", "LAUDO", "LEQUE", "LEVE", "LIVRO", "LODO", "LUVAS", "MACAS", "MALTA",
        "MAMBO", "MANGA", "MARCO", "MASSA", "MATIZ", "MELAN", "MENOR", "MEROS", "MESTRE", "MILHO",
        "MORRA", "MUDAR", "MURRO", "MUSO", "MUITO", "NAIRA", "NAVIO", "NEGRO", "NESTA", "NICHO",
        "NORTE", "NUVEM", "OCUPA", "ONICO", "OUTRO", "PARAR", "PEDIR", "PEGAR", "PENSA", "PIANO",
        "PONTO", "PRATO", "QUERO", "RADAR", "REFOR", "RENTE", "RITMO", "ROSTO", "SABOR", "SAIR",
        "SALVA", "SANTO", "SAPOS", "SORTE", "SUSTO", "TAMPA", "TEMPO", "TENDO", "TERMO", "TERRA",
        "TOQUE", "TROCA", "TULHA", "ULTRA", "UNIDO", "VALOR", "VARAS", "VEADO", "VEIGA", "VISTO",
        "VIVER", "VOCES", "VOLEI", "ZAIDO", "ZEBRA", "ZUMBA", "ABACO", "ABADA", "ABAFA", "ABALO",
        "ABANO", "ABATE", "ABEBE", "ABUSO", "ACABE", "ACELA", "ACERO", "ADUBA", "ADUTO", "AGUAR",
        "AGUDO", "AJUDA", "ALADO", "ALAMO", "ALAVO", "ALGAR", "ALIVA", "ALMAS", "ALOLO", "AMADO",
        "AMIGO", "ANEXO", "ANIMA", "ANOTE", "APAGA", "APELO", "APENA", "APITO", "APOGE", "ARARA",
        "ARADO", "ARGUE", "ARRAN", "ATACA", "ATILO", "ATIMO", "ATRAS", "ATUA", "AVELO", "AZULO",
        "BANCO", "BARCO", "BASTA", "BEATO", "BEIJA", "BENDA", "BERRO", "BISCO", "BOATO", "BOLAS",
        "BOSTA", "BRAVA", "BRAVO", "BRUTO", "BUFAO", "BURRA", "CABRA", "CACAO", "CADAR", "CAIR",
        "CALDO", "CALOR", "CAMPE", "CANAL", "CANJO", "CAPAS", "CARRO", "CASAL", "CATAR", "CAUSO",
        "CESTO", "CHATO", "CIGAR", "CLARA", "CLARO", "COALA", "COBRE", "CORTE", "COSTA", "CRAVE",
        "CRAVO", "CRIAR", "CUIDO", "DARAS", "DENSO", "DEIXA", "DICAS", "DOLAR", "DROPE", "DURAL",
        "DURAN", "DÚZIA", "ECLOR", "ELEVO", "ENGAS", "ESTOU", "FALAR", "FALHO", "FANTA", "FERIR",
        "FESTA", "FEIRA", "FEIRA", "FLETO", "FLORA", "FOLHA", "FRASE", "GANDA", "GARRA", "GELAR",
        "GERAR", "GENTE", "GIRAR", "GLOBO", "GOLPE", "GRUPO", "HARAS", "HORAS", "IDOSA", "ILUME",
        "IRADO", "JAZER", "JOGO", "JUROS", "JUNHO", "JUSTO", "KARMA", "LARVA", "LAUDO", "LEQUE",
        "LEVE", "LIVRO", "LODO", "LUVAS", "MACAS", "MALTA", "MAMBO", "MANGA", "MARCO", "MASSA",
        "MATIZ", "MELAN", "MENOR", "MEROS", "MESTRE", "MILHO", "MORRA", "MUDAR", "MURRO", "MUSO",
        "MUITO", "NAIRA", "NAVIO", "NEGRO", "NESTA", "NICHO", "NORTE", "NUVEM", "OCUPA", "ONICO",
        "OUTRO", "PARAR", "PEDIR", "PEGAR", "PENSA", "PIANO", "PONTO", "PRATO", "QUERO", "RADAR",
        "REFOR", "RENTE", "RITMO", "ROSTO", "SABOR", "SAIR", "SALVA", "SANTO", "SAPOS", "SORTE",
        "SUSTO", "TAMPA", "TEMPO", "TENDO", "TERMO", "TERRA", "TOQUE", "TROCA", "TULHA", "ULTRA",
        "UNIDO", "VALOR", "VARAS", "VEADO", "VEIGA", "VISTO", "VIVER", "VOCES", "VOLEI", "ZAIDO",
        "ZEBRA", "ZUMBA"
    ];
    

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let currentStreak = getProgress('adivinhemeProgress') || 0;
    let usedLetters = {}

    function sortWord() {
        return WORDS[Math.floor(Math.random() * WORDS.length)];
    }

    function generateLetters() {
        const divLetters = document.getElementById('letters');
        divLetters.innerHTML = ''
        letters.forEach(letter => {
            const letterDiv = document.createElement('div');
            letterDiv.classList.add('letter');
            letterDiv.innerHTML = `<span>${letter}</span>`;
            letterDiv.dataset.letter = letter
            divLetters.appendChild(letterDiv);
        });
    }

    function createWordRows() {
        const root = document.getElementById('root');
        const rows = 6;
        const wordLength = 5;

        for (let i = 0; i < rows; i++) {
            const wordDiv = document.createElement('div');
            wordDiv.classList.add('word-row');

            for (let j = 0; j < wordLength; j++) {
                const input = document.createElement('input');
                input.type = 'text';
                input.maxLength = 1;
                input.classList.add('letter-input');
                wordDiv.appendChild(input);
            }

            root.appendChild(wordDiv);
        }
    }

    function handleInputEvents() {
        const wordRows = document.querySelectorAll('.word-row');
        wordRows.forEach((row, rowIndex) => {
            const inputs = row.querySelectorAll('.letter-input');
            inputs.forEach((input, index) => {
                input.addEventListener('input', (e) => {
                    input.value = input.value.toUpperCase();

            
                    if (input.value && index < inputs.length - 1) {
                        inputs[index + 1].focus();
                    }
                });

        
                input.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' && index === inputs.length - 1) {
                        e.preventDefault()
                        validateWord(rowIndex);
                    }

            
                    if (e.key === 'Backspace') {
                        handleBackspace(inputs, index);
                    }
                });
            });
        });
    }

    function handleBackspace(inputs, index) {
        if (index === 0 && inputs[0].value === '') {
    
            inputs.forEach(input => input.value = '')
            inputs[0].focus()
        } else if (inputs[index].value === '') {
    
            for (let i = index - 1; i >= 0; i--) {
                if (inputs[i].value) {
                    inputs[i].focus();
                    return;
                }
        
                if (i === 0) {
                    inputs[0].focus();
                }
            }
        }
    }

    function validateWord(rowIndex) {
        const wordRow = document.querySelectorAll('.word-row')[rowIndex];
        const inputs = wordRow.querySelectorAll('.letter-input');
        let isCorrect = true;
        const currentWord = WORD;

        inputs.forEach((input, index) => {
            const letter = input.value;

            if (letter === currentWord[index]) {
                input.style.backgroundColor = '#3aa394'
                usedLetters[letter] = 'correct'
            } else if (currentWord.includes(letter)) {
                input.style.backgroundColor = '#dfe61c'
                usedLetters[letter] = 'present'
                isCorrect = false;
            } else {
                input.style.backgroundColor = '#b30909'
                usedLetters[letter] = 'absent'
                isCorrect = false;
            }
        });


        updateUsedLetters();


        inputs.forEach(input => input.disabled = true);


        if (!isCorrect && rowIndex < 5) {
            const nextRow = document.querySelectorAll('.word-row')[rowIndex + 1];
            nextRow.querySelectorAll('.letter-input')[0].focus();
        } else {
            endGame(isCorrect);
        }
    }

    function updateUsedLetters() {
        const divLetters = document.getElementById('letters');
        const letterDivs = divLetters.querySelectorAll('.letter');

        letterDivs.forEach(letterDiv => {
            const letter = letterDiv.dataset.letter;

            if (usedLetters[letter] === 'correct') {
                letterDiv.style.backgroundColor = '#3aa394'
            } else if (usedLetters[letter] === 'present') {
                letterDiv.style.backgroundColor = '#dfe61c'
            } else if (usedLetters[letter] === 'absent') {
                letterDiv.style.backgroundColor = '#b30909'
            }
        });
    }

    function endGame(isCorrect) {
        const message = document.getElementById('title-sucess');
        const correctWordDisplay = document.getElementById('correct-word');
        const currentStreakDisplay = document.getElementById('current-streak');
        const successDiv = document.getElementById('sucess');

        if (isCorrect) {
            message.textContent = 'Parabéns! Você acertou!';
            currentStreak += 1
            currentStreakDisplay.textContent = `Sua sequência de acertos é: ${currentStreak}`
            setProgress(currentStreak)
        } else {
            message.textContent = 'Que pena! Tente novamente!';
            currentStreakDisplay.textContent = ''
    
            if (currentStreak > 0) {
                setProgress(0);
            }
        }

        correctWordDisplay.textContent = `A palavra correta era: ${WORD}`;
        successDiv.style.display = 'flex';
        successDiv.style.flexDirection= 'column'
    }

    function restartGame() {

        window.location.reload();
    }

    function setProgress(item) {
        localStorage.setItem('adivinhemeProgress', item);
    }

    function getProgress(item) {
        return parseInt(localStorage.getItem(item)) || 0;
    }

    let WORD = sortWord();
    createWordRows();
    generateLetters();
    handleInputEvents();

    document.getElementById('restart-game').addEventListener('click', restartGame);
    document.querySelector('.word-row').querySelector('input').focus();

    console.log(`Palavra sorteada: ${WORD}`)
});
