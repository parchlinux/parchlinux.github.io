"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslations } from 'next-intl';

export default function Ability() {
  const t = useTranslations('Index');
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
          <div className="h-60 w-72 md:h-72 md:w-96 bg-[#f4f5f7] text-black rounded-2xl flex flex-col justify-center items-center text-center p-4 gap-3">
            <div className="flex justify-center items-center gap-2">
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
              <p className="text-2xl md:text-4xl">{t("Simple")}</p>
            </div>
            <p className="text-xl md:text-2xl">
              {t("SimpleExpanded")}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-60 w-72 md:h-72 md:w-96 bg-[#f4f5f7] text-black rounded-2xl flex flex-col justify-center items-center text-center p-4 gap-3">
            <div className="flex justify-center items-center gap-2">
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
              <p className="text-2xl md:text-4xl">{t("Privacy")}</p>
            </div>
            <p className="text-xl md:text-2xl">
              {t("PrivacyExpanded")}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-60 w-72 md:h-72 md:w-96 bg-[#f4f5f7] text-black rounded-2xl flex flex-col justify-center items-center text-center p-4 gap-3">
            <div className="flex justify-center items-center gap-2">
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
              <p className="text-2xl md:text-4xl">{t("Fast")}</p>
            </div>
            <p className="text-xl md:text-2xl">
              {t("FastExpanded")}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-60 w-72 md:h-72 md:w-96 bg-[#f4f5f7] text-black rounded-2xl flex flex-col justify-center items-center text-center p-4 gap-3">
            <div className="flex justify-center items-center gap-2">
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
              <p className="text-2xl md:text-4xl">{t("Community")}</p>
            </div>
            <p className="text-xl md:text-2xl">
              {t("CommunityExpanded")}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-60 w-72 md:h-72 md:w-96 bg-[#f4f5f7] text-black rounded-2xl flex flex-col justify-center items-center text-center p-4 gap-3">
            <div className="flex justify-center items-center gap-2">
              <svg width="55" height="55" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_273_3991)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.183 13.5369C10 17.918 10 24.1676 10 36.6667V43.3334C10 55.8325 10 62.082 13.183 66.4631C14.211 67.878 15.4553 69.1223 16.8702 70.1503C21.2513 73.3334 27.5009 73.3334 40 73.3334C52.4991 73.3334 58.7487 73.3334 63.1298 70.1503C64.5447 69.1223 65.789 67.878 66.817 66.4631C70 62.082 70 55.8325 70 43.3334V36.6667C70 24.1676 70 17.918 66.817 13.5369C65.789 12.122 64.5447 10.8777 63.1298 9.84974C58.7487 6.66669 52.4991 6.66669 40 6.66669C27.5009 6.66669 21.2513 6.66669 16.8702 9.84974C15.4553 10.8777 14.211 12.122 13.183 13.5369Z" fill="url(#paint0_linear_273_3991)" />
                  <path d="M12.7785 13.243C11.1148 15.533 10.3033 18.2887 9.90079 22.0037C9.5 25.703 9.5 30.4122 9.5 36.6348V36.6667V43.3334V43.3652C9.5 49.5879 9.5 54.2971 9.90079 57.9963C10.3033 61.7113 11.1148 64.467 12.7785 66.757C13.8374 68.2144 15.119 69.496 16.5764 70.5548C18.8663 72.2186 21.6221 73.0301 25.337 73.4326C29.0363 73.8334 33.7455 73.8334 39.9681 73.8334H40H40.0319C46.2545 73.8334 50.9637 73.8334 54.663 73.4326C58.3779 73.0301 61.1337 72.2186 63.4236 70.5548C64.881 69.496 66.1626 68.2144 67.2215 66.757C68.8852 64.467 69.6967 61.7113 70.0992 57.9963C70.5 54.2971 70.5 49.5879 70.5 43.3653V43.3334V36.6667V36.6348C70.5 30.4122 70.5 25.703 70.0992 22.0037C69.6967 18.2887 68.8852 15.533 67.2215 13.243C66.1626 11.7857 64.881 10.5041 63.4236 9.44523C61.1337 7.78146 58.3779 6.96997 54.663 6.56748C50.9637 6.16668 46.2545 6.16669 40.0319 6.16669H40H39.9681C33.7455 6.16669 29.0363 6.16668 25.337 6.56748C21.6221 6.96997 18.8663 7.78146 16.5764 9.44523C15.119 10.5041 13.8374 11.7857 12.7785 13.243Z" stroke="url(#paint1_linear_273_3991)" stroke-linecap="round" />
                </g>
                <g filter="url(#filter1_d_273_3991)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M26.6666 24.1667C25.2859 24.1667 24.1666 25.286 24.1666 26.6667C24.1666 28.0474 25.2859 29.1667 26.6666 29.1667H53.3333C54.714 29.1667 55.8333 28.0474 55.8333 26.6667C55.8333 25.286 54.714 24.1667 53.3333 24.1667H26.6666ZM26.6666 37.5C25.2859 37.5 24.1666 38.6193 24.1666 40C24.1666 41.3807 25.2859 42.5 26.6666 42.5H53.3333C54.714 42.5 55.8333 41.3807 55.8333 40C55.8333 38.6193 54.714 37.5 53.3333 37.5H26.6666ZM26.6666 50.8334C25.2859 50.8334 24.1666 51.9526 24.1666 53.3334C24.1666 54.7141 25.2859 55.8334 26.6666 55.8334H36.6666C38.0473 55.8334 39.1666 54.7141 39.1666 53.3334C39.1666 51.9526 38.0473 50.8334 36.6666 50.8334H26.6666Z" fill="url(#paint2_linear_273_3991)" />
                </g>
                <defs>
                  <filter id="filter0_b_273_3991" x="-15" y="-18.3333" width="110" height="116.667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="12" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_273_3991" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_273_3991" result="shape" />
                  </filter>
                  <filter id="filter1_d_273_3991" x="21.1666" y="21.1667" width="47.6666" height="47.6667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="5" dy="5" />
                    <feGaussianBlur stdDeviation="4" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.176471 0 0 0 0 0.556863 0 0 0 0 0.678431 0 0 0 0.5 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_273_3991" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_273_3991" result="shape" />
                  </filter>
                  <linearGradient id="paint0_linear_273_3991" x1="10" y1="73.3334" x2="77.4028" y2="15.2585" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#209471" />
                    <stop offset="1" stop-color="#2EFFD9" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_273_3991" x1="10" y1="6.66669" x2="76.3249" y2="66.2986" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" stop-opacity="0.25" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="paint2_linear_273_3991" x1="40.2666" y1="62.5797" x2="83.9717" y2="19.738" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="text-2xl md:text-4xl">{t("OpenSource")}</p>
            </div>
            <p className="text-xl md:text-2xl">
              {t("OpenSourceExpanded")}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
