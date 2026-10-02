const botaoNao = document.getElementById('botao');
const botaoSim = document.getElementById('sim');

if (botaoSim) {
    botaoSim.addEventListener('click', () => {
        const destino = botaoSim.dataset.href;
        if (destino) window.location.href = destino;
    });
}

if (botaoNao) {
    const caixaBranca = document.querySelector('.hero');
    const SAFE_MARGIN = 18;
    const MOVE_DURATION = 420;
    let movementLocked = false;

    function prepararPosicaoFixa() {
        if (botaoNao.style.position === 'fixed') return;

        const rect = botaoNao.getBoundingClientRect();
        botaoNao.style.position = 'fixed';
        botaoNao.style.left = `${rect.left}px`;
        botaoNao.style.top = `${rect.top}px`;
        botaoNao.style.width = `${rect.width}px`;
        botaoNao.style.height = `${rect.height}px`;
        botaoNao.style.margin = '0';
        botaoNao.style.zIndex = '999';

        // Registra a posição inicial para a transição ficar suave.
        botaoNao.getBoundingClientRect();
    }

    function limitesDaCaixa(rectBotao) {
        const area = caixaBranca?.getBoundingClientRect();

        // Se a caixa não existir, mantém o botão na posição atual.
        if (!area) {
            return {
                minX: rectBotao.left,
                maxX: rectBotao.left,
                minY: rectBotao.top,
                maxY: rectBotao.top
            };
        }

        const minX = area.left + SAFE_MARGIN;
        const minY = area.top + SAFE_MARGIN;
        const maxX = Math.max(minX, area.right - rectBotao.width - SAFE_MARGIN);
        const maxY = Math.max(minY, area.bottom - rectBotao.height - SAFE_MARGIN);

        return { minX, maxX, minY, maxY };
    }

    function moverBotao() {
        if (movementLocked) return;
        movementLocked = true;

        prepararPosicaoFixa();

        const rect = botaoNao.getBoundingClientRect();
        const { minX, maxX, minY, maxY } = limitesDaCaixa(rect);

        let newX = minX;
        let newY = minY;
        let attempts = 0;

        // Escolhe sempre um novo ponto DENTRO da caixa branca.
        do {
            newX = Math.random() * Math.max(1, maxX - minX) + minX;
            newY = Math.random() * Math.max(1, maxY - minY) + minY;
            attempts += 1;
        } while (
            attempts < 10 &&
            Math.hypot(newX - rect.left, newY - rect.top) < 110
        );

        requestAnimationFrame(() => {
            botaoNao.style.left = `${newX}px`;
            botaoNao.style.top = `${newY}px`;
        });

        window.setTimeout(() => {
            movementLocked = false;
        }, MOVE_DURATION);
    }

    function manterDentroDaCaixa() {
        if (botaoNao.style.position !== 'fixed') return;

        const rect = botaoNao.getBoundingClientRect();
        const { minX, maxX, minY, maxY } = limitesDaCaixa(rect);
        const x = Math.min(Math.max(rect.left, minX), maxX);
        const y = Math.min(Math.max(rect.top, minY), maxY);

        botaoNao.style.left = `${x}px`;
        botaoNao.style.top = `${y}px`;
    }

    botaoNao.addEventListener('pointerenter', moverBotao);
    botaoNao.addEventListener('touchstart', (event) => {
        event.preventDefault();
        moverBotao();
    }, { passive: false });
    botaoNao.addEventListener('click', (event) => {
        event.preventDefault();
        moverBotao();
    });

    window.addEventListener('resize', manterDentroDaCaixa);
}

