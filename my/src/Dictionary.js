import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(){
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
   console.log(response.data);
  }
 
  

  function search(event){
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);

    let apiKey = "00c99d472fbddtac3e3b2d017a4afdbo";
    let apiUrl =
    `https://api.shecodes.io/dictionary/v1/define?${keyword}&key=${apiKey}`;
      axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event){
    setKeyword(event.target.value);

  }
  return( 
    <div className= "Dictionary">
      <form onSubmit={search}>
       <input type="search" onChange= {handleKeywordChange}/>

    </form>
  </div>
  );
}
