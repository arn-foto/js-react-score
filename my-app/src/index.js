import { AutoComplete } from 'antd';
import 'antd/dist/antd.css';
import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import App from "./App";

const { Option } = AutoComplete;

function SearchBar(props) {

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://labs28-d-citrics-api.herokuapp.com/cities/allid')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, [])
  
  return (
    <div className="search-bar"> 
      <AutoComplete
        className="search-bar"
        placeholder="Search for a city . . . ."    
        filterOption={true}
        style={{width:'100%'}}
      >
        {data.map((city) => {
          return (
            <Option key={city.cityid} value={city.citynamestate}>
              <p>{city.citynamestate}</p>
            </Option>  
          );
        })}
      </AutoComplete>   
    </div>
  );
}
export default SearchBar;

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("container")
);
