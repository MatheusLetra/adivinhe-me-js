document.addEventListener('DOMContentLoaded', () => {
    const WORDS = [
  "ABRIR", "ACUAR", "AFIAR", "AGITAR", "ALSAR", "ALEAR", "ALUIR", "ANDAR", "APEAR", "APRAR",
  "ARCAR", "ARDER", "ARMAR", "ASSAR", "ATAR", "ATEAR", "ATIVAR", "ATUAR", "AZUAR", "BABAR",
  "BAGIR", "BAILAR", "BATER", "BEBER", "BENZER", "BERRAR", "BOIAR", "BOTAR", "BOXEAR", "BRILHAR",
  "BRIGAR", "BROTAR", "BULIR", "CABER", "CACAR", "CAGAR", "CALAR", "CAMAR", "CAMIR", "CAPAR",
  "CARIR", "CASAR", "CATAR", "CAVAR", "CEDER", "CEGAR", "CELAR", "CERAR", "CERCAR", "CHAMAR",
  "CHEGAR", "CHIAR", "CHUPAR", "CHULAR", "CHUTAR", "CINGIR", "CITAR", "CLAMAR", "COCAR", "COAR",
  "COGIR", "COLAR", "COMER", "COMPAR", "CONTAR", "CORAR", "CORRER", "CORTAR", "COSER", "COZER",
  "CRIAR", "CRUAR", "CUIDAR", "CUNHAR", "CURAR", "CURSAR", "CURVAR", "CUSTAR", "DANSAR", "DANAR",
  "DARDAR", "DATAR", "DEDAR", "DEIXAR", "DELAR", "DEMAR", "DEMIR", "DEPOR", "DEVER", "DITAR",
  "DOBAR", "DOBRAR", "DOCAR", "DOERAR", "DOMAR", "DORMIR", "DOTAR", "DRAGAR", "DROGAR", "DURAR",
  "ECOAR", "EDUCAR", "ELEGER", "EMITIR", "ENCAR", "ENCHER", "ENFIAR", "ENGAR", "ENIGIR", "ENTRAR",
  "ENVIAR", "ERGUIR", "ERMAR", "ERRAR", "ESMAR", "ESPIAR", "ESTAR", "ESTILAR", "EXALAR", "EXIBIR",
  "EXISTIR", "EXPOR", "FALAR", "FALIR", "FALTAR", "FANAR", "FAZER", "FEDER", "FELAR", "FELPAR",
  "FENDER", "FENDIR", "FERIR", "FERRAR", "FERVER", "FIAR", "FICAR", "FILMAR", "FINGIR", "FINTAR",
  "FIRMAR", "FISGAR", "FITAR", "FIXAR", "FOCAR", "FOGIR", "FOLGAR", "FOLHAR", "FORRAR", "FORJAR",
  "FORMAR", "FORRAR", "FREAR", "FREMIR", "FRITAR", "FUGIR", "FULAR", "FUMAR", "FUNDAR", "FURAR",
  "FURTAR", "GABAR", "GALAR", "GAMAR", "GANHAR", "GARAR", "GASTAR", "GELAR", "GERAR", "GERIR",
  "GINGAR", "GIRAR", "GORAR", "GOSTAR", "GOZAR", "GRALAR", "GRAMAR", "GRANAR", "GRAVAR", "GRITAR",
  "GROGAR", "GRUDAR", "GUIAR", "GUINAR", "HAVER", "HONRAR", "HOSTAR", "HURLAR", "ISAR", "IDEAR",
  "IMITAR", "IMPOR", "INDUZIR", "INFLAR", "IRIAR", "IRRITAR", "ISENTAR", "JAZER", "JOGAR", "JULGAR",
  "JUNTAR", "JURAR", "LABIAR", "LACRAR", "LADRAR", "LANSAR", "LANHAR", "LAPIDAR", "LARGAR", "LATIR",
  "LAVAR", "LAVRAR", "LEGAR", "LESMAR", "LEVAR", "LIDAR", "LIGAR", "LIMPAR", "LINGIR", "LINHAR",
  "LIVRAR", "LOGRAR", "LOUVAR", "LUBRAR", "LUCRAR", "LUSTRAR", "LUXAR", "MACAR", "MACHAR", "MAGOAR",
  "MANCAR", "MANDAR", "MANEAR", "MANGAR", "MANJAR", "MANTAR", "MAPEAR", "MARCAR", "MAREAR", "MASCAR",
  "MATAR", "MATIZAR", "MEDIR", "MEDRAR", "MEXER", "MIGRAR", "MIJAR", "MIMAR", "MINAR", "MINGUAR",
  "MIRAR", "MOCAR", "MOCHAR", "MOCEAR", "MODULAR", "MOER", "MOLDAR", "MOLHAR", "MONTAR", "MORAR",
  "MORDER", "MORRER", "MOSTRAR", "MOTEAR", "MOVER", "MUDAR", "MUGIR", "MULTAR", "MUNIR", "MURAR",
  "NARRAR", "NASCER", "NADAR", "NEGAR", "NEVAR", "NOTAR", "NOVAR", "NUTRIR", "OBRAR", "OBSTAR",
  "OBTER", "OCULAR", "OCUPAR", "ODIAR", "OLHAR", "OMITIR", "ONDEAR", "ONDAR", "OPERAR", "OPINAR",
  "OPTAR", "ORAR", "ORCAR", "ORDAR", "ORNAR", "OUSAR", "OUVIR", "OXIDAR", "PACAR", "PACHAR",
  "PAGAR", "PALIAR", "PALMAR", "PALPAR", "PANAR", "PANDEAR", "PAPEAR", "PARAR", "PARLAR", "PASSAR",
  "PEGAR", "PELAR", "PENSAR", "PERDER", "PESCAR", "PICAR", "PIFAR", "PINTAR", "PIPAR", "PIRAR",
  "PISAR", "PISTEAR", "PLAGAR", "PLANAR", "PODAR", "PODER", "POUPAR", "POSTAR", "PREGAR", "PRIMAR",
  "PROVAR", "PULAR", "PUNIR", "PURGAR", "QUEDAR", "QUERER", "RACHAR", "RADIAR", "RAIAR", "RALHAR",
  "RANGER", "RANHER", "RAPTAR", "RASGAR", "RASTAR", "RATAR", "REATAR", "REGER", "REINAR", "RENDER",
  "REZAR", "RILAR", "RIMAR", "RINHAR", "ROCAR", "RODAR", "ROER", "ROMPER", "RONCAR", "ROSNAR",
  "ROTAR", "ROULAR", "ROUBAR", "ROVER", "RUFAR", "RUGAR", "RUGIR", "RUMAR", "SACAR", "SACHAR",
  "SACIAR", "SAFAR", "SAIR", "SALGAR", "SALTAR", "SALVAR", "SANAR", "SAPAR", "SARJAR", "SECAR",
  "SEGAR", "SENTAR", "SERRAR", "SERVIR", "SILAR", "SINTAR", "SOAR", "SOBRAR", "SOFRER", "SOLDAR",
  "SOLTAR", "SONAR", "SONDAR", "SONHAR", "SORRIR", "SORVER", "SOVAR", "SUAR", "SUBIR", "SUGAR",
  "SUJAR", "SUMIR", "SURRAR", "SURTAR", "TACAR", "TALHAR", "TAMPAR", "TANGIR", "TAPAR", "TAPEAR",
  "TARDAR", "TASTAR", "TECER", "TEMER", "TENDER", "TENTAR", "TESTAR", "TIMBRAR", "TIRAR", "TOCAR",
  "TOMAR", "TONTAR", "TOPAR", "TORCER", "TORNAR", "TORRAR", "TOSSAR", "TRAMAR", "TRANSAR", "TRAPAR",
  "TRAZER", "TREMER", "TREPAR", "TRILHAR", "TRINCAR", "TROCAR", "TROMBAR", "TROTAR", "TUBAR", "TURBAR",
  "TURVAR", "UNHAR", "UNGIR", "UNIR", "URDIR", "URGAR", "URINAR", "URRAR", "URSAR", "USAR",
  "USINAR", "VACAR", "VAGAR", "VALER", "VALSAR", "VARIAR", "VARIR", "VARRER", "VAZAR", "VEDAR",
  "VELAR", "VENCER", "VENDER", "VENTAR", "VERGAR", "VERSAR", "VERTER", "VESTIR", "VETAR", "VEXAR",
  "VIAJAR", "VIBRAR", "VICAR", "VIGIAR", "VILAR", "VINGAR", "VIRAR", "VISAR", "VIVER", "VOAR",
  "VOLTAR", "VOTAR", "XINGAR", "ZELAR", "ZONAR", "ZONEAR", "ZOOMAR",
  "ABRIL", "ACIDO", "AFETO", "AGUDO", "ALBUM", "ALEGRE", "ALEMO", "ALUNO", "AMIDO", "AMPLO",
  "ANUAL", "AREIA", "ASTRO", "AUTOR", "AVIAO", "AZEDO", "BACIA", "BANCO", "BARRO", "BASCO",
  "BEIJO", "BERRO", "BICHO", "BLUSA", "BOLSA", "BOMBA", "BONDE", "BRISA", "BRUTO", "CABO",
  "CALMO", "CAMPO", "CANTO", "CARGA", "CARRO", "CARTA", "CASAL", "CAUSA", "CENSO", "CERCA",
  "CERVO", "CHAMA", "CHATO", "CHAVE", "CHEIO", "CIDRA", "CIUME", "CLARA", "CLIMA", "COBRA",
  "COBRE", "COFRE", "CONTO", "COPIA", "CORES", "CORPO", "CORSO", "COSTA", "COUVE", "CRAVO",
  "CRIME", "CULTO", "CUPOM", "CURSO", "DADOS", "DENTE", "DIGNO", "DISCO", "DOIDO", "DOTADO",
  "DRAMA", "DUPLA", "ELITE", "EMAIL", "ERROS", "ESCUDO", "ETNIA", "EXATO", "EXTRA", "FACIL",
  "FAIXA", "FALSO", "FARDA", "FAROL", "FATAL", "FAUNA", "FESTA", "FEUDO", "FILME", "FINAL",
  "FIRMA", "FISICO", "FLORA", "FOBIA", "FORNO", "FORUM", "FOSSO", "FRACO", "FRASE", "FROTA",
  "FRUTA", "FUNDO", "GARFO", "GASTO", "GATOS", "GENRO", "GLOBO", "GOBIO", "GORRO", "GOSTO",
  "GRAMA", "GRATO", "GRAVE", "GRILO", "GRUPO", "HABITO", "HEROI", "HOMEM", "HOTEL", "HUMOR",
  "IDEAL", "IDOSO", "IGUAL", "INDIO", "JARRA", "JAULA", "JEANS", "JEGUE", "JOIA", "JOVEM",
  "JUSTO", "LIMAO", "LIMPO", "LINDO", "LINHA", "LISTA", "LITRO", "LIVRO", "LOIRO", "LONGO",
  "LOUCO", "LOTUS", "LUGAR", "LUVAS", "MAGRO", "MAIOR", "MALTA", "MANGA", "MANHA", "MANTO",
  "MARCO", "MASSA", "MAIOR", "MELAO", "MENOR", "MENTE", "METAL", "METRO", "MIDIA", "MITO",
  "MOEDA", "MOLDE", "MORAL", "MORNO", "MOTOR", "MORTE", "MUDO", "MUNDO", "MUSEU", "MUSGO",
  "NATAL", "NAVIO", "NEGRO", "NOBRE", "NORTE", "NUVEM", "OASIS", "ONTEM", "ORDEN", "OSTRA",
  "OUTRO", "PALCO", "PAPEL", "PARQUE", "PASTO", "PEDRA", "PEIXE", "PERTO", "PIANO", "PILHA",
  "PLANO", "PODRE", "POETA", "POBRE", "POMAR", "PONTE", "PORTA", "PORTO", "PRATA", "PRETO",
  "PROVA", "RADIO", "RAMPA", "RENDA", "RESTO", "RISCO", "RITMO", "RIVAL", "ROCHA", "ROSTO",
  "RUSSO", "SABIO", "SALDO", "SALMO", "SALSA", "SANTO", "SAUDE", "SERIO", "SERVO", "SIGNO",
  "SITIO", "SOCIAL", "SOLAR", "SONHO", "SORTE", "SUAVE", "SUCESSO", "SURDO", "TAROT", "TELAS",
  "TEMPO", "TERMO", "TERNO", "TERRA", "TEXTO", "TIGRE", "TONTO", "TOTAL", "TOURO", "TRATO",
  "TRIBO", "TRIGO", "TRIVIAL", "URSOS", "VACUO", "VELHO", "VELOZ", "VENTO", "VERDE", "VERSO",
  "VINHO", "VIDEO", "VITAL", "VISTO", "VOLTA"
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
