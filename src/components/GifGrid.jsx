import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  
const { images, isLoading } = useFetchGifs( category );

//  console.log({ isLoading });

  
  
  return (
    <>
        <h3>{ category }</h3>
        {
          isLoading && (<h2>Cargando...</h2>)
        }
        <div className="card-grid">
            { images.map ((image) =>(
              <GifItem 
                key={image.id}
                {...image}
              />
              
            ))
            }
        </div>
        
    </>
  )
}



// const gifs = [1,2,3,4,5];
{/* {
  gifs.map( gif => (
    <p>{ gif }</p>
  ))
} */}

{/* <div key={ category }>
                        <h3>{ category }</h3>
                        <li>{category}</li>
                    </div> */}