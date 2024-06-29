import React, { useEffect, useRef } from "react";
import { bg_Image } from "../utils/constants";
import openai from "../openAiConfig";
import { options, searchUrl, searchUrlext } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { langText } from "../utils/languageConstants";
import {
  addAiSearchResults,
  removeAiSearchResults,
} from "../utils/aiSearchSlice";
import Cards from "./Cards";

const AiSearchPage = () => {
  const search = useRef(null);

  const lang = useSelector((store) => store.langConfig.language);

  const dispatch = useDispatch();
  const searchReults = useSelector((store) => store.aiSearch.aiSearchResults);

  const fetchResults = async (result) => {
    const data = await fetch(`${searchUrl}${result}${searchUrlext}`, options);
    const json = await data.json();
    dispatch(addAiSearchResults(json.results[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchReults) {
      dispatch(removeAiSearchResults());
    }
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `Please provide the names of up to 5 movies based on the following query: ${search.current.value}. If the query is not related to movies, respond with "Incorrect request". Format the movie names as JSON-formatted array of strings`,
        },
      ],
      model: "gpt-3.5-turbo",
    });
    const moviesArray = JSON.parse(chatCompletion.choices[0].message.content);
    moviesArray.map((result) => fetchResults(result));
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <img
        className="relative top-0 w-[vw] h-[vh] object-fill opacity-70"
        src={bg_Image}
        alt="Background"
      />
      <div className="absolute top-[25vh] z-10 flex items-center justify-center w-full ">
        <div className="bg-black bg-opacity-80 p-8 rounded-md w-2/4">
          <form
            className="flex justify-center"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              placeholder={langText[lang].placeholder}
              ref={search}
              className="p-2 rounded bg-white bg-opacity-80 w-3/4"
            />
            <button className="ml-4 px-6 py-2 bg-red-700 text-white rounded">
              {langText[lang].search}
            </button>
          </form>
        </div>
      </div>
      {searchReults && (
        <div className="absolute top-[50vh] z-10 flex justify-center w-full">
          <div className="flex flex-wrap justify-center space-x-4">
            {searchReults.map((item) => (
              <Cards
                key={item.id}
                poster={item.poster_path}
                title={item.title}
                id={item.id}
                desc={item.overview}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AiSearchPage;
