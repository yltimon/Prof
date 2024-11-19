import React, { useState } from 'react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage(userInput);
            e.preventDefault();
          }
      };

    const handleSendMessage = async (message) => {
        const trimmedMessage = message.trim();
        
        const newMessage = { id: Date.now(),sender: "user", text: trimmedMessage };
          setMessages(messages => [...messages, newMessage]);
          setUserInput("");

        try {
            const response = await fetch("http://localhost:5000/api/chat", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ message: trimmedMessage }),
            });
      
            const data = await response.json();
            setMessages(messages => [...messages, { id: Date.now() + 1, text: data.response, sender: 'bot' }]);
          } catch (error) {
            console.error("Error sending message:", error);
            return "An error occurred. Please try again later.";
        }
    };

    return (
        <>
          {/* Overlay Button */}
          <div
            onClick={toggleChat}
            className="fixed bottom-6 right-6 bg-pink-600 hover:bg-pink-700 text-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center cursor-pointer z-50"
          >
            <span className="text-xl">💬</span>
          </div>
    
          {/* Chat Window */}
          {isOpen && (
            <div
              className="fixed bottom-20 right-6 bg-white w-72 h-96 shadow-xl rounded-lg z-50 flex flex-col"
              style={{ border: "1px solid #e5e7eb" }}
            >
              {/* Header */}
              <div className="bg-pink-400 text-white p-3 flex justify-between items-center rounded-t-lg">
                <h2 className="text-sm font-semibold">Chat with Us</h2>
                <button
                  onClick={toggleChat}
                  className="text-white hover:text-gray-200 font-semibold text-lg"
                >
                  ✕
                </button>
              </div>
    
              {/* Messages Container */}
              <div className="flex-1 p-3 overflow-y-auto text-gray-800">
                {messages.length === 0 ? (
                  <p className="text-center">Ask me anything!</p>
                ) : (
                  messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`mb-2 p-2 rounded-lg ${
                        msg.sender === "user"
                          ? "bg-gray-300 text-right"
                          : "bg-pink-100 text-left"
                      }`}
                    >
                      {msg.text}
                    </div>
                  ))
                )}
              </div>
    
              {/* Input Box */}
              <div className="flex items-center p-2 border-t border-gray-200">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 p-2 rounded-lg border border-gray-300 outline-none"
                />
                <button
                  onClick={handleSendMessage}
                  className="ml-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold p-2 rounded-lg"
                >
                  Send
                </button>
              </div>
            </div>
          )}
        </>
      );
};

export default Chatbot;