import React, { useRef } from 'react';
import BgImage from './BgImage';
import openai from '../openAiConfig';

const AiSearchPage = () => {
  const search = useRef(null);

  const handleSubmit = async(e) => {
    // console.log(search.current.value);
    e.preventDefault();
    console.log('Form submitted');
    console.log('Search input value:', search.current.value);
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: `Please provide the names of up to 5 movies based on the following query: ${search.current.value}. If the query is not related to movies, respond with "Incorrect request". Format the movie names as an array of strings`
      }],
        model: 'gpt-3.5-turbo',
      });

      console.log(chatCompletion.choices[0].message.content);
  }
  

  return (
    <div className="relative w-full h-screen">
      <BgImage />
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="bg-black bg-opacity-80 p-8 rounded-md w-2/4">
          <form className="flex justify-center" onSubmit={(e) => handleSubmit(e)}>
            <input
              placeholder="Ask ChatGPT for Suggestions"
              ref={search}
              className=" p-2 rounded bg-white bg-opacity-80 w-3/4"
            />
            <button className="ml-4 p-2 bg-red-700 text-white rounded">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AiSearchPage;
