
// We have an audio element for each letter in the HTML file e.g. <audio data-key="65" src="sounds/clap.wav"></audio>
// We gonna have a custom attribute called data-key in the HTML file (e.g. data-key="65" for the letter a)

window.addEventListener('keydown', playSound);  // To add an event listener to the window

function playSound(e) {
    console.log(e.keyCode); // To log the key code which was typed
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // audio is the audio element (in the HTML file) - we put in the custom data-key attribute - e.keyCode is the key code of the key which was hit
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // .key is the div class (in the HTML file) - we put in the custom data-key attribute - e.keyCode is the key code of the key which was hit
    console.log(audio, key);    // e.g. for a we get <audio data-key="65" src="sounds/clap.wav"> and <div class="key" data-key="65">

    if (!audio) return; // For the case there is no audio to the letter which was pressed e.g. for l

    audio.currentTime = 0;  // To play it always from the beginning

    audio.play();   // To play the audio

    key.classList.add('playing');   // To add the class playing which shows the letter icon bigger
    setTimeout(() => {  // To remove the effect after 100 ms
        key.classList.remove('playing');
    }, 100);
};