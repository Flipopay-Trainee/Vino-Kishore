import React, { useState, useEffect } from "react";

function Chatbot() {
  const initialMessage = {
    sender: " ",
    text: "Hi there! How can I help you today?",
  };
  const [messages, setMessages] = useState([initialMessage]);
  const [inputText, setInputText] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(true);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const addBotMessage = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "bot", text: message },
    ]);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      setMessages([...messages, { sender: "user", text: inputText }]);
      setInputText("");
    }
  };

  useEffect(() => {
    if (messages[messages.length - 1]?.sender === "user") {
      setIsBotTyping(true);

      setTimeout(() => {
        setIsBotTyping(false);

        const lastUserMessage =
          messages[messages.length - 1].text.toLowerCase();

        switch (lastUserMessage) {
          case "Hello":
            addBotMessage("vaaa arunachalam.. ne varuvenu therium! ");
            break;
          case "how are you":
            addBotMessage("ithu varaikum nalla irunthen inni epdinu therila");
            break;
          case "what is your name":
            addBotMessage("My name is  Rolex.");
            break;
          case "hi":
            addBotMessage("Vanakam da mapla.");
            break;
          default:
            addBotMessage(
              " please...! code la irukura question'a mattum kelunga."
            );
        }
      }, 1000);
    }
  }, [messages]);

  const handleRestart = () => {
    setMessages([initialMessage]);
    setInputText("");
  };

  return (
    <div>
      <header>
        <h2>Chatbot</h2>
      </header>
      <ul className="chatbox">
        {messages.map((message, place) => (
          <li key={place} className={"chat " + message.sender}>
            <span className="sender">{message.sender}</span>
            <p>{message.text}</p>
          </li>
        ))}
        {isBotTyping && (
          <li className="chat-bot">
            <span className="sender">bot</span>
            <p>...</p>
          </li>
        )}
      </ul>
      <div className="chat-input">
        <textarea
          placeholder="Enter a message..."
          value={inputText}
          onChange={handleChange}
        ></textarea>
        <div>
          <button onClick={handleSendMessage} className="send-btn">
            Send
          </button>
          <button onClick={handleRestart} className="restart-btn">
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
