import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { API_KEY } from '../util/apiKey';
import './Homepage.css'

const KEY = API_KEY;

function MsgComponent({ type, content }) {

    return (
        <div className={`flex flex-wrap w-full ${type === 'get' ? 'justify-start' : 'justify-end'} `}>
            <div className={`flex flex-wrap max-w-[75%] rounded-lg p-2 ${type === 'get' ? 'bg-green-100' : 'bg-slate-100'} text-wrap break-all `} >
                <p className='text-wrap text-left'>
                    {content}
                </p>
            </div>
        </div>
    );
}

function Homepage() {

    const scrollDownRef = useRef(null)

    const [prompt, setPrompt] = useState('');
    // const [response, setResponse] = useState('');
    const [messages, setMessages] = useState([]);

    const handleChange = (event) => {
        setPrompt(event.target.value);
    };

    const handleSubmit = async () => {
        if (!prompt) return;

        // Initialize Google Generative AI client
        const genAI = new GoogleGenerativeAI(API_KEY);

        // Get the generative model for chat
        const genModel = genAI.getGenerativeModel({ model: 'gemini-pro' });

        // Start a chat session
        const chat = await genModel.startChat({
            generationConfig: {
                maxOutputTokens: 1000, // adjust based on desired response length
            },
        });

        try {
            // Send user message to chat and get response
            const res = await chat.sendMessage(prompt);
            const textResponse = await res.response.text();
            // setResponse(textResponse);

            setMessages(prevMessages => [
                ...prevMessages,
                { type: 'send', content: prompt },
                { type: 'get', content: textResponse.replace(/\*/g, '') },
            ]);

        } catch (error) {
            console.error('Error:', error);
            // setResponse('Something went wrong. Try again later.');

            setMessages(prevMessages => [
                ...prevMessages,
                { type: 'send', content: prompt },
                { type: 'get', content: 'Something went wrong. Try again later.' },
            ]);
        } finally {
            // Clean up chat session (optional)
            // await chat.endChat();
            setPrompt('')
        }
    };

    useEffect(() => {
        if (scrollDownRef.current) {
            scrollDownRef.current.scrollTop = scrollDownRef.current.scrollHeight;
            scrollDownRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    return (
        <div className='w-lvw flex justify-center p-10 h-lvh'>
            <div className='p-2 flex flex-col w-2/3 gap-8'>
                <h1 className='font-bold text-4xl'>Chatbot by Pramo</h1>

                {/* conversation area */}
                <div className='flex w-full h-3/4 overflow-x-hidden items-end'>
                    <div ref={scrollDownRef} className='flex w-full flex-col gap-4 overflow-y-auto max-h-[100%] no-scrollbar'>
                        {messages.map((message, index) => (
                            <MsgComponent key={index} type={message.type} content={message.content} 
                            />
                        ))}
                    </div>
                </div>

                <div className='w-full flex gap-3'>
                    <input type="text" placeholder='Enter your message...' className='outline-none border rounded-lg p-3 w-full shadow-md focus:shadow-green-100 transition' onChange={handleChange} value={prompt} onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            event.preventDefault();
                            handleSubmit();
                            setPrompt('');
                        }
                        
                    }} />

                    <div className='flex justify-center items-center aspect-square w-14 rounded-full hover:border hover:border-green-500 hover:bg-green-100 transition duration-200 active:bg-green-300' onClick={handleSubmit}>
                        <SendIcon color='success' />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Homepage
