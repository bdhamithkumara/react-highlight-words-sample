import { useState } from 'react'
import './App.css'
import Highlighter from "react-highlight-words";
import Select from 'react-select';


function App() {

  const [messages, setMessages] = useState([
    { text: 'Hello!', sender: 'You' },
    { text: 'Hi there!', sender: 'Receiver' },
    { text: 'How are you?', sender: 'You' },
    { text: 'I\'m doing well, thanks!', sender: 'Receiver' },
    { text: 'What are you up to?', sender: 'You' },
    { text: 'Just working on some coding projects.', sender: 'Receiver' },
    { text: 'That sounds fun!', sender: 'You' },
    { text: 'Yes, I enjoy it.', sender: 'Receiver' },
    { text: 'Have you seen any good movies lately?', sender: 'You' },
    { text: 'I watched a great movie last night.', sender: 'Receiver' },
    { text: 'What was it called?', sender: 'You' },
    { text: 'It was called "The Dark Knight".', sender: 'Receiver' },
    { text: 'Oh, I love that movie!', sender: 'You' },
    { text: 'It\'s a classic!', sender: 'Receiver' },
    { text: 'I agree. Heath Ledger\'s performance was outstanding.', sender: 'You' },
    { text: 'Heath Ledger was a brilliant actor.', sender: 'Receiver' },
    { text: 'What else do you like to do in your free time?', sender: 'You' },
    { text: 'I enjoy reading and hiking.', sender: 'Receiver' },
    { text: 'That sounds relaxing.', sender: 'You' },
    { text: 'Yes, it helps me unwind.', sender: 'Receiver' },
    { text: 'I need to find more hobbies.', sender: 'You' },
    { text: 'Exploring new hobbies can be exciting!', sender: 'Receiver' },
    { text: 'I\'ll give it a try.', sender: 'You' },
    { text: 'You should! It\'s never too late to start something new.', sender: 'Receiver' },
    { text: 'Thanks for the encouragement.', sender: 'You' },
    { text: 'You\'re welcome. Enjoy your day!', sender: 'Receiver' },

  ]);
  const [newMessage, setNewMessage] = useState('');
  const [search, setSearch] = useState([])
  const [searchShow , setSearchShow] = useState(false)

  const handleSendMessage = () => {
    if (newMessage) {
      setMessages([...messages, { text: newMessage, sender: 'You' }]);
      setNewMessage('');
    }
  };

  const handleSearch = () => {
    setSearchShow(true)
    console.log(search)
    
  }

  return (
    <div className="container mx-auto p-4">

      <div >
      <div className="mt-4 flex mb-2">
        <input
          type="text"
          placeholder="Type to search"
          value={search[0]} 
          onChange={(e) => setSearch([e.target.value])}
          className="w-3/4 p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
        />
        <button
          onClick={handleSearch}
          className="ml-2 bg-blue-500 text-white p-2 rounded focus:outline-none"
        >
          search
        </button>
      </div>

      </div>
      <div className="border rounded p-4 h-96 overflow-y-scroll bg-gray-100">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 mb-2 ${
              message.sender === 'You' ? 'text-right' : 'text-left'
            }`}
          >
            <div
              className={`p-2 ${
                message.sender === 'You' ? 'bg-blue-500 text-white' : 'bg-gray-800'
              } rounded-lg inline-block max-w-3/4`}
            >

            {searchShow ?
              <Highlighter
            searchWords={search} 
            autoEscape={true}
            textToHighlight={message.text}
          />
              : message.text }
            
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="w-3/4 p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 bg-blue-500 text-white p-2 rounded focus:outline-none"
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default App
