import Image from "next/image";
import Newsletter from "@/components/Newsletter";

import BrandsSection from "@/components/BrandSection";

import InfoBlock from "@/components/InfoBlock";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/FeaturesSection";
import Hero from "@/components/Hero";

export default function Home() {
  return (

    <div className="text-center">
      <Hero />
      <FeaturesSection />


      <p className="text-medium-gray text-sm tracking-wide mb-2 font-lato mt-3">ORDER YOUR TYRES EASILY</p>
      <h1 className="text-black font-bold text-4xl mx-auto font-poppins">B2B E-COMMERCE PLATFORM</h1>
      <p className="text-medium-gray text-base mt-4 font-lato">
        Streamlined tyre procurement for wholesalers: quick, easy, efficient, and competitive.
      </p>


      <div className="container mx-auto py-12 flex flex-col md:flex-row items-center justify-between relative">
        <div className="flex items-center space-x-4 response relative">
          <Image
            src="/images/tyremasterpc.png"
            alt="iMac showing the platform"
            width={509}
            height={488}
            className="object-contain"
          />
          <Image
            src="/images/phone.png"
            alt="Phone showing the platform"
            width={250}
            height={450}
            className="object-contain absolute left-96 top-80 mix-blend-multiply" // mix blend ekleyip arka planı ayarladım.
          />
        </div>


        <div className="md:w-1/2 text-left mt-8 md:mt-0">
          <p className="text-black mt-6 text-base leading-relaxed mb-6 font-arimo ">
            Experience effortless tyre procurement with our easy-to-use B2B platform. Designed for wholesalers, our site simplifies the ordering process, enabling you to efficiently browse, select, and place orders. Enjoy competitive pricing and a seamless transaction experience.
            With competitive pricing and a wide selection of tyres, we cater to all your business needs.

            Our streamlined ordering system saves you time, allowing you to focus on what matters most—growing your business. Join us today and experience the convenience of a platform designed specifically for tyre wholesalers. Simplify your procurement process and discover how easy ordering tyres can be!          </p>

          <div className="flex justify-start space-x-4 mt-8">
            <a
              href="#"
              className="bg-green text-white px-6 py-3  hover:text-white transition"
            >
              REGISTER NOW
            </a>
            <a
              href="#"
              className="border border-green text-green px-14 py-3 rounded-lg hover:bg-green-500 hover:text-white transition"
            >
              LOGIN
            </a>
          </div>
        </div>
      </div>


      <section className="py-16 bg-white  border-y border-light-silver-2 mt-40">

        <div className=" mx-auto responsive px-6 lg:px-8">
          <div className="text-center">
            <p className="text-medium-gray text-sm mb-3 font-lato pt-9">WHO WE ARE?</p>
            <h2 className="text-4xl font-bold text-black mb-4 font-poppins">ABOUT TYREMASTER</h2>
            <p className="text-gray text-base font-lato">
              There are many variations of tyres that you can find for your specific need.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start justify-between mt-12">
            <div className=" md:w-1/2 ml-12 pt-14">
              <h3 className="text-base font-bold text-black  font-arimo mb-9 text-left ">
                WE ARE TYREMASTER, YOUR TIRE SOURCING PLATFORM
              </h3>
              <p className="text-base text-black leading-8 font-arimo text-left">
                Tyre Master, your premier destination for tyres procurement in<br></br> Europe. Enjoy Welcome to a tire distribution experience you can rely<br></br> on.
              </p>
              <p className="text-base text-black leading-8 font-arimo text-left">
                Tyremaster is the seasoned European tyre sourcing platform with<br></br> strong industry expertise. We proudly offer a vast catalog of over<br></br> 50,000 tyre references, serving businesses across all European <br></br>regions with bulk sales capabilities. Trust in our experience and<br></br> comprehensive inventory to meet your wholesale tire needs<br></br> efficiently and reliably.
              </p>


              <div className="flex justify-start mt-10">
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-[210px] h-[52px] bg-green text-white font-arimo text-base transition"
                >
                  LEARN MORE
                </a>
              </div>
            </div>



            <div className="md:w-1/2 mt-24 md:mt-0 flex justify-center ml-48 ">



              <Image
                src="/images/tyremasterabout.png"
                alt="Tyremaster Office"
                width={606}
                height={404}
                className="rounded-lg shadow-lg mt-10"
              />
            </div>
          </div>

        </div>


      </section>


      <section className="py-16 bg-white   ">
        <div className=" mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-medium-gray text-sm mb-4 font-arimo">MORE ABOUT US</p>
            <h2 className="text-4xl font-bold text-black mb-4 font-arimo">WHY CHOOSE US</h2>
            <p className="text-medium-gray text-base font-arimo">Below you'll find the answers you're looking for</p>
          </div>



          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className=" p-8 flex items-center">
              <div className=" p-4 inline-block rounded-full mr-4">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1472_109)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3613 26.25L8.99876 34.6124C8.86024 33.5206 8.32806 32.5168 7.50206 31.7896C6.67607 31.0623 5.61302 30.6614 4.51248 30.6622C3.3163 30.6642 2.16968 31.1403 1.32385 31.9861C0.478025 32.8319 0.00198411 33.979 9.36017e-07 35.1752V45.4749C-0.00018815 45.7686 0.0282715 46.0619 0.0849924 46.3501C0.117846 46.5065 0.159588 46.6611 0.21 46.8127C0.2451 46.9398 0.286831 47.0648 0.335008 47.1875C0.407346 47.3594 0.490835 47.5263 0.584985 47.6874C0.634771 47.7906 0.690708 47.8911 0.752488 47.9877C0.896112 48.1992 1.05532 48.3998 1.22875 48.5876L1.30001 48.6627C1.30751 48.6627 1.31249 48.6749 1.31874 48.6749L1.32752 48.6877C1.53627 48.8927 1.7644 49.0768 2.00874 49.2377C2.10292 49.3068 2.20436 49.3651 2.31125 49.4122L2.44251 49.4873C2.54947 49.5539 2.66351 49.6089 2.78252 49.6503C2.9548 49.7188 3.13093 49.7768 3.31001 49.8248C3.41337 49.8596 3.5185 49.8892 3.62499 49.9127C3.92021 49.9736 4.22109 50.0027 4.52252 50H14.8225C15.7155 49.9987 16.588 49.7327 17.33 49.2358C18.072 48.739 18.6501 48.0334 18.9914 47.2083C19.3327 46.3831 19.4219 45.4754 19.2477 44.5996C19.0734 43.7238 18.6436 42.9193 18.0125 42.2876C17.3036 41.5805 16.3806 41.1275 15.3875 40.9998L23.75 32.6373C24.5968 31.7902 25.0726 30.6418 25.0726 29.444C25.0726 28.2462 24.5968 27.0971 23.75 26.25C22.8907 25.4259 21.7462 24.9658 20.5556 24.9658C19.365 24.9658 18.2205 25.4259 17.3613 26.25ZM21.9225 30.8124L9.18999 43.5376H14.8212C15.3375 43.5403 15.8317 43.747 16.1963 44.1125C16.4669 44.3827 16.6512 44.7269 16.726 45.1019C16.8007 45.4769 16.7626 45.8662 16.6163 46.2195C16.47 46.5728 16.2222 46.8744 15.9042 47.0868C15.5863 47.2992 15.2124 47.4129 14.83 47.4127H4.515C4.38618 47.4124 4.25768 47.3995 4.13124 47.3749L3.4475 47.0874C3.3553 47.0294 3.26906 46.9622 3.19 46.8872L3.14751 46.8378C3.04847 46.7472 2.96411 46.6418 2.89749 46.5253L2.61749 45.8624C2.59142 45.7349 2.57885 45.605 2.58 45.4749V35.1752C2.58114 34.7924 2.69539 34.4184 2.90836 34.1003C3.12134 33.7822 3.42354 33.5337 3.77705 33.3868C4.13056 33.2399 4.51962 33.2011 4.89533 33.2745C5.27103 33.348 5.61663 33.5308 5.88875 33.8C6.24965 34.1669 6.45247 34.6606 6.45374 35.1752V40.8002L19.1863 28.075C19.5536 27.7201 20.0443 27.522 20.555 27.522C21.0657 27.522 21.5564 27.7201 21.9238 28.075C22.1039 28.2531 22.2467 28.4654 22.3439 28.6993C22.4412 28.9333 22.4908 29.1839 22.49 29.4373C22.4912 29.6926 22.4417 29.9458 22.3442 30.1819C22.2468 30.4179 22.1035 30.6322 21.9225 30.8124ZM49.9925 4.41223C49.9871 4.15622 49.96 3.90129 49.9112 3.6499C49.8875 3.52675 49.8545 3.40552 49.8125 3.28735L49.7738 3.15002C49.7411 3.02626 49.6993 2.90504 49.6487 2.78748C49.5956 2.66272 49.5342 2.54158 49.465 2.42493L49.3988 2.29981C49.3502 2.20065 49.2955 2.10466 49.235 2.01233C48.9005 1.52091 48.4764 1.09686 47.985 0.76233C47.8887 0.702338 47.7889 0.648224 47.6862 0.599976L47.5462 0.524903C47.4419 0.45279 47.3289 0.39383 47.21 0.349732C47.085 0.299732 46.9437 0.249903 46.81 0.212403L46.67 0.175172C46.5664 0.138288 46.4603 0.108653 46.3525 0.087281C46.1728 0.0498729 45.9907 0.0247411 45.8075 0.0122077L45.4725 6.96772e-07H35.1662C34.0166 -0.000637297 32.9099 0.436877 32.0718 1.22376C31.2336 2.01063 30.727 3.08782 30.6551 4.23523C30.5832 5.38264 30.9515 6.51397 31.685 7.39929C32.4184 8.28462 33.4618 8.85741 34.6025 9.00025L26.25 17.3627C25.8306 17.7823 25.498 18.2805 25.2711 18.8287C25.0442 19.3769 24.9275 19.9646 24.9277 20.5579C24.928 21.7561 25.4043 22.9048 26.2519 23.7518C27.0994 24.5989 28.2487 25.0748 29.4469 25.0745C30.6452 25.0741 31.7942 24.5975 32.6413 23.75L41.0025 15.3876C41.142 16.4783 41.6739 17.481 42.4989 18.208C43.3239 18.935 44.3854 19.3366 45.485 19.3378C46.6825 19.3381 47.8311 18.8625 48.6784 18.0164C49.5257 17.1702 50.0024 16.0223 50.0037 14.8248L49.9925 4.41223ZM47.4163 14.8248C47.414 15.338 47.2091 15.8298 46.8462 16.1926C46.4834 16.5555 45.9919 16.7604 45.4787 16.7627C44.9655 16.761 44.4738 16.5563 44.111 16.1932C43.7482 15.8302 43.5438 15.3381 43.5425 14.8248V9.19983L30.8125 21.925C30.4416 22.2738 29.9516 22.4677 29.4425 22.4677C28.9334 22.4677 28.4434 22.2738 28.0725 21.925C27.7105 21.5615 27.5073 21.0691 27.5073 20.556C27.5073 20.043 27.7105 19.5512 28.0725 19.1876L40.8062 6.4502H35.1738C34.6616 6.4502 34.1703 6.24658 33.8081 5.8844C33.446 5.52222 33.2425 5.03124 33.2425 4.51904C33.2425 4.00684 33.446 3.51526 33.8081 3.15308C34.1703 2.7909 34.6616 2.58728 35.1738 2.58728H45.4813C45.615 2.5879 45.7485 2.60079 45.88 2.62512L46.5538 2.9126C46.7722 3.05588 46.9582 3.24314 47.1 3.46252L47.3788 4.13757C47.3993 4.26154 47.4101 4.38668 47.4112 4.51233V4.5874V14.8248H47.4163Z" fill="#1FCE6D" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1472_109">
                      <rect width="50" height="50" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

              </div>
              <div className="flex-grow">
                <h3 className="text-base font-bold font-poppins text-black">EXTENSIVE INVENTORY</h3>
                <p className="text-base text-gray leading-10 mt-2 font-arimo ">
                  Vast selection of top-quality tyres, covering a wide range of sizes and types.
                </p>
              </div>
            </div>


            <div className="bg-white p-6  flex items-center">
              <div className="bg-white p-4 inline-block rounded-full mr-6">
                <svg width="61" height="52" viewBox="0 0 61 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M54.188 21.1057V19.7516C54.193 18.7622 53.8048 17.8113 53.1088 17.1081C52.4128 16.4049 51.4661 16.007 50.4767 16.0018H38.1075V9.75212C38.1089 9.58865 38.0779 9.42651 38.0164 9.27506C37.9548 9.1236 37.8639 8.98575 37.7489 8.86957C37.6339 8.7534 37.4971 8.66117 37.3462 8.59811C37.1954 8.53504 37.0336 8.50238 36.8701 8.50211H33.1599V4.75233C33.1613 4.58885 33.1303 4.42671 33.0687 4.27526C33.0072 4.12381 32.9163 3.98608 32.8013 3.86991C32.6862 3.75373 32.5494 3.66138 32.3986 3.59831C32.2477 3.53525 32.0859 3.50271 31.9224 3.50244H15.1191L13.0067 1.36708C12.8927 1.25084 12.7566 1.15853 12.6065 1.09549C12.4563 1.03245 12.2951 1 12.1323 1C11.9695 1 11.8083 1.03245 11.6581 1.09549C11.508 1.15853 11.3719 1.25084 11.2579 1.36708L4.19885 8.50211H2.23644C2.07301 8.50238 1.91126 8.53503 1.76049 8.59811C1.60972 8.66119 1.47291 8.75351 1.35798 8.8697C1.24305 8.98589 1.15225 9.12361 1.09082 9.27506C1.02939 9.4265 0.998541 9.5887 1.00005 9.75212V44.7503C1.00003 45.0795 1.12986 45.3954 1.36135 45.6294C1.59284 45.8635 1.90729 45.9966 2.23644 46.0002H7.30911C7.49304 46.9053 7.8739 47.7588 8.42468 48.5001H5.94772C5.61621 48.5001 5.29829 48.6318 5.06388 48.8662C4.82947 49.1006 4.69778 49.4186 4.69778 49.7501C4.69778 50.0816 4.82947 50.3995 5.06388 50.6339C5.29829 50.8683 5.61621 51 5.94772 51H13.3775C14.8072 50.989 16.1895 50.4859 17.2917 49.5753C18.3939 48.6647 19.1488 47.4021 19.4293 46.0002H41.9438C42.1257 46.9059 42.5067 47.7598 43.0594 48.5001H40.5814C40.2499 48.5001 39.9319 48.6318 39.6975 48.8662C39.4631 49.1006 39.3314 49.4186 39.3314 49.7501C39.3314 50.0816 39.4631 50.3995 39.6975 50.6339C39.9319 50.8683 40.2499 51 40.5814 51H48.0112C49.4407 50.989 50.8229 50.4858 51.9249 49.5752C53.0269 48.6645 53.7816 47.402 54.0619 46.0002H59.1336C59.4631 45.9972 59.7781 45.8642 60.01 45.6301C60.2419 45.396 60.372 45.0798 60.372 44.7503V28.5012C60.3771 26.7376 59.7597 25.0289 58.6284 23.676C57.4971 22.3231 55.9246 21.4129 54.188 21.1057ZM30.686 6.00234V8.50211H20.0668L17.593 6.00234H30.686ZM12.1328 4.01282L13.7317 5.62725C13.7306 5.63063 13.7306 5.63429 13.7317 5.63767L16.567 8.50211H7.69762L12.1328 4.01282ZM13.3692 48.5001C12.6259 48.5079 11.8971 48.2947 11.2753 47.8875C10.6534 47.4803 10.1666 46.8974 9.87675 46.2129C9.58686 45.5285 9.50693 44.7733 9.64712 44.0434C9.7873 43.3134 10.1413 42.6415 10.6641 42.1131C11.1869 41.5847 11.8549 41.2236 12.5834 41.0757C13.3118 40.9278 14.0678 40.9997 14.7553 41.2823C15.4428 41.5649 16.0308 42.0455 16.4446 42.663C16.8584 43.2805 17.0794 44.007 17.0794 44.7503C17.0825 45.7389 16.6938 46.6885 15.9985 47.3912C15.3032 48.094 14.3578 48.4927 13.3692 48.5001ZM35.6337 17.2517V38.5006H27.2216C26.8901 38.5006 26.5722 38.6323 26.3378 38.8667C26.1034 39.1011 25.9717 39.419 25.9717 39.7505C25.9717 40.082 26.1034 40.4001 26.3378 40.6345C26.5722 40.8689 26.8901 41.0005 27.2216 41.0005H35.6337V43.5004H19.4293C19.1569 42.093 18.4031 40.8243 17.2973 39.912C16.1915 38.9997 14.8027 38.5009 13.3692 38.5009C11.9357 38.5009 10.5469 38.9997 9.4411 39.912C8.33532 40.8243 7.58155 42.093 7.30911 43.5004H3.47389V23.5014H8.42155C8.75305 23.5014 9.07098 23.3697 9.30539 23.1353C9.5398 22.9009 9.67148 22.583 9.67148 22.2515C9.67148 21.92 9.5398 21.6021 9.30539 21.3677C9.07098 21.1333 8.75305 21.0015 8.42155 21.0015H3.47389V18.5017H18.3158C18.6473 18.5017 18.9653 18.3699 19.1997 18.1355C19.4341 17.9011 19.5658 17.5832 19.5658 17.2517C19.5658 16.9202 19.4341 16.6023 19.1997 16.3679C18.9653 16.1335 18.6473 16.0018 18.3158 16.0018H3.47389V11.002H35.6337V17.2517ZM41.9438 43.5004H38.1075V41.0005H43.0594C42.5067 41.7408 42.1257 42.5947 41.9438 43.5004ZM51.7141 44.7503C51.7065 45.4823 51.4827 46.1956 51.0707 46.8006C50.6587 47.4056 50.077 47.8753 49.3988 48.1506C48.7205 48.4258 47.976 48.4944 47.2589 48.3476C46.5418 48.2009 45.8841 47.8453 45.3686 47.3257C44.853 46.8061 44.5026 46.1457 44.3615 45.4275C44.2203 44.7093 44.2947 43.9653 44.5753 43.2892C44.8558 42.6132 45.33 42.0351 45.9382 41.6279C46.5465 41.2206 47.2615 41.0024 47.9935 41.0005H48.006C48.9931 41.0063 49.9376 41.4032 50.6327 42.1041C51.3278 42.805 51.7166 43.7528 51.7141 44.7399V44.7503ZM57.8982 43.5004H54.063C53.7849 42.096 53.0297 40.8309 51.9254 39.9196C50.8211 39.0084 49.4356 38.507 48.0039 38.5006H38.1086V18.5017H50.4767C50.806 18.505 51.1208 18.638 51.3525 18.8721C51.5842 19.1061 51.7142 19.4222 51.7141 19.7516V21.0015H43.0552C42.7261 21.005 42.4116 21.1383 42.1801 21.3724C41.9486 21.6064 41.8188 21.9223 41.8188 22.2515V33.5008C41.8188 33.83 41.9486 34.1459 42.1801 34.38C42.4116 34.614 42.7261 34.7473 43.0552 34.7509H57.8982V43.5004ZM46.7665 23.5014V32.251H44.2926V23.5014H46.7665ZM57.8982 32.251H49.2403V23.5014H52.9505C54.2693 23.5094 55.531 24.0403 56.4586 24.9777C57.3863 25.9151 57.904 27.1824 57.8982 28.5012V32.251ZM22.3792 41.0005H23.1521C23.4836 41.0005 23.8015 40.8689 24.0359 40.6345C24.2703 40.4001 24.402 40.082 24.402 39.7505C24.402 39.419 24.2703 39.1011 24.0359 38.8667C23.8015 38.6323 23.4836 38.5006 23.1521 38.5006H22.3792C22.0477 38.501 21.7299 38.6331 21.4958 38.8678C21.2617 39.1025 21.1304 39.4207 21.1308 39.7522C21.1312 40.0837 21.2633 40.4014 21.498 40.6355C21.7327 40.8696 22.0508 41.0009 22.3823 41.0005H22.3792ZM22.3792 18.5017H23.1521C23.4836 18.5017 23.8015 18.3699 24.0359 18.1355C24.2703 17.9011 24.402 17.5832 24.402 17.2517C24.402 16.9202 24.2703 16.6023 24.0359 16.3679C23.8015 16.1335 23.4836 16.0018 23.1521 16.0018H22.3792C22.0477 16.0022 21.7299 16.1343 21.4958 16.369C21.2617 16.6037 21.1304 16.9217 21.1308 17.2532C21.1312 17.5847 21.2633 17.9025 21.498 18.1367C21.7327 18.3708 22.0508 18.5021 22.3823 18.5017H22.3792Z" fill="#1FCE6D" stroke="white" stroke-width="0.8" />
                </svg>

              </div>
              <div className="flex-grow">
                <h3 className="text-base font-bold font-arimo">RELIABLE DELIVERY</h3>
                <p className="text-base text-medium-gray leading-8 mt-2">
                  Count on us for dependable and timely delivery to keep your operations running smoothly.
                </p>
              </div>
            </div>


            <div className="bg-white p-6  flex items-center">
              <div className="bg-white p-4 inline-block rounded-full mr-6">
                <svg width="55" height="52" viewBox="0 0 55 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.284 4.42799V20.1488L35.2799 44.1447L51.0007 28.424L27.0048 4.42799H11.284ZM7.85599 4.42799C7.85599 3.51883 8.21715 2.64691 8.86003 2.00404C9.5029 1.36116 10.3748 1 11.284 1H27.0048C27.9139 1.00019 28.7856 1.36148 29.4284 2.0044L53.4243 26.0004C54.067 26.6432 54.428 27.515 54.428 28.424C54.428 29.3329 54.067 30.2047 53.4243 30.8476L37.7035 46.5683C37.0607 47.211 36.1889 47.572 35.2799 47.572C34.371 47.572 33.4992 47.211 32.8564 46.5683L8.86039 22.5724C8.21747 21.9296 7.85618 21.0579 7.85599 20.1488V4.42799Z" stroke="white" />
                  <path d="M19.854 14.712C19.3994 14.712 18.9634 14.5314 18.642 14.21C18.3206 13.8885 18.14 13.4526 18.14 12.998C18.14 12.5434 18.3206 12.1074 18.642 11.786C18.9634 11.4646 19.3994 11.284 19.854 11.284C20.3085 11.284 20.7445 11.4646 21.066 11.786C21.3874 12.1074 21.568 12.5434 21.568 12.998C21.568 13.4526 21.3874 13.8885 21.066 14.21C20.7445 14.5314 20.3085 14.712 19.854 14.712ZM19.854 18.14C21.2177 18.14 22.5256 17.5982 23.4899 16.6339C24.4542 15.6696 24.996 14.3617 24.996 12.998C24.996 11.6342 24.4542 10.3264 23.4899 9.36204C22.5256 8.39773 21.2177 7.85599 19.854 7.85599C18.4902 7.85599 17.1823 8.39773 16.218 9.36204C15.2537 10.3264 14.712 11.6342 14.712 12.998C14.712 14.3617 15.2537 15.6696 16.218 16.6339C17.1823 17.5982 18.4902 18.14 19.854 18.14ZM4.42799 21.8628C4.42819 22.7719 4.78948 23.6436 5.4324 24.2864L30.995 49.8489L30.8475 49.9963C30.2047 50.639 29.3329 51 28.424 51C27.515 51 26.6432 50.639 26.0004 49.9963L2.0044 26.0004C1.36148 25.3576 1.00019 24.4859 1 23.5768L1 7.85599C1 6.94683 1.36116 6.0749 2.00404 5.43203C2.64691 4.78916 3.51883 4.42799 4.42799 4.42799V21.8628Z" stroke="white" />
                </svg>


               

                </div>
                <div className="flex-grow">

                  <h3 className="text-base font-bold font-poppins text-black">COMPETITIVE PRICING</h3>

                  <p className="text-base text-medium-gray leading-8 mt-2 font-arimo">
                    We offer competitive pricing, ensuring that you get the best value for your investment.
                  </p>
                </div>
              </div>



              <div className="bg-white p-6  flex items-center">
                <div className="bg-white p-4 inline-block rounded-full mr-6">
                  <svg width="42" height="52" viewBox="0 0 42 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 4.33333C16.5797 4.33333 12.3405 6.08928 9.21489 9.21489C6.08928 12.3405 4.33333 16.5797 4.33333 21V24.3333H7.66667C8.55072 24.3333 9.39857 24.6845 10.0237 25.3096C10.6488 25.9348 11 26.7826 11 27.6667V37.6667C11 38.5507 10.6488 39.3986 10.0237 40.0237C9.39857 40.6488 8.55072 41 7.66667 41H4.33333C3.44928 41 2.60143 40.6488 1.97631 40.0237C1.35119 39.3986 1 38.5507 1 37.6667V21C1 18.3736 1.51732 15.7728 2.52241 13.3463C3.5275 10.9198 5.00069 8.71504 6.85786 6.85786C8.71504 5.00069 10.9198 3.5275 13.3463 2.52241C15.7728 1.51732 18.3736 1 21 1C23.6264 1 26.2272 1.51732 28.6537 2.52241C31.0802 3.5275 33.285 5.00069 35.1421 6.85786C36.9993 8.71504 38.4725 10.9198 39.4776 13.3463C40.4827 15.7728 41 18.3736 41 21V41C41 43.2101 40.122 45.3298 38.5592 46.8926C36.9964 48.4554 34.8768 49.3333 32.6667 49.3333H25.5533C25.2608 49.8401 24.84 50.2608 24.3333 50.5534C23.8266 50.846 23.2518 51 22.6667 51H19.3333C18.4493 51 17.6014 50.6488 16.9763 50.0237C16.3512 49.3986 16 48.5507 16 47.6667C16 46.7826 16.3512 45.9348 16.9763 45.3096C17.6014 44.6845 18.4493 44.3333 19.3333 44.3333H22.6667C23.2518 44.3334 23.8266 44.4874 24.3333 44.7799C24.84 45.0725 25.2608 45.4933 25.5533 46H32.6667C33.9928 46 35.2645 45.4732 36.2022 44.5355C37.1399 43.5979 37.6667 42.3261 37.6667 41H34.3333C33.4493 41 32.6014 40.6488 31.9763 40.0237C31.3512 39.3986 31 38.5507 31 37.6667V27.6667C31 26.7826 31.3512 25.9348 31.9763 25.3096C32.6014 24.6845 33.4493 24.3333 34.3333 24.3333H37.6667V21C37.6667 18.8113 37.2356 16.644 36.398 14.6219C35.5604 12.5998 34.3328 10.7625 32.7851 9.21489C31.2375 7.66724 29.4002 6.43959 27.3781 5.60201C25.356 4.76443 23.1887 4.33333 21 4.33333Z" fill="#1FCE6D" stroke="white" stroke-width="0.8" />
                  </svg>

                </div>
                <div className="flex-grow mr-4">
                  <h3 className="text-base font-bold font-public-sans text-black">EXCEPTIONAL SERVICE</h3>
                  <p className="text-base text-medium-gray leading-8 mt-2 font-arimo">
                    You can trust us to be responsive, knowledgeable, and ready to assist you.
                  </p>
                </div>
              </div>


              <div className="bg-white p-6  flex items-center">
                <div className="bg-white p-4 inline-block rounded-full mr-6">
                  <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1472_122)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M50.48 47.713H0.47998V22.8414C0.47998 22.5618 0.591014 22.2941 0.788731 22.0964C0.986448 21.8987 1.25462 21.7874 1.53423 21.7874C1.81385 21.7874 2.08202 21.8987 2.27973 22.0964C2.47745 22.2941 2.58857 22.5618 2.58857 22.8414V45.6274H48.3714V22.7556C48.3714 22.476 48.4825 22.2083 48.6802 22.0106C48.8779 21.8129 49.1461 21.7016 49.4257 21.7016C49.7053 21.7016 49.9735 21.8129 50.1712 22.0106C50.3689 22.2083 50.48 22.476 50.48 22.7556V47.713ZM24.4242 22.0845V4.47015C24.4343 4.19706 24.5498 3.93853 24.7466 3.74888C24.9434 3.55924 25.206 3.45312 25.4793 3.45312C25.7526 3.45312 26.0151 3.55924 26.2119 3.74888C26.4086 3.93853 26.5242 4.19706 26.5342 4.47015V22.0845H34.4428C34.6695 22.0542 34.9001 22.0714 35.1199 22.1348C35.3396 22.1981 35.5438 22.3065 35.7196 22.4528C35.8954 22.5992 36.0389 22.7804 36.141 22.9851C36.2431 23.1897 36.3016 23.413 36.3129 23.6415C36.2968 24.1191 36.1104 24.575 35.7872 24.927L27.2457 34.9842C27.0325 35.2474 26.7631 35.46 26.4574 35.6057C26.1517 35.7515 25.8173 35.8269 25.4786 35.8269C25.1399 35.8269 24.8054 35.7515 24.4997 35.6057C24.1939 35.46 23.9247 35.2474 23.7114 34.9842L15.1671 24.927C14.845 24.5746 14.6595 24.1187 14.6442 23.6415C14.6557 23.4132 14.7144 23.1902 14.8164 22.9858C14.9185 22.7813 15.0619 22.5998 15.2374 22.4535C15.413 22.3072 15.6169 22.199 15.8364 22.1355C16.0559 22.0719 16.2863 22.0547 16.5129 22.0845H24.4242ZM17.2814 24.1702L25.3271 33.6561C25.3427 33.6821 25.3648 33.7032 25.3912 33.7182C25.4176 33.7332 25.4474 33.7412 25.4778 33.7412C25.5082 33.7412 25.5381 33.7332 25.5645 33.7182C25.5909 33.7032 25.613 33.6821 25.6286 33.6561L33.6714 24.1702H17.2871H17.2814Z" fill="#1FCE6D" stroke="white" stroke-width="0.8" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1472_109">
                        <rect width="50" height="50" fill="white" transform="translate(0.47998 0.570312)" />
                      </clipPath>
                    </defs>
                  </svg>

                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold font-poppins text-black">EXPERIENCE THE DIFFERENCE</h3>
                  <p className="text-base text-medium-gray leading-8 mt-2 font-arimo">
                    Explore our extensive catalog, and get your quote. Your success is our priority.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6  flex items-center">
                <div className="bg-white p-4 inline-block rounded-full mr-6">
                  <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1472_126)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M47.231 5.11757H4.70723C3.73117 5.10359 2.78946 5.47721 2.08875 6.15683C1.38804 6.83645 0.98558 7.76647 0.969727 8.7425V35.9814C0.98558 36.9574 1.38804 37.8869 2.08875 38.5665C2.78946 39.2461 3.73117 39.6203 4.70723 39.6063H21.5152C21.5432 40.9745 21.3118 42.3353 20.8333 43.6174H17.9356C17.7774 43.6174 17.6208 43.6484 17.4747 43.709C17.3285 43.7695 17.2397 43.8585 17.1792 43.9703C17.1187 44.0822 17.0876 44.2148 17.0876 44.373C17.0876 44.5312 17.1187 44.688 17.1792 44.8341C17.2397 44.9803 17.3285 45.1129 17.4747 45.1734C17.6208 45.2339 17.7774 45.265 17.9356 45.265H34.0038C34.162 45.265 34.3186 45.2339 34.4648 45.1734C34.6109 45.1129 34.7437 45.0239 34.8555 44.9121C34.9674 44.8003 35.0561 44.6677 35.1167 44.5115C35.1772 44.3553 35.2084 44.1985 35.2084 44.0303C35.2084 43.8721 35.1772 43.7153 35.1167 43.5691C35.0561 43.4229 34.9674 43.2903 34.8555 43.1577C34.7437 43.0251 34.6109 42.9361 34.4648 42.8756C34.3186 42.8151 34.162 42.784 34.0038 42.784H31.1061C30.6277 41.5019 30.3963 40.1411 30.4243 38.7729H47.231C48.2069 38.786 49.1483 38.4119 49.849 37.7325C50.5497 37.0531 50.9527 36.1236 50.9697 35.1476V8.7425C50.9527 7.76666 50.5497 6.83733 49.849 6.15794C49.1483 5.47854 48.2069 5.10449 47.231 5.11757ZM49.0266 35.9814C49.023 36.2135 48.9737 36.4425 48.8815 36.6555C48.7893 36.8686 48.6561 37.0611 48.4893 37.2226C48.3226 37.3841 48.1255 37.5113 47.9096 37.5966C47.6937 37.6819 47.4631 37.7237 47.231 37.7198H4.70723C4.47488 37.724 4.24402 37.6823 4.0278 37.5971C3.81157 37.512 3.61422 37.3852 3.44713 37.2237C3.28004 37.0622 3.14646 36.8693 3.05401 36.6561C2.96156 36.4429 2.91205 36.2137 2.90836 35.9814V33.6177H49.0266V35.9814ZM2.90947 31.7428V8.7425C2.91635 8.27202 3.10966 7.82382 3.44692 7.49572C3.78418 7.16762 4.23785 6.98638 4.70834 6.99245H47.231C47.701 6.98699 48.154 7.1682 48.4906 7.49627C48.8272 7.82434 49.02 8.27252 49.0266 8.7425V31.7428H2.90947Z" fill="#1FCE6D" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1472_126">
                        <rect width="50" height="50" fill="white" transform="translate(0.969727 0.570312)" />
                      </clipPath>
                    </defs>
                  </svg>

                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold font-arimo ">TYRE PROCUREMENT</h3>
                  <p className="text-base text-medium-gray leading-8 mt-2 font-arimo" >
                    We've streamlined the ordering process, making it easy for you to get the tyres you need.
                  </p>
                </div>
              </div>
            </div>


          </div>
          <div className="pb-7 border-b border-light-silver-2 mt-12 xl:mt-20">
            <div className="w-[92%] xl:w-[83%] mx-auto">
              <div className="flex items-center flex-col gap-2.5  mx-auto">
                <p className="text-base text-medium-gray uppercase font-arimo">SEE OUR COLLECTION</p>
                <p className="text-black text-4xl font-semibold uppercase text-center font-arimo">HOW WE WORK</p>
                <p className="text-center text-gray text-base font-arimo">There are many variations of passages of lorem ipsum available.</p>
              </div>

              <div className="flex flex-col xl:flex-row xl:divide-x divide-[#818181]/20 mt-10 justify-center xl:space-x-12">

                <div className="flex items-center text-left px-12">
                  <span className="text-black text-7xl xl:text-6xl font-bold mr-2 font-lato">01.</span>
                  <div className="flex flex-col gap-2 max-w-xs">
                    <p className="text-black text-lg font-semibold font-arimo">SELECT YOUR TYRES</p>
                    <p className="text-gray font-arimo text-base">Use the shop page or the product<br></br> catalog to select your tyres.</p>
                  </div>
                </div>

                <div className="flex items-center text-left px-12">
                  <span className="text-black text-7xl xl:text-6xl font-bold mr-2 font-lato">02.</span>
                  <div className="flex flex-col gap-2 max-w-xs">
                    <p className="text-black text-lg font-semibold font-arimo">PLACE YOUR ORDER</p>
                    <p className=" text-gray text-base font-arimo">Directly from the checkout or<br></br> by getting in touch with us.</p>
                  </div>
                </div>

                <div className="flex items-center text-left px-12">
                  <span className="text-black text-7xl xl:text-6xl font-bold mr-2">03.</span>
                  <div className="flex flex-col gap-2 max-w-xs">
                    <p className="text-black text-lg font-semibold font-arimo">RECEIVE YOUR ORDER</p>
                    <p className=" text-gray font-arimo text-base">Receive your B2B order once<br></br> your order is confirmed.</p>
                  </div>
                </div>


              </div>
            </div>
          </div>



          <Newsletter />
          <BrandsSection />





      </section>
    </div>


  );
}