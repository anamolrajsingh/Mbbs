
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

const MedicalMentor: React.FC = () => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I'm your MBBS Nepal Mentor. I can help you with admission queries, college selection, or just general career advice. What can I clarify for you today?" }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const askMentor = async () => {
    if (!query.trim() || loading) return;

    const userMessage: Message = { role: 'user', text: query };
    setMessages(prev => [...prev, userMessage]);
    setQuery('');
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: "You are 'MBBS Nepal Mentor', an expert consultant. Use a tone that is premium, encouraging, and clear (like Apple's customer experience). Provide specific advice about MBBS in Nepal. Format with clean structure.",
        }
      });

      const result = await chat.sendMessage({ message: query });
      const modelResponse: Message = { role: 'model', text: result.text || 'Service temporarily unavailable.' };
      setMessages(prev => [...prev, modelResponse]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "I encountered a minor issue. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[900px] mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gradient">Your personal Medical Mentor.</h2>
        <p className="text-gray-500 font-light text-lg">
          Expert guidance for your medical journey, rendered in crystalline clarity.
        </p>
      </div>

      <div className="liquid-glass rounded-[3.5rem] overflow-hidden border border-white/60 flex flex-col h-[650px] shadow-[0_40px_100px_rgba(0,0,0,0.08)]">
        {/* Chat Header */}
        <div className="px-10 py-6 border-b border-white/40 flex items-center justify-between backdrop-blur-xl">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold shadow-lg">
              M
            </div>
            <div>
              <p className="text-[17px] font-bold text-gray-900 leading-none">MBBS AI Mentor</p>
              <div className="flex items-center mt-1.5">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
                <span className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">Active System</span>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setMessages([{ role: 'model', text: "Chat history cleared. How else can I help?" }])}
            className="text-[10px] font-bold text-gray-400 hover:text-red-500 uppercase tracking-widest transition-colors px-4 py-2 rounded-full hover:bg-white/40"
          >
            Clear
          </button>
        </div>

        {/* Message List */}
        <div className="flex-1 overflow-y-auto p-8 md:p-10 space-y-8 scroll-smooth bg-white/10">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} fade-in`}
            >
              <div 
                className={`max-w-[85%] px-7 py-5 rounded-[2.2rem] text-[16px] leading-relaxed shadow-sm transition-all ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-white/80 text-gray-800 rounded-tl-none font-light backdrop-blur-md border border-white/60'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start fade-in">
              <div className="bg-white/60 px-8 py-5 rounded-[2.2rem] rounded-tl-none border border-white/60">
                <div className="flex space-x-1.5">
                  <div className="w-2 h-2 bg-blue-500/40 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-500/40 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                  <div className="w-2 h-2 bg-blue-500/40 rounded-full animate-bounce [animation-delay:-.5s]"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-6 md:p-8 bg-white/20 border-t border-white/40">
          <div className="relative flex items-center bg-white/70 backdrop-blur-xl rounded-full shadow-inner border border-white/80 overflow-hidden px-2 focus-within:ring-4 focus-within:ring-blue-100/50 transition-all">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && askMentor()}
              placeholder="Your question here..."
              className="flex-1 px-8 py-5 outline-none text-[16px] font-light text-gray-800 bg-transparent"
            />
            <button 
              onClick={askMentor}
              disabled={loading || !query.trim()}
              className="bg-black text-white p-4 m-1.5 rounded-full hover:scale-110 transition-all disabled:opacity-20 disabled:scale-100 group shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </button>
          </div>
          <p className="text-[10px] text-gray-400 text-center mt-5 uppercase tracking-[0.2em] font-bold">
            Liquid Intelligence • Gemini Powered
          </p>
        </div>
      </div>
    </div>
  );
};

export default MedicalMentor;
