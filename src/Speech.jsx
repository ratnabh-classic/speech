import React, { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Speech = () => {
  const [show, setShow] = useState(false);
  const { transcript, resetTranscript } = useSpeechRecognition();
  console.log(transcript);
  const calc = () => {
    resetTranscript();
  };
  useEffect(() => {
    return () => {
      console.log("gone");
      resetTranscript();
    };
  }, []);
  return (
    <div>
      <br />
      <br />

      <div>
        <button onClick={SpeechRecognition.startListening}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={() => calc()}>Reset</button>
        <p>{transcript}</p>
      </div>
      <br />
    </div>
  );
};
export default Speech;
