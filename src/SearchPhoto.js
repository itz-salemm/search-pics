import { useState } from 'react';
import { createApi } from 'unsplash-js';


export default function SearchPhotos() {
    const [query, setQuery] = useState("");
    const [pics, setPics] = useState([]);

    const unsplash = createApi({
        accessKey: 't7aR_b5u9K4L4J8UnmOvaRM3IXuYsGn7plmw4tOPfpA',
      });
 

    const searchPhotos = async (e) => {
        e.preventDefault();
        unsplash.search.getPhotos({
            query: query,
            page: 1,
            perPage: 10,
            color: 'green',
            orientation: 'portrait',
          })
          .then(result=>{setPics(result.response.results)});
      };
      

    

    return ( 
        <div>
            <form className="form" onSubmit={searchPhotos}>
                <label className="label" htmlFor="query">
                {" "}
                📷
                </label>
                <input
                type="text"
                name="query"
                className="input"
                placeholder={`Try "dog" or "apple"`}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit" className="button">
                Search
                </button>
            </form>

            <div className="card-list">
                {pics.map((pic) =>
                <div className="card" key={pic.id}>
                <img
                    className="card--image"
                    alt={pic.alt_description}
                    src={pic.urls.full}
                    width="50%"
                    height="50%"
                ></img>
                </div>)};
             
            </div>
      </div>
      
     );
}
 