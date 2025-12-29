import React, { useState } from 'react';

export const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    { role: 'assistant', content: 'Welcome to Driven 13 Collective. How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');

    // Simulated AI response
    setTimeout(() => {
      let response = "Thank you for your interest in Driven 13 Collective. ";
      
      if (userMessage.toLowerCase().includes('tier') || userMessage.toLowerCase().includes('membership')) {
        response += "We offer four tiers: Legend, Champion, Contender, and Prospect. Driven 13 Collective membership is exclusive and cannot be purchased. You must submit your case at /contact to be considered.";
      } else if (userMessage.toLowerCase().includes('shop') || userMessage.toLowerCase().includes('store') || userMessage.toLowerCase().includes('buy')) {
        response += "Our store offers general merchandise for everyone. However, Driven 13 Collective tier clothing is exclusive and cannot be purchased—you must apply by submitting your case.";
      } else if (userMessage.toLowerCase().includes('mission')) {
        response += "Driven 13 Collective is the Black American F1 Initiative, dedicated to creating pathways and representation in motorsport through premium lifestyle and performance wear.";
      } else if (userMessage.toLowerCase().includes('apply') || userMessage.toLowerCase().includes('join') || userMessage.toLowerCase().includes('case')) {
        response += "To apply for the Driven 13 Collective, visit our contact page and submit your case. Tell us who you are, why you belong, and what you bring to the circle.";
      } else {
        response += "Feel free to explore our manifesto, lookbook, or learn about our tier system. To join the exclusive Driven 13 Collective, submit your case at /contact. For general merchandise, visit our store.";
      }

      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    }, 1000);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
        aria-label="Toggle AI Assistant"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 z-50 w-80 md:w-96 h-[500px] bg-neutral-900 border border-neutral-800 rounded-lg shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-neutral-800 bg-black">
            <h3 className="text-sm font-bold tracking-widest uppercase">D13 Assistant</h3>
            <p className="text-[10px] text-neutral-500 tracking-wider">Powered by Driven 13 Collective</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    msg.role === 'user'
                      ? 'bg-white text-black'
                      : 'bg-neutral-800 text-neutral-200'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-neutral-800 bg-black">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Driven 13 Collective..."
                className="flex-1 bg-neutral-800 border border-neutral-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-neutral-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-white text-black text-sm font-bold rounded hover:bg-neutral-200 transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
