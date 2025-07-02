import Restuarntcard from "./Restuarntcard";
import resList from "../utils/mockData";
import { useState,useEffect } from "react";
import mockDataNew from "../utils/2ndMockData";

 


const Body = () =>{

  

// Local  state varriable  - super powerful varriable

const [listRestuarnt,setListRestuarnt] = useState(resList);
 

useEffect( ()=>{
      fetchData();
},[]);
const fetchData = async () => {
 const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

 const json = await data.json(); 
console.log(json);
 //setListRestuarnt(json.data.cards);
};
     

    return (
          <div className="body">
                <div className="filtter">
                   <button className="filtter-btn" onClick= {()=> {
                    

                   const filteredList = listRestuarnt.filter((res)=>res.avgRating >=4.4);
                    setListRestuarnt(filteredList);
                  
                   }}>Top Rated Restuarants</button>
                   
                   </div>
                <div className="res-container"> 
                 {listRestuarnt.map((restuarnt)=>
                 (<Restuarntcard key={restuarnt.id} resData={restuarnt}/>)
                )}
                 </div>
          </div>
    )};

    
    export default Body;
