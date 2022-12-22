import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { productsId } from "../api/ProductsEcommerce";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, EffectFade, Autoplay } from "swiper";
import "swiper/css/bundle";

export const ProductsId = () => {
  const { id } = useParams();
  const [movimiento, setMovimiento] = useState(null);

  const { data, isLoading } = useQuery(["productsId", id], () =>
    productsId(id)
  );

  if (isLoading) {
    return <h1>is Loading ...</h1>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col lg:flex-row gap-4">
        <Swiper
          className="w-96 rounded"
          loop={true}
          modules={[Navigation, Thumbs, EffectFade, Autoplay]}
          thumbs={{ swiper: movimiento }}
          effect="fade"
          autoplay={{ delay: 1200 }}
        >
          {data?.data.product.imagenes?.map((img, i) => (
            <SwiperSlide key={i}>
              <img src={img.url} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex flex-col justify-between border">
          <h1>hola</h1>
          <div className="border flex items-end">
            <Swiper
              className="w-96 rounded"
              loop={true}
              onSwiper={setMovimiento}
              watchSlidesProgress
              slidesPerView={3}
              spaceBetween={10}
            >
              {data?.data?.product?.imagenes?.map((img, i) => (
                <SwiperSlide key={i}>
                  <img src={img.url} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
