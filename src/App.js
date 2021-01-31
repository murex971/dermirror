import logo from "./logo.svg";
import "./App.css";
import Webcam from "react-webcam";

import React, { useState } from "react";

const videoConstraints = {
  width: { min: 480 },
  height: { min: 720 },
  aspectRatio: 0.6666666667,
};

const kiraMonologue =
  "My name is Yoshikage Kira. I'm 33 years old. My house is in the northeast section of Morioh, where all the villas are, and I am not married. I work as an employee for the Kame Yu department stores, and I get home every day by 8 PM at the latest. I don't smoke, but I occasionally drink. I'm in bed by 11 PM, and make sure I get eight hours of sleep, no matter what. After having a glass of warm milk and doing about twenty minutes of stretches before going to bed, I usually have no problems sleeping until morning. Just like a baby, I wake up without any fatigue or stress in the morning. I was told there were no issues at my last check-up. I'm trying to explain that I'm a person who wishes to live a very quiet life. I take care not to trouble myself with any enemies, like winning and losing, that would cause me to lose sleep at night. That is how I deal with society, and I know that is what brings me happiness. Although, if I were to fight I wouldn't lose to anyone.";

function App() {
  const [messages, setMessages] = useState([
    { text: kiraMonologue, bot: true },
    { text: kiraMonologue, bot: false },
  ]);

  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    const b64 = imageSrc.split("data:image/jpeg;base64,")[1];
    fetch("http://13.92.241.205:8080/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image: b64 }),
    })
      .then((resp) => resp.json())
      .then((json) => {
        var newMessages = messages;
        newMessages.push({
          text: `You have ${json.class} (Probablity = ${json.score})`,
          bot: true,
        });
        console.log(newMessages);
        setMessages(newMessages);
      });
  }, [webcamRef]);

  return (
    <div className="App">
      <div style={{ overflow: "hidden", height: "100vh" }}>
        <Webcam
          videoConstraints={videoConstraints}
          width={"100%"}
          screenshotFormat="image/jpeg"
          ref={webcamRef}
          mirrored={true}
        />
        <div
          className="chatBox"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "97.2vh",
            width: "30%",
            overflow: "scroll",
            alignItems: "flex-start",
            textAlign: "left",
            // opacity: 0.2,
            padding: 10,
            scrollbarWidth: "none",
          }}
        >
          {messages.map((x, i) => {
            if (x.bot) {
              return (
                <div
                  style={{
                    display: "inline-block",
                    padding: 10,
                    borderTopRightRadius: 16,
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16,
                    marginBottom: 10,
                    maxWidth: "90%",
                    color: "rgba(255, 255, 255, 0.9)",
                    backgroundColor: "rgba(0,0,0, 0.4)",
                  }}
                >
                  {x.text}
                </div>
              );
            } else {
              return (
                <div
                  style={{
                    display: "inline-block",
                    float: "right",
                    padding: 10,
                    borderTopLeftRadius: 16,
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16,
                    marginBottom: 10,
                    maxWidth: "90%",
                    color: "rgba(255, 255, 255, 0.9)",
                    backgroundColor: "rgba(0,0,0, 0.4)",
                  }}
                >
                  {x.text}
                </div>
              );
            }
          })}
          <button
            style={{
              height: 50,
              width: "100%",
              backgroundColor: "black",
              color: "white",
            }}
            onClick={() => {
              console.log("heheh");
              capture();
            }}
          >
            Hello
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
