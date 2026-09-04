function speake() {
  const Name = document.getElementById("answer").value;
  const speech = new SpeechSynthesisUtterance( Name +
    "I love to read books,watch movies,socialise and code . Till date,coding languages like HTML,CSS and JAVA SCRIPT are under my command.Would be glad to join the tech departement of NAKSHATRA."
  );

  const voices = speechSynthesis.getVoices();

  const femaleVoice = voices.find(v =>
    /zira|susan|samantha|victoria|female/i.test(v.name)
  );

  if (femaleVoice) speech.voice = femaleVoice;

  speech.rate = 0.7;
  speech.pitch = 1.5;
  speech.volume = 1;

  speechSynthesis.speak(speech);
}

speechSynthesis.onvoiceschanged = () => {
  console.log(speechSynthesis.getVoices());
};