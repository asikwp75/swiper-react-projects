import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperNavButton } from './components/SwiperNavigation';
import './App.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';



// import required modules
import { EffectFade, Parallax, FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div className='zb-container'>
        <div className="zb-post-slider-wrap">
          <Swiper
            loop={true}
            spaceBetween={0}
            speed={600}
            parallax={true}
            effect={'fade'}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[EffectFade, Parallax, FreeMode, Thumbs]}
            className="zb-post-main-slider-wrap">

            <SwiperSlide>
                <div className="zb-post-image-wrap">
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </div>
                <div className='zb-post-content-wrap'>
                     <div className="zb-post-category" data-swiper-parallax-y="-100">
                         <a href="#">Business</a>
                     </div>
                     <div className="zb-post-title" data-swiper-parallax-y="-80">
                        <a href="#">The Meticulous Writer’s 12-Point Blogging Checklist</a>
                     </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="zb-post-image-wrap">
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </div>
                <div className='zb-post-content-wrap'>
                     <div className="zb-post-category" data-swiper-parallax-y="-100">
                         <a href="#">Business</a>
                     </div>
                     <div className="zb-post-title" data-swiper-parallax-y="-80">
                        <a href="#">The Meticulous Writer’s 12-Point Blogging Checklist</a>
                     </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="zb-post-image-wrap">
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </div>
                <div className='zb-post-content-wrap'>
                     <div className="zb-post-category" data-swiper-parallax-y="-100">
                         <a href="#">Business</a>
                     </div>
                     <div className="zb-post-title" data-swiper-parallax-y="-80">
                        <a href="#">The Meticulous Writer’s 12-Point Blogging Checklist</a>
                     </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="zb-post-image-wrap">
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
              </div>
                <div className='zb-post-content-wrap'>
                     <div className="zb-post-category" data-swiper-parallax-y="-100">
                         <a href="#">Business</a>
                     </div>
                     <div className="zb-post-title" data-swiper-parallax-y="-80">
                        <a href="#">The Meticulous Writer’s 12-Point Blogging Checklist</a>
                     </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="zb-post-image-wrap">
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
              </div>
                <div className='zb-post-content-wrap'>
                     <div className="zb-post-category" data-swiper-parallax-y="-100">
                         <a href="#">Business</a>
                     </div>
                     <div className="zb-post-title" data-swiper-parallax-y="-80">
                        <a href="#">The Meticulous Writer’s 12-Point Blogging Checklist</a>
                     </div>
                </div>
            </SwiperSlide>

            <SwiperNavButton />
          </Swiper>

          <Swiper

            onSwiper={setThumbsSwiper}
            loop={true}
            speed={600}
            spaceBetween={10}
            slidesPerView={4}
            direction={'vertical'}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="zb-thumbs-slider-wrap">

            <SwiperSlide className='zb-post-slide-item'>
              <div className="zb-post-desc">
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in</p>
              </div>
              <div className="zb-post-meta">
                <div className="zb-post-author">
                  <span>by</span>
                  <a href="#">muhammad asik</a>
                </div>
                <div className="zb-post-date">
                  <span>july 9, 2023</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='zb-post-slide-item'>
              <div className="zb-post-desc">
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in</p>
              </div>
              <div className="zb-post-meta">
                <div className="zb-post-author">
                  <span>by</span>
                  <a href="#">muhammad asik</a>
                </div>
                <div className="zb-post-date">
                  <span>july 9, 2023</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='zb-post-slide-item'>
              <div className="zb-post-desc">
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in</p>
              </div>
              <div className="zb-post-meta">
                <div className="zb-post-author">
                  <span>by</span>
                  <a href="#">muhammad asik</a>
                </div>
                <div className="zb-post-date">
                  <span>july 9, 2023</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='zb-post-slide-item'>
              <div className="zb-post-desc">
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in</p>
              </div>
              <div className="zb-post-meta">
                <div className="zb-post-author">
                  <span>by</span>
                  <a href="#">muhammad asik</a>
                </div>
                <div className="zb-post-date">
                  <span>july 9, 2023</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='zb-post-slide-item'>
              <div className="zb-post-desc">
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in</p>
              </div>
              <div className="zb-post-meta">
                <div className="zb-post-author">
                  <span>by</span>
                  <a href="#">muhammad asik</a>
                </div>
                <div className="zb-post-date">
                  <span>july 9, 2023</span>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>

    </>
  );
}
