import React from "react";

const ContactUs = () => {
  return (
    // <section className="min-h-screen bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 ">
    <section className="mb-6">
      <div className="container flex flex-col px-6">
        <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
          {/* w-full flex flex-col gap-4 */}
          <div className="text-white lg:w-1/2 lg:mx-6">
            <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
              Contact Us
            </h1>

            <p className="max-w-xl mt-2">
              Ask us everything and we would love to hear from you
            </p>

            <div className="mt-6 space-y-8 md:mt-8">
              {/* <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span className="mx-2 text-white truncate w-72">
                  Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522
                </span>
              </p> */}
              {/* <p className="flex items-start -mx-2">
                <svg
                  viewBox="-0.5 0 187 187"
                   className="w-6 h-6 mx-2 text-white"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g clip-path="url(#clip0)">
                      {" "}
                      <path
                        d="M8.84829 182.833C11.4115 182.494 13.9451 181.96 16.4271 181.235C16.9955 181.085 17.5625 180.935 18.1296 180.79C24.3504 179.196 31.0206 177.469 37.6536 175.626C41.3829 174.59 43.9545 174.986 46.5391 176.992C48.3047 178.364 50.5179 179.134 52.6575 179.88C53.1275 180.043 53.5948 180.208 54.0542 180.374C67.7287 185.372 81.8701 185.956 95.1308 185.829C96.706 185.927 98.2871 185.977 99.8728 185.976C115.661 185.976 131.843 181.134 146.966 171.844C164.1 161.318 175.673 146.057 181.362 126.484C185.99 110.557 186.23 93.0077 182.094 72.8345C177.05 48.222 163.646 29.2341 142.255 16.3896C131.976 10.2318 120.807 5.70121 109.143 2.95837C101.167 1.12996 92.9314 0.72977 84.8164 1.77678C74.913 2.93062 65.6923 5.88544 54.8956 9.96783C32.8695 18.2954 17.3571 34.4368 7.47004 59.3153C-0.865429 80.2925 -0.505172 103.487 8.60807 132.307C10.3552 137.833 10.5725 141.994 9.33397 146.222C7.69904 151.8 6.12909 157.494 4.60836 163.002C3.8877 165.616 3.1635 168.23 2.43584 170.843C2.30458 171.303 2.15826 171.762 2.00993 172.222C1.81303 172.824 1.61225 173.448 1.45342 174.083C0.762951 176.85 1.15071 179.257 2.54608 180.862C3.90273 182.421 6.14613 183.122 8.84829 182.833ZM18.8404 135.294C15.3212 125.757 14.0446 115.386 12.81 105.357C12.6656 104.184 12.5203 103.014 12.3742 101.843C10.7209 88.7395 12.017 76.3571 16.2268 65.0413C24.643 42.4127 38.4347 27.5146 58.388 19.4915C66.1682 16.3647 75.4479 13.0003 85.289 11.7526C100.232 9.85776 115.299 13.2477 132.703 22.42C146.814 29.857 157.041 39.6947 163.966 52.4933C168.367 60.7482 171.253 69.7254 172.487 78.9988C174.231 91.0584 175.522 105.384 171.876 120.177C167.451 138.141 157.551 151.629 141.612 161.409C128.473 169.561 113.255 173.735 97.7955 173.424C88.3442 173.285 80.0094 172.837 72.3211 172.052C65.2292 171.439 58.3605 169.268 52.2047 165.694C50.0425 164.312 47.5389 163.557 44.9731 163.514C43.7739 163.52 42.5806 163.685 41.4243 164.003C36.4893 165.325 31.4283 166.524 26.534 167.685C24.3182 168.21 22.103 168.739 19.8885 169.273C18.379 169.641 16.8695 170.021 15.0396 170.482L12.976 171C13.5621 168.843 14.1135 166.764 14.6491 164.742C16.0346 159.514 17.3439 154.577 18.8719 149.778C20.3493 145.142 20.9092 140.901 18.8404 135.294Z"
                        fill="#ffffff"
                      ></path>{" "}
                      <path
                        d="M34.4151 66.8566C35.7153 70.0615 37.2582 73.1627 39.0305 76.1333C52.2229 96.9839 66.9621 115.638 82.8435 131.575C87.9826 136.625 93.4578 141.322 99.2316 145.633C104.008 149.437 109.927 151.522 116.034 151.55C119.184 151.527 122.312 151.03 125.314 150.077C134.312 147.302 142.051 142.276 149.074 137.259C151.995 135.173 153.656 132.573 153.882 129.741C154.108 126.881 152.805 123.965 150.114 121.312C141.698 113.013 132.676 105.09 124.18 97.7642C119.144 93.4239 115.713 93.3582 110.065 97.4932C109.351 98.0182 108.659 98.5774 107.988 99.1202C107.448 99.558 106.909 99.9958 106.356 100.415C101.023 104.462 100.167 104.442 94.9247 100.162C93.2058 98.8164 91.6739 97.2464 90.3704 95.4946L89.4515 94.2023C86.3221 89.9624 83.4086 85.5669 80.7222 81.0329C75.184 71.2968 75.5608 69.8154 85.1965 63.4214C85.3343 63.3302 85.4334 63.1912 85.4754 63.0314C86.6785 58.4626 84.7167 55.4331 82.4175 52.8399C79.8532 49.9467 77.2922 47.0499 74.7338 44.1498C71.7987 40.8275 68.8602 37.507 65.92 34.1881C64.9801 33.1274 63.9509 32.1219 63.0648 31.2621C61.1398 29.4007 59.0238 29.0199 56.7719 30.1337C49.2162 33.8749 40.7927 38.8934 35.5978 47.7664C31.9807 53.9465 31.516 60.219 34.2148 66.4103L34.4151 66.8566ZM74.1057 61.0361C72.965 61.6481 71.9063 62.4028 70.9553 63.282C67.6079 66.6742 66.2756 71.0861 67.3861 75.0825C72.4222 93.2053 79.7745 104.792 91.2276 112.653C97.6538 117.063 104.239 117.036 110.803 112.573C112.822 111.2 114.766 109.703 116.824 108.119C117.648 107.483 118.496 106.831 119.379 106.162L139.524 127.73C131.901 133.76 125.32 137.108 118.263 138.56C116.05 139.073 113.744 139.045 111.543 138.48C109.342 137.913 107.309 136.826 105.617 135.307C104.197 134.058 102.773 132.811 101.344 131.566C95.2824 126.276 89.0144 120.802 83.3397 114.969C71.3779 102.666 60.2007 88.5873 49.1683 71.9275C48.0361 70.2177 47.0522 68.3465 46.0999 66.5383C45.7166 65.8092 45.3333 65.0805 44.9388 64.3585C42.0752 59.1111 42.6988 54.0081 46.7412 49.6021C49.1971 47.0306 51.7899 44.5933 54.5082 42.301C55.6752 41.2778 56.8762 40.2255 58.1147 39.1065L75.188 60.3817C74.8218 60.6101 74.4594 60.828 74.1057 61.0361Z"
                        fill="#ffffff"
                      ></path>{" "}
                    </g>{" "}
                    <defs>
                      {" "}
                      <clipPath id="clip0">
                        <rect
                          width="185.087"
                          height="185.744"
                          fill="white"
                          transform="translate(0.567627 0.773926)"
                        ></rect>{" "}
                      </clipPath>{" "}
                    </defs>{" "}
                  </g>
                </svg>
                <span className="mx-2 text-white truncate w-72">
                  Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522
                </span>
              </p> */}

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span className="mx-2 text-white truncate w-72">
                  {/* (257) 563-7401 */} +959785146940
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span className="mx-2 text-white truncate w-72">
                  sanshin739@gmail.com
                </span>
              </p>
            </div>

            <div className="mt-6 md:mt-8">
              <h3 className="text-gray-300 ">Follow us</h3>

              <div className="flex mt-2 -mx-1.5 ">
                {/* <a
                  className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                  href="#"
                >
                  <svg
                    className="w-10 h-10 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
                  </svg>
                </a>

                <a
                  className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                  href="#"
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z"
                      fill="currentColor"
                    />
                    <path
                      d="M7.2 9.6001H4V19.2001H7.2V9.6001Z"
                      fill="currentColor"
                    />
                    <path
                      d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z"
                      fill="currentColor"
                    />
                  </svg>
                </a> */}

                <a
                  className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                  href="https://www.facebook.com/profile.php?id=61568217312619&mibextid=ZbWKwL"
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>

                <a
                  className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                  href="https://www.instagram.com/sanshin739?igsh=ZGN3bWxnbnRrenY="
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                  href="https://www.tiktok.com/@sanshin028"
                >
                  <svg
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M16.8217 5.1344C16.0886 4.29394 15.6479 3.19805 15.6479 2H14.7293M16.8217 5.1344C17.4898 5.90063 18.3944 6.45788 19.4245 6.67608C19.7446 6.74574 20.0786 6.78293 20.4266 6.78293V10.2191C18.645 10.2191 16.9932 9.64801 15.6477 8.68211V15.6707C15.6477 19.1627 12.8082 22 9.32386 22C7.50043 22 5.85334 21.2198 4.69806 19.98C3.64486 18.847 2.99994 17.3331 2.99994 15.6707C2.99994 12.2298 5.75592 9.42509 9.17073 9.35079M16.8217 5.1344C16.8039 5.12276 16.7861 5.11101 16.7684 5.09914M6.9855 17.3517C6.64217 16.8781 6.43802 16.2977 6.43802 15.6661C6.43802 14.0734 7.73249 12.7778 9.32394 12.7778C9.62087 12.7778 9.9085 12.8288 10.1776 12.9124V9.40192C9.89921 9.36473 9.61622 9.34149 9.32394 9.34149C9.27287 9.34149 8.86177 9.36884 8.81073 9.36884M14.7244 2H12.2097L12.2051 15.7775C12.1494 17.3192 10.8781 18.5591 9.32386 18.5591C8.35878 18.5591 7.50971 18.0808 6.98079 17.3564"
                        stroke="currentColor"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* <div className="mt-8 lg:w-1/2 lg:mx-6">
            <div className="w-full px-6 py-8 mx-auto overflow-hidden border border-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
              <h1 className="text-xl font-medium text-white dark:text-gray-200">
                Contact form
              </h1>

              <form className="mt-4">
                <div className="flex-1">
                  <label className="block mb-2 text-sm text-white">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="block w-full px-5 py-3 mt-2 border border-gray-400 text-white rounded-md dark:bg-gray-900  focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring-2"
                  />
                </div>

                <div className="flex-1 mt-6">
                  <label className="block mb-2 text-sm text-white">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-3 mt-2 border border-gray-400 text-white rounded-md  focus:ring-opacity-40  focus:outline-none focus:ring-2"
                  />
                </div>

                <div className="w-full mt-6">
                  <label className="block mb-2 text-sm text-white">
                    Message
                  </label>
                  <textarea
                    className="min-w-20 block w-full h-32 px-5 py-3 mt-2 text-white placeholder-gray-400 border border-gray-200 rounded-md md:h-48  focus:ring-opacity-40  focus:outline-none focus:ring-2"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform border border-white rounded-md hover:bg-white hover:text-black focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                  get in touch
                </button>
              </form>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
