<script>
  // Get the button using its class name
  const musicButton = document.querySelector('.music-control-button');
  
  // The audio element can still use an id
  const audio = document.getElementById('background-music');

  musicButton.addEventListener('click', function() {
    if (audio.paused) {
      audio.play();
      musicButton.textContent = '⏸️';
    } else {
      audio.pause();
      musicButton.textContent = '🎵';
    }
  });
</script>