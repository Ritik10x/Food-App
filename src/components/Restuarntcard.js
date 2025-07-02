import { CDN_URl } from "../utils/constants";

const Restuarntcard = (props) =>
    { const {resData} = (props);
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla :{deliveryTime}
    } = resData || {};
          return(
                <div className="res-card">
                      <img className="res-logo" alt= "res-logo" src={CDN_URl + cloudinaryImageId} />
                <h3> {name}</h3> 
                <h4> {cuisines.join(" ," )}</h4>
                <h4>{avgRating}</h4>
                <h4>{costForTwo   }</h4>
                <h4>{deliveryTime} mins</h4>
                </div>
          )
    };
    export default Restuarntcard;