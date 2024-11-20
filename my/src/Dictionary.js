import React, {useState} from "react";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos";
import "./Dictionary.css";


export default function Dictionary(props){
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
   setResults(response.data[0])
  }
  function handlePhotosResponse(response){
    setPhotos(response.data.photos);
  }
 
  function search(){
    // documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    //documentation: https://www.shecodes.io/learn/apis/images
    let photosApiKey = `00c99d472fbddtac3e3b2d017a4afdbo`;
    let photosApiUrl = ` https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photosApiKey}`;
    axios.get(photosApiUrl).then(handlePhotosResponse);
  }

  function handleSubmit(event){
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event){
    setKeyword(event.target.value);
  }

  function load(){
    setLoaded(true);
    search();
  }

  if (loaded){
  return (
    <div className="Dictionary">
      <section>
        <h1>Which word are you looking for?</h1>
        <form onSubmit={handleSubmit}>
          <input 
          type="search" 
          onChange={handleKeywordChange} 
          defaultValue ={props.defaultKeyword} 
          />
        </form>
        <div className="hint">
          Suggested keywords: forest, honey, pharmacy....
          </div>
      </section>
      <Results results={results} />
      <Photos photos={photos}/>
    </div>
  );
  } else{
    load();
    return "loading..";
  }
}
