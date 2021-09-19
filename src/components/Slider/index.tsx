import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";

interface IProp {
  bannerList: any[];
}

const Slider: React.FC<IProp> = (props) => {
  const [sliderSwiper, setSliderSwiper] = useState<object>();
  const { bannerList } = props;

  useEffect(() => {
    if (bannerList.length && !sliderSwiper) {
      // 配置 Swiper
      let newSliderSwiper = new Swiper(".swiper-container", {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: { el: ".swiper-pagination" },
      });
      // 又重新给 sliderSwiper 赋值
      setSliderSwiper(newSliderSwiper);
    }
    // 只当 bannerList.length 或 sliderSwiper 改变时触发这个 useEffect()
  }, [bannerList.length, sliderSwiper]);

  return (
    <div>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {bannerList.map((slider, index) => {
            return (
              <div className="swiper-slide" key={index}>
                <img
                  src={slider.imageUrl}
                  width="100%"
                  height="100%"
                  alt="推荐"
                />
              </div>
            );
          })}
        </div>
        {/* 分页器结构 */}
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

// 如果你的组件在相同 props 的情况下渲染相同的结果，那么你可以通过将其包装在 React.memo 中
// 调用，以此通过记忆组件渲染结果的方式来提高组件的性能表现
export default React.memo(Slider);
