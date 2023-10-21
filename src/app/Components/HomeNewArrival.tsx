import React,{useState,useEffect} from 'react'
import ImageCard from './ImageCard'
import { db } from '../firebase/config'
import { collection,getDocs } from 'firebase/firestore';
import ImageCardSlider from './ImageCarousel';

export default function HomeNewArrival() {
    const [products, setProducts] = useState([{}]);
    const getProducts = async () => {
        const dbRef = collection(db, "Products");
        const response = await getDocs(dbRef);
        const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setProducts(data);
      };
      useEffect(() => {
        getProducts();
      }, []);
  return (
    

    <ImageCardSlider>
        {products?.map((item: any) => {
            return (
                // <div className='px-2 md:mx-10 border-2 border-red-600' key={item.id}  >
                //     <ImageCard
                //       image={item.imageulr}
                //       id={item.id}
                //     />
                // </div>
                <ImageCard
                key={item.id}
                      image={item.imageulr}
                      id={item.id}
                    />
            );
          })}
    </ImageCardSlider>
  )
}
