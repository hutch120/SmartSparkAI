interface ISpeakText {
  text: string
}

export function SpeakText({ text }: ISpeakText) {
  if (text !== '') {
    const utterance = new SpeechSynthesisUtterance(text)
    speechSynthesis.speak(utterance)
  }
}
