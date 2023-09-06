"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Ability() {
  return (
    <div className="m-8">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <div className="h-60 w-72 md:h-72 md:w-96 bg-[#f4f5f7] text-black rounded-2xl flex flex-col justify-center items-start p-4 gap-3">
            <span className="flex justify-start items-center gap-2">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.3125 25.0001C20.3125 22.4112 22.4111 20.3126 25 20.3126C27.5888 20.3126 29.6875 22.4112 29.6875 25.0001C29.6875 27.5889 27.5888 29.6876 25 29.6876C22.4111 29.6876 20.3125 27.5889 20.3125 25.0001Z"
                  fill="url(#paint0_linear_191_1821)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.8859 6.73399C19.9284 -0.423049 30.0713 -0.423051 32.1138 6.73399C32.7467 8.9515 35.0249 10.2668 37.2617 9.70614C44.4812 7.8965 49.5526 16.6805 44.3757 22.0279C42.7717 23.6848 42.7717 26.3154 44.3757 27.9722C49.5526 33.3196 44.4812 42.1037 37.2617 40.294C35.0249 39.7333 32.7467 41.0487 32.1138 43.2662C30.0713 50.4232 19.9284 50.4232 17.8859 43.2662C17.253 41.0487 14.9748 39.7333 12.7379 40.294C5.5185 42.1037 0.44704 33.3196 5.62396 27.9722C7.22795 26.3154 7.22795 23.6848 5.62396 22.0279C0.447042 16.6805 5.5185 7.8965 12.7379 9.70614C14.9748 10.2668 17.253 8.9515 17.8859 6.73399ZM25 17.1876C20.6852 17.1876 17.1875 20.6854 17.1875 25.0001C17.1875 29.3148 20.6852 32.8126 25 32.8126C29.3147 32.8126 32.8125 29.3148 32.8125 25.0001C32.8125 20.6854 29.3147 17.1876 25 17.1876Z"
                  fill="url(#paint1_linear_191_1821)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_191_1821"
                    x1="3.50745"
                    y1="48.6339"
                    x2="51.368"
                    y2="6.96666"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#4C2094" />
                    <stop offset="1" stop-color="#712EFF" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_191_1821"
                    x1="3.50745"
                    y1="48.6339"
                    x2="51.368"
                    y2="6.96666"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#4C2094" />
                    <stop offset="1" stop-color="#712EFF" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="text-2xl md:text-4xl">Simple</p>
            </span>
            <p className="text-xl md:text-2xl">
              Parch linux uses calamares graphical installer by default which
              makes it easier for you to install and use it.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="h-60 w-72 md:h-72 md:w-96 bg-[#f4f5f7] text-black rounded-2xl flex flex-col justify-center items-start p-4 gap-3">
            <span className="flex justify-start items-center gap-2">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.0208 14.5833C13.0208 7.96738 18.3841 2.60413 25 2.60413C31.6159 2.60413 36.9792 7.96738 36.9792 14.5833V16.9035C36.9792 17.0427 36.961 17.1776 36.9268 17.3061C39.9187 18.4054 42.2507 20.8191 43.2402 23.8644C43.75 25.4335 43.75 27.3723 43.75 31.25C43.75 35.1276 43.75 37.0665 43.2402 38.6356C42.2098 41.8068 39.7235 44.2931 36.5523 45.3235C34.9832 45.8333 33.0443 45.8333 29.1667 45.8333H20.8333C16.9556 45.8333 15.0168 45.8333 13.4477 45.3235C10.2765 44.2931 7.79022 41.8068 6.75983 38.6356C6.25 37.0665 6.25 35.1276 6.25 31.25C6.25 27.3723 6.25 25.4335 6.75983 23.8644C7.7493 20.8191 10.0813 18.4054 13.0732 17.3061C13.039 17.1776 13.0208 17.0427 13.0208 16.9035V14.5833ZM16.1458 16.7377C17.3328 16.6666 18.8223 16.6666 20.8333 16.6666H29.1667C31.1777 16.6666 32.6672 16.6666 33.8542 16.7377V14.5833C33.8542 9.69327 29.89 5.72913 25 5.72913C20.11 5.72913 16.1458 9.69327 16.1458 14.5833V16.7377ZM25 25.5208C25.8629 25.5208 26.5625 26.2204 26.5625 27.0833V35.4166C26.5625 36.2796 25.8629 36.9791 25 36.9791C24.1371 36.9791 23.4375 36.2796 23.4375 35.4166V27.0833C23.4375 26.2204 24.1371 25.5208 25 25.5208Z"
                  fill="url(#paint0_linear_191_1828)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_191_1828"
                    x1="6.25"
                    y1="45.8333"
                    x2="49.6905"
                    y2="9.75738"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#942050" />
                    <stop offset="1" stop-color="#FF2E54" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="text-2xl md:text-4xl">Privacy</p>
            </span>
            <p className="text-xl md:text-2xl">
              Unlike any other proprietary operating systems, Parch Linux
              respects your privacy and doesn't collect any information or data
              from you.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="h-60 w-72 md:h-72 md:w-96 bg-[#f4f5f7] text-black rounded-2xl flex flex-col justify-center items-start p-4 gap-3">
            <span className="flex justify-start items-center gap-2">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M46.8101 15.3423C48.0833 8.70361 42.2549 2.87523 35.6162 4.14844L16.5557 7.80395C12.4123 8.59859 9.09864 11.7349 8.04588 15.8103C5.94398 23.9469 13.4899 31.3833 21.5922 29.0006C21.8159 28.9348 22.0238 29.1426 21.958 29.3664C19.5753 37.4687 27.0116 45.0147 35.1483 42.9128C39.2237 41.86 42.36 38.5463 43.1547 34.4029L46.8101 15.3423Z"
                  fill="url(#paint0_linear_191_2014)"
                />
                <path
                  d="M10.3011 34.0284C10.9113 33.4182 10.9113 32.4289 10.3011 31.8187C9.69094 31.2085 8.70162 31.2085 8.09142 31.8187L5.14515 34.7649C4.53495 35.3751 4.53495 36.3645 5.14515 36.9747C5.75534 37.5848 6.74466 37.5848 7.35485 36.9747L10.3011 34.0284Z"
                  fill="url(#paint1_linear_191_2014)"
                />
                <path
                  d="M17.6668 33.2918C18.277 33.902 18.277 34.8913 17.6668 35.5015L14.7205 38.4478C14.1104 39.058 13.121 39.058 12.5108 38.4478C11.9006 37.8376 11.9006 36.8483 12.5108 36.2381L15.4571 33.2918C16.0673 32.6816 17.0566 32.6816 17.6668 33.2918Z"
                  fill="url(#paint2_linear_191_2014)"
                />
                <path
                  d="M19.14 42.8672C19.7502 42.257 19.7502 41.2677 19.14 40.6575C18.5298 40.0473 17.5405 40.0473 16.9303 40.6575L13.984 43.6038C13.3738 44.214 13.3738 45.2033 13.984 45.8135C14.5942 46.4237 15.5835 46.4237 16.1937 45.8135L19.14 42.8672Z"
                  fill="url(#paint3_linear_191_2014)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_191_2014"
                    x1="4.6875"
                    y1="46.2711"
                    x2="47.8875"
                    y2="4.91394"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#209471" />
                    <stop offset="1" stop-color="#2EFFD9" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_191_2014"
                    x1="4.6875"
                    y1="46.2711"
                    x2="47.8875"
                    y2="4.91394"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#209471" />
                    <stop offset="1" stop-color="#2EFFD9" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_191_2014"
                    x1="4.6875"
                    y1="46.2711"
                    x2="47.8875"
                    y2="4.91394"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#209471" />
                    <stop offset="1" stop-color="#2EFFD9" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_191_2014"
                    x1="4.6875"
                    y1="46.2711"
                    x2="47.8875"
                    y2="4.91394"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#209471" />
                    <stop offset="1" stop-color="#2EFFD9" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="text-2xl md:text-4xl">Fast</p>
            </span>
            <p className="text-xl md:text-2xl">
              Parch Linux requires at least 1.5 GB of RAM with xfce desktop and
              at least 1 GB with lxqt desktop Give your old system a second
              chance with Parch Linux.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="h-60 w-72 md:h-72 md:w-96 bg-[#f4f5f7] text-black rounded-2xl flex flex-col justify-center items-start p-4 gap-3">
            <span className="flex justify-start items-center gap-2">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M44.0771 32.2074C48.2309 24.2514 44.2767 14.814 39.7313 10.2686C31.5954 2.13269 18.4045 2.13269 10.2686 10.2686C2.13265 18.4045 2.13265 31.5955 10.2686 39.7314C15.0073 44.4701 24.2832 48.2633 32.2103 44.0821C33.0249 43.6524 33.4325 43.4374 33.6317 43.3573C34.4728 43.019 34.9153 42.9675 35.8116 43.1035C36.0239 43.1357 36.3016 43.2077 36.8569 43.3516C38.523 43.7835 39.3563 43.9995 39.9636 43.9776C42.147 43.899 43.8989 42.1471 43.9775 39.9636C43.9994 39.3564 43.7835 38.5233 43.3517 36.8573C43.2077 36.302 43.1357 36.0242 43.1036 35.8131C42.967 34.9168 43.0161 34.4871 43.3513 33.6448C43.4303 33.4464 43.6459 33.0334 44.0771 32.2074ZM18.4539 24.704C18.4539 25.8546 17.5212 26.7873 16.3706 26.7873C15.22 26.7873 14.2873 25.8546 14.2873 24.704C14.2873 23.5534 15.22 22.6207 16.3706 22.6207C17.5212 22.6207 18.4539 23.5534 18.4539 24.704ZM26.7873 24.704C26.7873 25.8546 25.8545 26.7873 24.7039 26.7873C23.5533 26.7873 22.6206 25.8546 22.6206 24.704C22.6206 23.5534 23.5533 22.6207 24.7039 22.6207C25.8545 22.6207 26.7873 23.5534 26.7873 24.704ZM33.0373 26.7873C34.1879 26.7873 35.1206 25.8546 35.1206 24.704C35.1206 23.5534 34.1879 22.6207 33.0373 22.6207C31.8867 22.6207 30.9539 23.5534 30.9539 24.704C30.9539 25.8546 31.8867 26.7873 33.0373 26.7873Z"
                  fill="url(#paint0_linear_191_1964)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_191_1964"
                    x1="4.16663"
                    y1="45.882"
                    x2="46.7684"
                    y2="5.14871"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#945020" />
                    <stop offset="1" stop-color="#FF862E" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="text-2xl md:text-4xl">Community</p>
            </span>
            <p className="text-xl md:text-2xl">
              Parch Linux in{" "}
              <a
                href="https://t.me/parchlinux"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Telegram
              </a>{" "}
              has an active community that will quickly solve your problems. If
              you have a bug or problem, you can report it in the community.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
