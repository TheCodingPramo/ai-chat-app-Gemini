import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
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
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. A esse, accusamus aperiam commodi amet repudiandae dolor placeat optio eos excepturi asperiores numquam reprehenderit sequi? Similique, ipsam tempore. Illo, culpa fugit?
                    Veniam sapiente, voluptate mollitia quam distinctio expedita ipsa, non dolores voluptates porro illum saepe blanditiis tempore odit atque necessitatibus consequuntur quis laudantium eligendi vero dicta animi nulla similique! Quia, consequatur.
                    Nulla culpa molestias quis commodi neque amet facilis tempore pariatur? Consectetur voluptates et fugiat nostrum laudantium numquam ipsa amet, accusamus quia, obcaecati unde rerum, sunt quo enim velit? Facilis, eaque!
                    Ea aliquid dolorem repellendus iusto maiores, vel animi molestiae ex doloremque odio illum ipsam sequi perspiciatis sed sit. Quidem molestias sequi quia impedit, provident perspiciatis soluta recusandae? Ratione, molestiae reiciendis.
                    Doloribus porro aperiam, natus laborum excepturi dicta voluptatibus nesciunt illum sit alias molestiae laudantium quaerat dolorum praesentium suscipit totam provident laboriosam quasi unde. Repellat earum qui fuga rerum saepe voluptatibus.
                    Nemo velit quo, ipsum vel accusantium quaerat repudiandae voluptas iste hic nulla, repellendus autem dolor possimus ea quod perspiciatis sint iure veritatis officia. Labore voluptate nesciunt fuga? Maxime, voluptate nam?
                    Nam, expedita, nulla repellendus nihil pariatur exercitationem incidunt delectus reprehenderit nesciunt dicta tenetur voluptate ipsa eveniet? Accusantium iure, ea expedita architecto unde perspiciatis mollitia quos quaerat asperiores atque illo vel.
                    Esse itaque illum ad beatae eveniet ullam aperiam quis iste est eos accusantium nulla, voluptatum porro nostrum quas voluptas exercitationem odit consectetur unde blanditiis doloribus, maiores aliquid. Maiores, sunt quisquam!
                    Tempora odio dolores temporibus doloremque impedit architecto doloribus quibusdam commodi velit ea, provident quo rerum illo veritatis! Dolorum, maiores est accusamus deleniti illo, possimus tenetur, totam sed velit quo repellendus.
                    Accusantium officia laboriosam vero sed, rerum beatae libero nemo. Saepe, quas fuga dolore similique, at libero quae voluptates ipsum expedita quasi sunt vel hic soluta dolorum magnam. Enim, eos nesciunt.
                    Rem repudiandae earum, quam voluptatibus reprehenderit, consequatur quibusdam magni est hic voluptatum optio esse aspernatur possimus error repellendus molestiae exercitationem sapiente in libero ex debitis. Accusantium voluptatem incidunt ullam doloribus.
                    Atque et natus aperiam exercitationem dicta, rerum excepturi id in consequuntur rem neque, porro cumque quo hic quaerat. Soluta voluptatum delectus, assumenda dignissimos ratione blanditiis numquam praesentium temporibus commodi explicabo.
                    Accusantium natus aliquam sunt officia totam placeat ratione quos voluptate necessitatibus, temporibus neque quae in, maxime consequuntur? Voluptatibus alias aspernatur incidunt sequi vero molestias blanditiis? Magnam doloremque ipsa aspernatur. Assumenda.
                    Voluptatibus harum eaque quisquam ab dicta totam cum neque vel debitis, sit in, magnam perspiciatis aspernatur? Quo distinctio quibusdam beatae, eos voluptatibus et aperiam? Vero dolores ex odit cupiditate repellat!
                    Eaque sed a id dolor autem, tempore eius at ipsum obcaecati quod odio dolores dicta velit, doloribus quaerat in esse dignissimos illum. Culpa deleniti eos maxime ipsum. Harum, eligendi inventore!
                    Ipsam consectetur voluptatem fuga dolores hic, obcaecati facere, possimus, quidem vitae quia a? Velit, quod, facere totam hic aspernatur quae, ipsam dignissimos unde eaque laudantium eligendi? Distinctio quibusdam quasi velit.
                    Quas voluptatem nam neque corrupti vel quisquam sint qui harum accusamus ratione sunt, aspernatur aliquid rem cumque in itaque praesentium pariatur, autem esse nesciunt dolor. Exercitationem doloribus impedit quaerat libero.
                    Maiores optio velit quis pariatur, magni natus sit dolorem porro ducimus quae amet consequuntur aperiam consequatur, nostrum error voluptatibus numquam quisquam, molestiae ipsam iure ab debitis odit dolores in? Natus!
                    Expedita tempora ducimus modi placeat dignissimos reiciendis molestias in fugiat cumque, quasi voluptates earum reprehenderit consectetur aut! Quisquam, quasi quas iure quia nisi vero sed animi temporibus, corrupti impedit eius.
                    Culpa, tempore, assumenda pariatur ad perferendis esse asperiores id atque deserunt molestiae vero ab iure quos soluta eos? Numquam tempore eius doloremque voluptatem perferendis officia cumque aliquam inventore. Tenetur, excepturi.
                    Sunt repudiandae aspernatur saepe qui quidem est sapiente eveniet tempora. Iusto molestias doloribus consectetur impedit. Repellat modi aspernatur saepe accusamus quod dolores veritatis nam, eum quis amet, incidunt, molestias harum?
                    Atque architecto aut consectetur deleniti odio quia quos accusantium consequuntur corporis veniam beatae nemo unde nihil ut quibusdam animi voluptate aspernatur cupiditate quod, facilis fugiat sunt soluta corrupti praesentium. Aut.
                    Distinctio, maxime harum cupiditate cumque nulla animi, eligendi autem similique consequatur aliquid aperiam dolor explicabo neque, eaque et esse quaerat voluptatum numquam laborum blanditiis! Officia eligendi error nobis atque autem?
                    Qui repellat quo vel inventore nobis aspernatur sequi velit eaque distinctio culpa atque sed, asperiores fuga ducimus dolores officiis nihil autem voluptas! Aliquid, velit sapiente! Exercitationem similique eos aut at!
                    Ab pariatur sunt soluta dignissimos vitae dolor laboriosam omnis, nihil quaerat non expedita qui eum illo quod odit iusto doloremque nostrum eos architecto, ipsum rerum earum. Veniam reiciendis fugiat fuga.
                </p>
            </div>
        </div>
    );
}

function Homepage() {

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

    return (
        <div className='w-lvw flex justify-center p-10 h-lvh'>
            <div className='p-2 flex flex-col w-2/3 gap-8'>
                <h1 className='font-bold text-4xl'>Chatbot by Pramo</h1>

                {/* conversation area */}
                <div className='flex w-full h-3/4 overflow-x-hidden items-end'>
                    <div className='flex w-full flex-col gap-4 overflow-y-auto max-h-[100%] no-scrollbar'>
                        {messages.map((message, index) => (
                            <MsgComponent key={index} type={message.type} content={message.content} />
                        ))}
                        <MsgComponent/>
                    </div>
                </div>

                <div className='w-full flex gap-3'>
                    <input type="text" placeholder='Enter your message...' className='outline-none border rounded-lg p-3 w-full shadow-md focus:shadow-green-100 transition' onChange={handleChange} value={prompt} />

                    <div className='flex justify-center items-center aspect-square w-14 rounded-full hover:border hover:border-green-500 hover:bg-green-100 transition duration-200 active:bg-green-300' onClick={handleSubmit}>
                        <SendIcon color='success' />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Homepage
