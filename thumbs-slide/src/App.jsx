import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './app.css';

// import required modules
import { Parallax, FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function App() {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div className='container'>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          speed={600}
          parallax={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Parallax, FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            <div className='content-wrap'>
              <div className="title" data-swiper-parallax="-800">
                Slide 1
              </div>
              <div className="subtitle" data-swiper-parallax="-800">
                Subtitle
              </div>
              <div className="text" data-swiper-parallax="-900">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                  laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                  Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                  Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                  ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                  tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            <div className='content-wrap'>
              <div className="title" data-swiper-parallax="-300">
                Slide 1
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                Subtitle
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                  laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                  Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                  Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                  ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                  tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            <div className='content-wrap'>
              <div className="title" data-swiper-parallax="-300">
                Slide 1
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                Subtitle
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                  laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                  Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                  Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                  ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                  tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            <div className='content-wrap'>
              <div className="title" data-swiper-parallax="-300">
                Slide 1
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                Subtitle
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                  laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                  Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                  Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                  ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                  tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            <div className='content-wrap'>
              <div className="title" data-swiper-parallax="-300">
                Slide 1
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                Subtitle
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                  laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                  Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                  Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                  ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                  tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                </p>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>


        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          speed={600}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />

          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
        </Swiper>

      </div>

    </>
  );
}
