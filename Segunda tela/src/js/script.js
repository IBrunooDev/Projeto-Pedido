const musicButton = document.getElementById('music-toggle');
const backgroundMusic = document.getElementById('background-music');
const nextButton = document.getElementById('music-next');
const trackStatus = document.getElementById('music-track');

// Coloque as 4 músicas dentro de: Segunda tela/src/audio/
// Se você quiser trocar os nomes dos arquivos, altere somente o "src" abaixo.
const playlist = [
  {
    title: 'Hungria - Amor e Fé',
    src: 'src/audio/Hungria - Amor e Fé.mp3'
  },
  {
    title: 'Henrique e Juliano - Carta Aberta',
    src: 'src/audio/Henrique e Juliano - Carta Aberta.mp3'
  },
  {
    title: 'Teto - MULHER SECRETA',
    src: 'src/audio/Teto - MULHER SECRETA.mp3'
  },
  {
    title: 'Caio Luccas - Close Friends',
    src: 'src/audio/Caio Luccas - Close Friends.mp3'
  },
  {
    title: 'Djonga - Da Lua',
    src: 'src/audio/Djonga - Da Lua.mp3'
  }
];

let currentTrackIndex = 0;
let tryingMissingTracks = 0;
let autoAdvance = false;

function getCurrentTrack() {
  return playlist[currentTrackIndex];
}

function updatePlayerUI(isPlaying = false) {
  const track = getCurrentTrack();

  if (musicButton) {
    musicButton.textContent = isPlaying ? '❚❚ Pausar' : '▶ Tocar';
    musicButton.setAttribute('aria-pressed', String(isPlaying));
    musicButton.setAttribute(
      'aria-label',
      `${isPlaying ? 'Pausar' : 'Tocar'} ${track.title}`
    );
  }

  if (trackStatus) {
    trackStatus.textContent = `${currentTrackIndex + 1}/${playlist.length} · ${track.title}`;
  }
}

function loadTrack(index) {
  if (!backgroundMusic) return;

  currentTrackIndex = (index + playlist.length) % playlist.length;
  const track = getCurrentTrack();

  backgroundMusic.src = track.src;
  backgroundMusic.load();
  updatePlayerUI(false);
}

async function playCurrentTrack() {
  if (!backgroundMusic) return;

  try {
    await backgroundMusic.play();
    tryingMissingTracks = 0;
    updatePlayerUI(true);
  } catch (error) {
    // Autoplay pode ser bloqueado pelo navegador. O clique no botão libera o play.
    updatePlayerUI(false);
    console.warn('Não foi possível tocar a música:', getCurrentTrack().src, error);
  }
}

function pauseCurrentTrack() {
  if (!backgroundMusic) return;
  autoAdvance = false;
  backgroundMusic.pause();
  updatePlayerUI(false);
}

async function goToNextTrack() {
  if (!backgroundMusic) return;

  autoAdvance = true;
  loadTrack(currentTrackIndex + 1);
  await playCurrentTrack();
}

if (musicButton && backgroundMusic) {
  loadTrack(0);

  musicButton.addEventListener('click', async () => {
    if (backgroundMusic.paused) {
      autoAdvance = true;
      await playCurrentTrack();
    } else {
      pauseCurrentTrack();
    }
  });

  if (nextButton) {
    nextButton.addEventListener('click', async () => {
      tryingMissingTracks = 0;
      await goToNextTrack();
    });
  }

  // Ao terminar, toca a próxima. Depois da 4ª, volta para a 1ª.
  backgroundMusic.addEventListener('ended', goToNextTrack);

  backgroundMusic.addEventListener('play', () => {
    tryingMissingTracks = 0;
    updatePlayerUI(true);
  });

  backgroundMusic.addEventListener('pause', () => {
    if (!backgroundMusic.ended) updatePlayerUI(false);
  });

  // Se uma das músicas 2, 3 ou 4 ainda não existir,
  // o player pula para a próxima sem travar a playlist.
  backgroundMusic.addEventListener('error', async () => {
    if (!autoAdvance) {
      updatePlayerUI(false);
      return;
    }

    tryingMissingTracks += 1;

    if (tryingMissingTracks >= playlist.length) {
      autoAdvance = false;
      tryingMissingTracks = 0;
      if (trackStatus) {
        trackStatus.textContent = 'Nenhum arquivo de música encontrado';
      }
      updatePlayerUI(false);
      return;
    }

    loadTrack(currentTrackIndex + 1);
    await playCurrentTrack();
  });
}
