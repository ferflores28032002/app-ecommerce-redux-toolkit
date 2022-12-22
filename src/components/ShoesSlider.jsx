import { useQuery } from "react-query";
import { shoes } from "../api/ProductsEcommerce";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { BsPlus, BsStarHalf } from "react-icons/bs";
import "swiper/css/bundle";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/CarritoSlices";
import { AiFillStar } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";

export const ShoesSlider = () => {
  const { data, isLoading, error, isError } = useQuery("[shoes]", shoes);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto px-4 bg-indigo-50 py-20">
      <Swiper
        className=" overflow-hidden rounded"
        loop={true}
        watchSlidesProgress
        slidesPerView={5}
        spaceBetween={10}
        modules={[Autoplay]}
        autoplay={{ delay: 1600 }}
        breakpoints={{
          0: {
            spaceBetween: 10,
            slidesPerView: 1,
          },
          480: {
            spaceBetween: 10,
            slidesPerView: 2,
          },
          768: {
            spaceBetween: 10,
            slidesPerView: 3,
          },
          1024: {
            spaceBetween: 10,
            slidesPerView: 4,
          },
          1280: {
            spaceBetween: 10,
            slidesPerView: 5,
          },
        }}
      >
        {data?.data?.productos?.map((img, i) => (
          <SwiperSlide className="shadow-lg border rounded" key={i}>
            <div className="relative rounded">
              <img src={img.image_logo} />
              <div className="absolute px-2 flex  justify-between w-full pb-3 leading-10 left-0 bottom-0">
                <div className="text-sm">
                  <p>{img.name}</p>
                  <div className="flex text-yellow-400 mt-1 text-sm ">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <BsStarHalf />
                  </div>
                  <div className="mt-1">
                    <p>$ {img.price}</p>
                  </div>
                </div>

                <button className="" onClick={() => dispatch(addToCart(img))}>
                  <BsPlus className="text-3xl shadow text-yellow-500" />
                </button>
              </div>
              <div className="absolute top-0 right-0 p-3">
                <CiHeart className="text-xl text-yellow-500" />
              </div>
              <div className="absolute px-2 py-1 left-0 top-0 m-2 rounded-2xl text-sm text-white bg-red-300">
                <p>-30% </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div></div>
    </div>
  );
};
