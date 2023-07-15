@extends('site.layouts.base')

@section('main')
    <div class="max-w-[88rem] mx-auto relative z-10 flex flex-col min-h-screen bg-white dark:bg-gray-900 dark:text-gray-400">
        <main class="grow">
            <main class="pt-6 pb-8 bg-white lg:pb-16 dark:bg-gray-900">
                <div class="flex justify-between px-4 mx-auto max-w-8xl">
                    <div class="hidden mb-6 xl:block lg:w-80">
                        <div class="sticky top-36">
                            <aside>
                                <div
                                    class="p-6 mb-6 font-medium text-gray-500 bg-white rounded-lg border border-gray-200 dark:bg-slate-800 dark:border-gray-700 dark:text-gray-400">
                                    <h3 class="mb-2 font-bold text-gray-900 uppercase dark:text-white">Flowbite Blog</h3>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">Blog posts, articles, and tutorials
                                        about web
                                        development and design.</p>
                                </div>
                                <div
                                    class="p-6 mb-6 font-medium text-gray-500 bg-white rounded-lg border border-gray-200 dark:bg-slate-800 dark:border-gray-700 dark:text-gray-400">
                                    <h4 class="mb-4 font-bold text-gray-900 uppercase dark:text-white">Resources</h4><a
                                        class="inline-flex justify-center items-center p-5 mb-4 w-full text-base font-medium text-gray-500 bg-gray-50 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white"
                                        href="https://flowbite.com/docs/getting-started/introduction/"><svg
                                            aria-hidden="true" class="mr-3 w-5 h-5" viewBox="0 0 32 32" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M24.5199 12.9424C24.4458 13.4528 24.1092 14.1463 23.723 14.7492C23.2358 15.51 22.4627 16.0428 21.5779 16.2278L17.6802 17.0429C17.0537 17.1739 16.4857 17.5017 16.0592 17.9785L13.5035 20.8352C13.0232 21.3721 12.6875 21.244 12.6875 20.5239C12.6817 20.5506 11.4191 23.8067 14.7651 25.7366C16.0507 26.4782 17.9013 26.2117 19.1869 25.4702L25.9988 21.5411C28.5463 20.0717 30.345 17.5859 30.9428 14.7084C30.9665 14.5946 30.9848 14.4803 31.0045 14.3662L24.5199 12.9424Z"
                                                fill="url(#paint0_linear_4151_62980)"></path>
                                            <path
                                                d="M22.7528 9.01774C24.0384 9.75928 24.5637 10.8633 24.5637 12.3464C24.5637 12.5477 24.5479 12.7466 24.5194 12.9425L27.2641 14.1215L31.004 14.3663C31.4829 11.5948 30.5444 8.74202 28.862 6.47445C27.5959 4.768 25.9667 3.28713 24.0081 2.15738C22.417 1.23966 20.7636 0.635005 19.1025 0.303223L17.2361 2.72023L16.6465 5.49559L22.7528 9.01774Z"
                                                fill="url(#paint1_linear_4151_62980)"></path>
                                            <path
                                                d="M0.783353 11.0516C0.782654 11.0537 0.784588 11.0544 0.785316 11.0522C0.929339 10.6202 1.10993 10.1383 1.33539 9.62344C2.5131 6.93406 4.78262 5.14038 7.57467 4.22583C10.3667 3.31131 13.4153 3.63188 15.9599 5.09963L16.6463 5.49553L19.1023 0.303168C11.2907 -1.25701 3.30703 3.33229 0.793284 11.0215C0.792083 11.0251 0.787713 11.038 0.783353 11.0516Z"
                                                fill="url(#paint2_linear_4151_62980)"></path>
                                            <path
                                                d="M18.9201 25.4702C17.6345 26.2117 16.0506 26.2117 14.765 25.4702C14.5904 25.3695 14.4259 25.2563 14.2703 25.1338L12.0093 26.6883L10.0605 29.8374C12.2236 31.6374 15.0324 32.2161 17.8392 31.8943C19.9515 31.6521 22.0498 30.9829 24.0084 29.8532C25.5995 28.9355 26.9503 27.8073 28.0685 26.5359L26.9065 23.7126L25.0265 21.948L18.9201 25.4702Z"
                                                fill="url(#paint3_linear_4151_62980)"></path>
                                            <path
                                                d="M14.2694 25.1339C13.2789 24.3537 12.6864 23.157 12.6864 21.8752V21.7474V11.0722C12.6864 10.4685 12.8643 10.3659 13.3876 10.6677C12.5816 10.2028 10.7195 8.60676 8.42044 9.9329C7.13484 10.6744 6.07617 12.3113 6.07617 13.7944V21.6526C6.07617 24.5915 7.59833 27.657 9.79375 29.613C9.88059 29.6904 9.97049 29.7633 10.0596 29.8375L14.2694 25.1339Z"
                                                fill="url(#paint4_linear_4151_62980)"></path>
                                            <path
                                                d="M27.9097 5.31206C27.9081 5.31036 27.9066 5.31173 27.9081 5.31343C28.2106 5.65404 28.538 6.05126 28.8716 6.50375C30.614 8.8674 31.2651 11.8611 30.6618 14.734C30.0586 17.607 28.2564 20.0843 25.7118 21.5521L25.0254 21.948L28.0674 26.5359C33.3256 20.5574 33.3392 11.3552 27.9308 5.3357C27.9282 5.33282 27.9193 5.32262 27.9097 5.31206Z"
                                                fill="url(#paint5_linear_4151_62980)"></path>
                                            <path
                                                d="M6.34355 13.7944C6.34354 12.3113 7.13551 10.9408 8.42113 10.1993C8.59564 10.0986 8.77601 10.0129 8.96002 9.93951L8.74304 7.20603L7.21861 4.07861C4.57671 5.05005 2.4397 7.05766 1.31528 9.64708C0.469097 11.5957 9.792e-06 13.7458 0 16.0052C0 17.8407 0.302549 19.5735 0.845532 21.1767L3.87391 21.583L6.34355 20.8387V13.7944Z"
                                                fill="url(#paint6_linear_4151_62980)"></path>
                                            <path
                                                d="M8.96016 9.93951C10.1317 9.47264 11.4653 9.5584 12.5764 10.1993L12.6872 10.2632L21.5826 15.3941C22.2066 15.754 22.1499 16.1082 21.4446 16.2557L21.9578 16.1484C22.633 16.0072 23.2499 15.6621 23.7217 15.1592C24.5328 14.2946 24.8306 13.2515 24.8306 12.3463C24.8306 10.8632 24.0386 9.49274 22.753 8.7512L15.9411 4.82209C13.3936 3.35267 10.3395 3.03934 7.54622 3.96083C7.43572 3.99727 7.32756 4.0386 7.21875 4.07861L8.96016 9.93951Z"
                                                fill="url(#paint7_linear_4151_62980)"></path>
                                            <path
                                                d="M19.3224 31.6521C19.3246 31.6516 19.3242 31.6496 19.3219 31.6501C18.8755 31.7414 18.3674 31.8262 17.8084 31.8885C14.8882 32.2142 11.9677 31.2807 9.77888 29.3223C7.59011 27.3638 6.34372 24.5659 6.34372 21.6304L6.34371 20.8386L0.845703 21.1766C3.39905 28.7153 11.3691 33.3282 19.2913 31.6585C19.2951 31.6577 19.3084 31.6551 19.3224 31.6521Z"
                                                fill="url(#paint8_linear_4151_62980)"></path>
                                            <defs>
                                                <lineargradient id="paint0_linear_4151_62980" x1="20.0604" y1="23.7696"
                                                    x2="23.2079" y2="12.8065" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#1724C9"></stop>
                                                    <stop offset="1" stop-color="#1C64F2"></stop>
                                                </lineargradient>
                                                <lineargradient id="paint1_linear_4151_62980" x1="27.3093" y1="10.4001"
                                                    x2="19.0297" y2="2.14962" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#1C64F2"></stop>
                                                    <stop offset="1" stop-color="#0092FF"></stop>
                                                </lineargradient>
                                                <lineargradient id="paint2_linear_4151_62980" x1="16.1642" y1="5.0209"
                                                    x2="3.67407" y2="5.81015" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#0092FF"></stop>
                                                    <stop offset="1" stop-color="#45B2FF"></stop>
                                                </lineargradient>
                                                <lineargradient id="paint3_linear_4151_62980" x1="15.32" y1="28.6624"
                                                    x2="26.5369" y2="25.6356" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#1C64F2"></stop>
                                                    <stop offset="1" stop-color="#0092FF"></stop>
                                                </lineargradient>
                                                <lineargradient id="paint4_linear_4151_62980" x1="7.26808" y1="15.6825"
                                                    x2="15.2317" y2="23.9345" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#1724C9"></stop>
                                                    <stop offset="1" stop-color="#1C64F2"></stop>
                                                </lineargradient>
                                                <lineargradient id="paint5_linear_4151_62980" x1="25.4497" y1="21.6353"
                                                    x2="31.0061" y2="10.4342" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#0092FF"></stop>
                                                    <stop offset="1" stop-color="#45B2FF"></stop>
                                                </lineargradient>
                                                <lineargradient id="paint6_linear_4151_62980" x1="5.36387" y1="9.13067"
                                                    x2="2.39054" y2="20.3063" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#1C64F2"></stop>
                                                    <stop offset="1" stop-color="#0092FF"></stop>
                                                </lineargradient>
                                                <lineargradient id="paint7_linear_4151_62980" x1="20.5432"
                                                    y1="8.59912" x2="9.6778" y2="11.3044"
                                                    gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#1724C9"></stop>
                                                    <stop offset="1" stop-color="#1C64F2"></stop>
                                                </lineargradient>
                                                <lineargradient id="paint8_linear_4151_62980" x1="6.40691"
                                                    y1="21.3563" x2="13.3327" y2="31.7743"
                                                    gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#0092FF"></stop>
                                                    <stop offset="1" stop-color="#45B2FF"></stop>
                                                </lineargradient>
                                            </defs>
                                        </svg><span class="w-full">Flowbite Library</span><svg class="ml-3 w-6 h-6"
                                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                                clip-rule="evenodd"></path>
                                        </svg></a><a
                                        class="inline-flex justify-center items-center p-5 mb-4 w-full text-base font-medium text-gray-500 bg-gray-50 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white"
                                        href="https://flowbite.com/figma/"><svg aria-hidden="true" class="mr-3 w-5 h-5"
                                            viewBox="0 0 22 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_4151_63004)">
                                                <path
                                                    d="M5.50085 30.1242C8.53625 30.1242 10.9998 27.8749 10.9998 25.1035V20.0828H5.50085C2.46546 20.0828 0.00195312 22.332 0.00195312 25.1035C0.00195312 27.8749 2.46546 30.1242 5.50085 30.1242Z"
                                                    fill="#0ACF83"></path>
                                                <path
                                                    d="M0.00195312 15.062C0.00195312 12.2905 2.46546 10.0413 5.50085 10.0413H10.9998V20.0827H5.50085C2.46546 20.0827 0.00195312 17.8334 0.00195312 15.062Z"
                                                    fill="#A259FF"></path>
                                                <path
                                                    d="M0.00195312 5.02048C0.00195312 2.24904 2.46546 -0.000244141 5.50085 -0.000244141H10.9998V10.0412H5.50085C2.46546 10.0412 0.00195312 7.79193 0.00195312 5.02048Z"
                                                    fill="#F24E1E"></path>
                                                <path
                                                    d="M11 -0.000244141H16.4989C19.5343 -0.000244141 21.9978 2.24904 21.9978 5.02048C21.9978 7.79193 19.5343 10.0412 16.4989 10.0412H11V-0.000244141Z"
                                                    fill="#FF7262"></path>
                                                <path
                                                    d="M21.9978 15.062C21.9978 17.8334 19.5343 20.0827 16.4989 20.0827C13.4635 20.0827 11 17.8334 11 15.062C11 12.2905 13.4635 10.0413 16.4989 10.0413C19.5343 10.0413 21.9978 12.2905 21.9978 15.062Z"
                                                    fill="#1ABCFE"></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_4151_63004">
                                                    <rect width="22" height="30.1244" fill="white"
                                                        transform="translate(0 -0.000244141)"></rect>
                                                </clippath>
                                            </defs>
                                        </svg><span class="w-full">Figma design system</span><svg class="ml-3 w-6 h-6"
                                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                                clip-rule="evenodd"></path>
                                        </svg></a><a href="https://themesberg.com/templates/tailwind-css"
                                        class="inline-flex justify-center items-center p-5 w-full text-base font-medium text-gray-500 bg-gray-50 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white"><svg
                                            aria-hidden="true" class="mr-3 w-5 h-5" viewBox="0 0 26 31" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_4151_62985)">
                                                <path
                                                    d="M25.7689 0.901322L15.1763 3.49437C15.0758 3.51776 14.9717 3.52086 14.87 3.50352C14.7683 3.48617 14.6711 3.44871 14.5841 3.39335L9.57667 0.121964C9.48513 0.0624589 9.38179 0.0234753 9.27373 0.00769593C9.16568 -0.00808342 9.05549 -0.000283916 8.95074 0.0305577L0.284074 2.58031C0.204603 2.59938 0.133665 2.64415 0.0822909 2.70766C0.030917 2.77117 0.001987 2.84986 0 2.9315L0 8.11761L8.95074 5.48607C9.05549 5.45522 9.16568 5.44743 9.27373 5.4632C9.38179 5.47898 9.48513 5.51797 9.57667 5.57747L14.5841 8.84404C14.6701 8.90151 14.7674 8.94022 14.8694 8.95762C14.9715 8.97503 15.076 8.97075 15.1763 8.94507L26 6.2991V1.07451C25.9987 1.02559 25.9784 0.979095 25.9433 0.944943C25.9082 0.91079 25.8612 0.891685 25.8122 0.891701L25.7689 0.901322Z"
                                                    fill="#FF7F66"></path>
                                                <path
                                                    d="M19.377 13.3953L15.1737 14.4056C15.0733 14.4301 14.969 14.4338 14.8671 14.4164C14.7652 14.399 14.668 14.361 14.5815 14.3046L9.57406 11.0332C9.5541 11.0191 9.53145 11.0092 9.50752 11.0042C9.48359 10.9993 9.45888 10.9992 9.43495 11.0042C9.41101 11.0092 9.38835 11.019 9.36838 11.0331C9.34841 11.0472 9.33156 11.0652 9.31887 11.0861C9.29667 11.1132 9.28474 11.1473 9.28517 11.1823V16.1038C9.28501 16.164 9.2999 16.2232 9.32849 16.2762C9.35708 16.3291 9.39846 16.374 9.44887 16.4069L14.5815 19.7745C14.6684 19.8301 14.7658 19.8673 14.8676 19.8839C14.9695 19.9004 15.0736 19.8959 15.1737 19.8707L19.6178 18.8075C20.336 18.6343 20.9753 18.2254 21.4335 17.6463C21.8918 17.0672 22.1425 16.3514 22.1455 15.6131V15.5121C22.1367 14.9234 21.8944 14.3624 21.472 13.952C21.0495 13.5416 20.4814 13.3154 19.8922 13.3232C19.7183 13.3283 19.5456 13.3525 19.377 13.3953Z"
                                                    fill="#FF7F66"></path>
                                                <path
                                                    d="M19.377 24.3062L15.1737 25.3165C15.0732 25.3399 14.9691 25.343 14.8674 25.3256C14.7657 25.3083 14.6685 25.2708 14.5815 25.2154L9.57405 21.9441C9.55416 21.9304 9.53176 21.9208 9.50814 21.9158C9.48452 21.9108 9.46015 21.9106 9.43643 21.915C9.41271 21.9195 9.39011 21.9286 9.36993 21.9419C9.34975 21.9551 9.3324 21.9722 9.31886 21.9922C9.29698 22.0213 9.28516 22.0568 9.28516 22.0932V27.0147C9.285 27.0748 9.29989 27.1341 9.32848 27.187C9.35707 27.24 9.39845 27.2849 9.44886 27.3178L14.5815 30.6854C14.6675 30.7429 14.7647 30.7816 14.8668 30.799C14.9688 30.8164 15.0734 30.8121 15.1737 30.7864L19.6178 29.7184C20.3368 29.5467 20.9771 29.1383 21.4356 28.5588C21.8941 27.9794 22.1442 27.2627 22.1455 26.524V26.423C22.1367 25.8343 21.8944 25.2732 21.4719 24.8628C21.0495 24.4525 20.4813 24.2263 19.8922 24.234C19.7181 24.2368 19.5451 24.261 19.377 24.3062Z"
                                                    fill="#FF7F66"></path>
                                                <path opacity="0.32"
                                                    d="M14.8613 19.8659V14.4344C14.9661 14.4561 15.0743 14.4561 15.1791 14.4344L16.9895 13.9533L18.0487 19.149L15.1598 19.8514C15.0625 19.8774 14.9607 19.8823 14.8613 19.8659ZM19.108 24.3544L15.1791 25.3166C15.0743 25.3382 14.9661 25.3382 14.8613 25.3166V30.7913C14.9661 30.813 15.0743 30.813 15.1791 30.7913L20.1673 29.5694L19.108 24.3544ZM14.8613 8.95966C14.9661 8.98131 15.0743 8.98131 15.1791 8.95966L15.935 8.77685L14.8613 3.50415V8.95966Z"
                                                    fill="#111928"></path>
                                                <g opacity="0.16">
                                                    <path opacity="0.16"
                                                        d="M9.28516 5.4665C9.38726 5.48597 9.48508 5.52344 9.57404 5.57715L14.5815 8.84853C14.6641 8.90343 14.7578 8.93956 14.8559 8.95437V3.49886C14.7578 3.48404 14.6641 3.44792 14.5815 3.39302L9.57404 0.121636C9.48508 0.067925 9.38726 0.0304579 9.28516 0.0109863V5.4665Z"
                                                        fill="#111928"></path>
                                                    <path opacity="0.16"
                                                        d="M14.8559 25.3269C14.7584 25.3073 14.6653 25.2698 14.5815 25.2163L9.57405 21.9449C9.53253 21.9175 9.48184 21.9077 9.43309 21.9176C9.38434 21.9275 9.34153 21.9564 9.31405 21.9978C9.29511 22.0263 9.28506 22.0598 9.28516 22.094V27.0155C9.285 27.0757 9.29989 27.1349 9.32848 27.1878C9.35707 27.2408 9.39845 27.2857 9.44886 27.3186L14.5815 30.6862C14.6659 30.7375 14.7589 30.7733 14.8559 30.792V25.3269Z"
                                                        fill="#111928"></path>
                                                    <path opacity="0.16"
                                                        d="M9.57405 11.0315C9.53253 11.0042 9.48184 10.9943 9.43309 11.0043C9.38434 11.0142 9.34153 11.043 9.31405 11.0845C9.29511 11.113 9.28506 11.1465 9.28516 11.1807V16.1022C9.285 16.1623 9.29989 16.2216 9.32848 16.2745C9.35707 16.3274 9.39845 16.3724 9.44886 16.4053L14.5815 19.7729C14.6652 19.8257 14.7584 19.8616 14.8559 19.8787V14.4328C14.7575 14.4162 14.6638 14.3785 14.5815 14.3222L9.57405 11.0315Z"
                                                        fill="#111928"></path>
                                                </g>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_4151_62985">
                                                    <rect width="26" height="30.8097" fill="white"
                                                        transform="translate(0 -0.000244141)"></rect>
                                                </clippath>
                                            </defs>
                                        </svg><span class="w-full">Tailwind CSS Themes</span><svg class="ml-3 w-6 h-6"
                                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                                clip-rule="evenodd"></path>
                                        </svg></a>
                                </div>
                                <div
                                    class="p-6 mb-6 text-gray-500 bg-white rounded-lg border border-gray-200 dark:bg-slate-800 dark:border-gray-700 dark:text-gray-400">
                                    <h4 class="mb-4 font-bold text-gray-900 uppercase dark:text-white">Become an author
                                    </h4>
                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">Do you want to contribute by
                                        writing guest
                                        posts on this blog?</p>
                                    <p class="mb-4 text-sm text-gray-500 dark:text-gray-400">Please contact us and send us
                                        a resume of
                                        previous articles that you have written.</p><a
                                        class="text-white block text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full"
                                        href="https://flowbite.com/contact/">Get in touch</a>
                                </div>
                            </aside>
                        </div>
                    </div>
                    <article
                        class="w-full pt-10 max-w-2xl mx-auto format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <header class="mb-4 not-format">
                            <h1
                                class="mb-2 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                                Learn how to use Flowbite Blocks with Next.js and a Headless CMS</h1>
                            <div class="flex flex-wrap mb-4"><a
                                    class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 hover:bg-blue-200 dark:hover:bg-blue-300 dark:text-blue-800 mb-2"
                                    href="https://flowbite.com/blog/tag/flowbite/">#Flowbite</a><a
                                    class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 hover:bg-blue-200 dark:hover:bg-blue-300 dark:text-blue-800 mb-2"
                                    href="https://flowbite.com/blog/tag/next-js/">#Next.js</a></div>
                            <div class="text-base">
                                <address class="inline">Published by <a rel="author"
                                        class="text-gray-900 no-underline dark:text-white hover:underline"
                                        href="https://flowbite.com/blog/author/david/">David Dumont</a></address> <time
                                    pubdate="true" datetime="2022-12-20T10:59:40.000+00:00"><time
                                        datetime="1671533980000">5 months ago</time></time>
                            </div>
                        </header>
                        <div class="flex items-center justify-between">
                            <aside aria-label="Share social media"><a
                                    href="https://twitter.com/intent/tweet?text=Learn%20how%20to%20use%20Flowbite%20Blocks%20with%20Next.js%20and%20a%20Headless%20CMS%20-%20Flowbite%20Blog%20https://flowbite.com/blog/learn-how-to-use-flowbite-blocks-with-a-headless-next-js-cms/"
                                    class="inline-flex items-center px-3 py-2 mr-2 text-xs font-medium text-gray-900 no-underline bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-slate-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><svg
                                        class="w-4 h-4 mr-2" fill="currentColor" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path
                                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                                        </path>
                                    </svg> Tweet</a><a
                                    href="https://www.facebook.com/sharer/sharer.php?u=https://flowbite.com/blog/learn-how-to-use-flowbite-blocks-with-a-headless-next-js-cms/"
                                    class="inline-flex items-center px-3 py-2 mr-2 text-xs font-medium text-gray-900 no-underline bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-slate-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><svg
                                        class="w-4 h-4 mr-2" fill="currentColor" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path
                                            d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z">
                                        </path>
                                    </svg> Share</a><button type="button"
                                    class="inline-flex items-center px-3 py-2 text-xs font-medium text-gray-900 no-underline bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-slate-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="2" stroke="currentColor" aria-hidden="true" class="w-4 h-4 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z">
                                        </path>
                                    </svg>Copy URL</button></aside>
                        </div>
                        <div>
                            <p>In this article you will how to start using the website sections and content from the
                                Flowbite Blocks
                                collection together with a headless CMS (content management system) based on Next.js called
                                Suncel
                                CMS.</p>
                            <figure class="kg-card kg-image-card"><img
                                    src="./Learn how to use Flowbite Blocks with Next.js and a Headless CMS_files/flowbite-blocks-in-suncel-cms-1-1.png"
                                    class="kg-image" alt="" loading="lazy" width="2000" height="1344"
                                    srcset="https://publisher.flowbite.com/content/images/size/w600/2022/12/flowbite-blocks-in-suncel-cms-1-1.png 600w, https://publisher.flowbite.com/content/images/size/w1000/2022/12/flowbite-blocks-in-suncel-cms-1-1.png 1000w, https://publisher.flowbite.com/content/images/size/w1600/2022/12/flowbite-blocks-in-suncel-cms-1-1.png 1600w, https://publisher.flowbite.com/content/images/2022/12/flowbite-blocks-in-suncel-cms-1-1.png 2054w"
                                    sizes="(min-width: 720px) 720px"></figure>
                            <p>For sites that publish a lot of content, usually as part of an SEO strategy, content
                                management can
                                be difficult, especially from an integration perspective.</p>
                            <p>So let's dive into this article and learn how we can use these two resources together!</p>
                            <h2 id="flowbite-blocks">Flowbite Blocks</h2>
                            <figure class="kg-card kg-image-card kg-card-hascaption"><a
                                    href="https://flowbite.com/blocks/"><img
                                        src="./Learn how to use Flowbite Blocks with Next.js and a Headless CMS_files/Screenshot-2022-12-20-at-12.57.17.png"
                                        class="kg-image" alt="" loading="lazy" width="2000" height="1409"
                                        srcset="https://publisher.flowbite.com/content/images/size/w600/2022/12/Screenshot-2022-12-20-at-12.57.17.png 600w, https://publisher.flowbite.com/content/images/size/w1000/2022/12/Screenshot-2022-12-20-at-12.57.17.png 1000w, https://publisher.flowbite.com/content/images/size/w1600/2022/12/Screenshot-2022-12-20-at-12.57.17.png 1600w, https://publisher.flowbite.com/content/images/size/w2400/2022/12/Screenshot-2022-12-20-at-12.57.17.png 2400w"
                                        sizes="(min-width: 720px) 720px"></a>
                                <figcaption>Flowbite Blocks Collection</figcaption>
                            </figure>
                            <p><a href="https://flowbite.com/">Flowbite</a> provides a library of pre-designed blocks with
                                many
                                advantages:</p>
                            <ul>
                                <li>Wide choice of Blocks to cover all types of pages and layouts;</li>
                                <li>Responsive interfaces;</li>
                                <li>Dark mode support included;</li>
                                <li>Made on top of Tailwind CSS, one of the most popular CSS frameworks.</li>
                            </ul>
                            <p>These blocks can then be used in applications or websites made in React, Vue, Laravel,
                                Svelte, and
                                other frameworks. The question then arises as to how the injection of content in these
                                blocks is done
                                in order to produce content at scale?</p>
                            <p>For some pages or layout sections like the header, footer, homepage, where the content does
                                not vary
                                too much, it is not very problematic (although it can be useful to do A/B testing on this
                                type of
                                pages for example).</p>
                            <p>But for article type pages or content pages with a pure SEO purpose, it can become tedious to
                                manage
                                your content without a CMS. So the question is: how to link Flowbite Blocks to a CMS in
                                order to
                                accelerate the content production?</p>
                            <h2 id="suncel-a-cms-for-nextjs-apps">Suncel: a CMS for Next.js apps</h2>
                            <figure class="kg-card kg-image-card kg-card-hascaption"><a href="https://suncel.io/"><img
                                        src="./Learn how to use Flowbite Blocks with Next.js and a Headless CMS_files/Screenshot-2022-12-20-at-12.58.03.png"
                                        class="kg-image" alt="" loading="lazy" width="2000" height="1060"
                                        srcset="https://publisher.flowbite.com/content/images/size/w600/2022/12/Screenshot-2022-12-20-at-12.58.03.png 600w, https://publisher.flowbite.com/content/images/size/w1000/2022/12/Screenshot-2022-12-20-at-12.58.03.png 1000w, https://publisher.flowbite.com/content/images/size/w1600/2022/12/Screenshot-2022-12-20-at-12.58.03.png 1600w, https://publisher.flowbite.com/content/images/size/w2400/2022/12/Screenshot-2022-12-20-at-12.58.03.png 2400w"
                                        sizes="(min-width: 720px) 720px"></a>
                                <figcaption>Suncel CMS Homepage</figcaption>
                            </figure>
                            <p><a href="https://suncel.io/">Suncel</a> is a CMS that allows to define Blocks (sections)
                                that can be
                                reused endlessly in the content. These Blocks are defined at setup (integration phase) and
                                then the
                                content editor can be used by any user without technical skills. The complexity is left to
                                the
                                developer to create the blocks.</p>
                            <p>The content editor can therefore create pages by stacking blocks on top of each other, which
                                allows
                                to create a page ready to be published in a few clicks. Each block has editable fields, the
                                possibility to add images, links, etc...</p>
                            <p>Suncel is more a hybrid CMS than a pure headless CMS (like Contentful or Strapi for example),
                                in the
                                way that it is designed for Next.js apps (Vue.js/Nuxt.js will be compatible later) and is
                                not "techno
                                agnostic". &nbsp;</p>
                            <p>But this connection with Next.js has some advantages: it allows an easier creation of Blocks
                                and also
                                allows to have a content editor with a live preview.</p>
                            <h2 id="suncel-flowbite-empower-your-content">Suncel + Flowbite: empower your content</h2>
                            <p>Installing Suncel requires to create content Blocks that are components with editable fields.
                                This
                                step can take some time and the free <a href="https://flowbite.com/blocks/">Flowbite
                                    Blocks</a>
                                package helps to save a precious time during the setup, whether it is done by an agency for
                                a client
                                or for its own setup by your dev team.</p>
                            <p>After installing Suncel on your Next.js application or on a new project (in one line with the
                                Suncel
                                CLI, see the <a
                                    href="https://docs.suncel.io/developer/getting-started/quick-start">quickstart
                                    guide</a>), you can install the Suncel/UI package which includes all the free Flowbite
                                Blocks. </p>
                            <p>All these blocks are editable and customizable and will be immediately editable for editing.
                            </p>
                            <p>Adding the package is done in one command line:</p>
                            <pre><code>npm i @suncel/ui
                        </code></pre>
                            <p>You must then inform Suncel of the addition of these blocks in the
                                <code><em>menuBlocks.tsx</em> file</code> (one line to add). See the <a
                                    href="https://docs.suncel.io/developer/getting-started/blocks-library">Suncel/UI
                                    documentation</a>
                                for the installation of the Flowbite package.
                            </p>
                            <p>And that's it! The library of editable Blocks now contains the Flowbite free Blocks and the
                                editing
                                of the content can now start.</p>
                            <figure class="kg-card kg-image-card"><img
                                    src="./Learn how to use Flowbite Blocks with Next.js and a Headless CMS_files/flowbite-blocks-in-suncel-cms.png"
                                    class="kg-image" alt="" loading="lazy" width="2000" height="1344"
                                    srcset="https://publisher.flowbite.com/content/images/size/w600/2022/12/flowbite-blocks-in-suncel-cms.png 600w, https://publisher.flowbite.com/content/images/size/w1000/2022/12/flowbite-blocks-in-suncel-cms.png 1000w, https://publisher.flowbite.com/content/images/size/w1600/2022/12/flowbite-blocks-in-suncel-cms.png 1600w, https://publisher.flowbite.com/content/images/2022/12/flowbite-blocks-in-suncel-cms.png 2054w"
                                    sizes="(min-width: 720px) 720px"></figure>
                            <p>Each block has different editable fields and different options and for example some of them
                                have a
                                layout that can change with a left or right positioning:</p>
                            <figure class="kg-card kg-image-card"><img
                                    src="./Learn how to use Flowbite Blocks with Next.js and a Headless CMS_files/switch-layout.png"
                                    class="kg-image" alt="" loading="lazy" width="1328" height="1400"
                                    srcset="https://publisher.flowbite.com/content/images/size/w600/2022/12/switch-layout.png 600w, https://publisher.flowbite.com/content/images/size/w1000/2022/12/switch-layout.png 1000w, https://publisher.flowbite.com/content/images/2022/12/switch-layout.png 1328w"
                                    sizes="(min-width: 720px) 720px"></figure>
                            <p>Others contain repeatable elements, which can each have their own characteristics, such as
                                images,
                                text, or links:</p>
                            <figure class="kg-card kg-image-card"><img
                                    src="./Learn how to use Flowbite Blocks with Next.js and a Headless CMS_files/repeatable-elements.png"
                                    class="kg-image" alt="" loading="lazy" width="2000" height="1033"
                                    srcset="https://publisher.flowbite.com/content/images/size/w600/2022/12/repeatable-elements.png 600w, https://publisher.flowbite.com/content/images/size/w1000/2022/12/repeatable-elements.png 1000w, https://publisher.flowbite.com/content/images/size/w1600/2022/12/repeatable-elements.png 1600w, https://publisher.flowbite.com/content/images/size/w2400/2022/12/repeatable-elements.png 2400w"
                                    sizes="(min-width: 720px) 720px"></figure>
                            <p>We have recently published a crash course video showing the full extent of using both
                                Flowbite Blocks
                                and Suncel CMS to create websites that are easily managed via the headless CMS that comes
                                integrated
                                with Suncel.</p>
                            <!--kg-card-begin: html--><iframe class="mb-5" width="100%" height="350"
                                src="./Learn how to use Flowbite Blocks with Next.js and a Headless CMS_files/7gK8TX_di94.html"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen=""></iframe>
                            <!--kg-card-end: html-->
                            <h2 id="go-further-by-creating-your-own-flowbite-editable-blocks">Go further by creating your
                                own
                                Flowbite editable Blocks</h2>
                            <p>If you have purchased the <a href="https://flowbite.com/pro/">Pro version</a> of Flowbite
                                and you
                                want to make these Blocks editable, you just have to insert editable components from Suncel
                                inside
                                (see for example this <a href="https://youtu.be/VF8LYOnLAJU">video</a>).</p>
                            <p>Creating an editable component in Suncel is done in three steps:</p>
                            <ul>
                                <li><strong>Add editable fields in the Block:</strong> simple or RichTexts fields, images,
                                    links,
                                    repeatable elements;</li>
                                <li><strong>Add default values</strong> to these Blocks when they are first loaded;</li>
                                <li><strong>Define what can be edited in the right side bar</strong>: it allows to edit
                                    links or texts
                                    that are difficult to edit from the live preview interface.</li>
                            </ul>
                            <p>Please let us know what you think of this stack and what type of website you would like to
                                build with
                                a stack such as this in the comments section!</p>
                        </div>
                        <section class="not-format">
                            <div>
                                <div id="disqus_thread"><iframe id="dsq-app9236" name="dsq-app9236"
                                        allowtransparency="true" frameborder="0" scrolling="no" tabindex="0"
                                        title="Disqus" width="100%"
                                        src="./Learn how to use Flowbite Blocks with Next.js and a Headless CMS_files/saved_resource.html"
                                        style="width: 1px !important; min-width: 100% !important; border: none !important; overflow: hidden !important; height: 453px !important;"
                                        horizontalscrolling="no" verticalscrolling="no"></iframe></div>
                            </div>
                        </section>
                    </article>
                    <aside class="hidden lg:block lg:w-80" aria-labelledby="sidebar-label">
                        <div class="sticky top-36 ">
                            <h3 id="sidebar-label" class="sr-only">Sidebar</h3>
                            <div
                                class="p-6 mb-6 text-gray-500 border border-gray-200 rounded-lg dark:bg-slate-800 dark:border-gray-700 dark:text-gray-400">
                                <a href="https://flowbite.com/blog/author/david" class="flex items-center mb-4">
                                    <div class="mr-1 shrink-0 flex mt-8">
                                        <i class="fa-solid fa-user fa-lg w-8 h-8 mt-1 rounded-full"></i>
                                    </div>
                                    <div class="mr-3"><span
                                            class="block font-medium text-gray-900 dark:text-white">David Dumont</span>
                                    </div>
                                </a>
                                <p class="mb-4 text-sm text-gray-500 dark:text-gray-400">Co-founder at Suncel: a CMS for
                                    Next.js apps
                                    and websites.</p>
                                <dl>
                                    <div class="mb-4">
                                        <dt class="mb-2 text-sm font-bold text-gray-900 uppercase dark:text-white">Location
                                        </dt>
                                        <dd class="inline-flex items-center text-sm text-gray-500 dark:text-gray-400"><svg
                                                aria-hidden="true" class="w-3 h-3 mr-2 text-gray-500 dark:text-gray-400"
                                                fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                    clip-rule="evenodd"></path>
                                            </svg>Paris, France</dd>
                                    </div>
                                    <div class="mb-4">
                                        <dt class="mb-2 text-sm font-bold text-gray-900 uppercase dark:text-white">Follow
                                            on Twitter</dt>
                                        <dd class="text-sm text-gray-500 dark:text-gray-400 hover:underline"><a
                                                href="https://twitter.com/@suncel_io"
                                                class="inline-flex items-center"><svg aria-hidden="true"
                                                    class="w-3 h-3 mr-2 text-gray-500 dark:text-gray-400"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                                                    </path>
                                                </svg>@suncel_io</a></dd>
                                    </div>
                                    <dt class="mb-2 text-sm font-bold text-gray-900 uppercase dark:text-white">Website</dt>
                                    <dd class="text-sm text-gray-500 dark:text-gray-400 hover:underline"><a
                                            href="https://suncel.io/" rel="nofollow noreferrer"
                                            class="inline-flex items-center"><svg aria-hidden="true"
                                                class="w-3 h-3 mr-2 text-gray-500 dark:text-gray-400" fill="currentColor"
                                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                                                    clip-rule="evenodd"></path>
                                            </svg>https://suncel.io</a></dd>
                                </dl>
                            </div>

                            <div
                                class="p-6 pb-4 mt-6 mb-6 font-medium text-gray-500 bg-white border border-gray-200 rounded-lg dark:bg-slate-800 dark:border-gray-700 dark:text-gray-400">
                                <h4 class="mb-4 font-bold text-gray-900 uppercase dark:text-white">Recommended topics</h4>
                                <div class="flex flex-wrap"><a
                                        class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 hover:bg-blue-200 dark:hover:bg-blue-300 dark:text-blue-800 mb-2"
                                        href="https://flowbite.com/blog/tag/alpine-js/">#Alpine.js</a><a
                                        class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 hover:bg-blue-200 dark:hover:bg-blue-300 dark:text-blue-800 mb-2"
                                        href="https://flowbite.com/blog/tag/angular/">#Angular</a><a
                                        class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 hover:bg-blue-200 dark:hover:bg-blue-300 dark:text-blue-800 mb-2"
                                        href="https://flowbite.com/blog/tag/flowbite/">#Flowbite</a><a
                                        class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 hover:bg-blue-200 dark:hover:bg-blue-300 dark:text-blue-800 mb-2"
                                        href="https://flowbite.com/blog/tag/laravel/">#Laravel</a><a
                                        class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 hover:bg-blue-200 dark:hover:bg-blue-300 dark:text-blue-800 mb-2"
                                        href="https://flowbite.com/blog/tag/next-js/">#Next.js</a><a
                                        class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 hover:bg-blue-200 dark:hover:bg-blue-300 dark:text-blue-800 mb-2"
                                        href="https://flowbite.com/blog/tag/tailwind-css/">#Tailwind CSS</a></div>
                            </div>
                            <div
                                class="p-6 mb-6 font-medium text-gray-500 bg-white border border-gray-200 rounded-lg dark:bg-slate-800 dark:border-gray-700 dark:text-gray-400">
                                <h4 class="mb-4 font-bold text-gray-900 uppercase dark:text-white">Community authors</h4>
                                <ul class="space-y-4 text-gray-500 dark:text-gray-400">
                                    <li><a class="flex items-start" href="https://flowbite.com/blog/author/david/">
                                            <div class="mr-3 shrink-0"><img class="w-6 h-6 mt-1 rounded-full"
                                                    src="./Learn how to use Flowbite Blocks with Next.js and a Headless CMS_files/david-dumont-profile-picture.jpeg"
                                                    alt="David Dumont profile picture"></div>
                                            <div class="mr-3"><span
                                                    class="block font-medium text-gray-900 dark:text-white">David
                                                    Dumont</span><span class="text-sm">Co-founder at Suncel: a CMS for
                                                    Next.js apps and
                                                    websites.</span></div>
                                        </a></li>
                                    <li><a class="flex items-start" href="https://flowbite.com/blog/author/harikrishna/">
                                            <div class="mr-3 shrink-0"><img class="w-6 h-6 mt-1 rounded-full"
                                                    src="./Learn how to use Flowbite Blocks with Next.js and a Headless CMS_files/Author-Headshot.jpg"
                                                    alt="Harikrishna Kundariya profile picture"></div>
                                            <div class="mr-3"><span
                                                    class="block font-medium text-gray-900 dark:text-white">Harikrishna
                                                    Kundariya</span><span class="text-sm">Marketer, developer, IoT, ChatBot
                                                    &amp; Blockchain
                                                    savvy, CEO of eSparkBiz.</span></div>
                                        </a></li>
                                    <li><a class="flex items-start" href="https://flowbite.com/blog/author/rich/">
                                            <div class="mr-3 shrink-0"><img class="w-6 h-6 mt-1 rounded-full"
                                                    src="./Learn how to use Flowbite Blocks with Next.js and a Headless CMS_files/1605304654466.jpg"
                                                    alt="Rich Klein profile picture"></div>
                                            <div class="mr-3"><span
                                                    class="block font-medium text-gray-900 dark:text-white">Rich
                                                    Klein</span><span class="text-sm">Technical writer, web developer, and
                                                    customer success
                                                    specialist.</span></div>
                                        </a></li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </main>
        <aside class="py-16 bg-gray-50 lg:py-20 dark:bg-slate-800 border-t border-b border-gray-100 dark:border-gray-700">
            <div class="px-4 mx-auto max-w-8xl">
                <h2
                    class="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:font-extrabold lg:leading-none dark:text-white md:text-center lg:mb-7">
                    Sign up for our newsletter</h2>
                <p
                    class="mb-4 text-base text-gray-500 md:mb-6 dark:text-gray-400 md:text-center md:text-xl lg:px-20 xl:px-56">
                    Do you want to get notified when a new component is added to Flowbite? Sign up for our newsletter and
                    you
                    will be among the first to find out about new features, components, versions, and tools.</p>
                <div class="mb-4">
                    <form action="https://app.convertkit.com/forms/4692392/subscriptions"
                        class="seva-form formkit-form flex max-w-xl md:mx-auto" method="post" data-sv-form="4692392"
                        data-uid="344e3b5c48" data-format="inline" data-version="5"
                        data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;fathom&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}"
                        min-width="400 500">
                        <div class="w-full" data-style="clean"><label for="member_email" class="hidden">Email
                                address</label>
                            <div class="relative h-full">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z">
                                        </path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg></div><input type="email" id="member_email" name="email_address"
                                    class="block w-full px-3 py-4 pl-11 text-base text-gray-900 bg-white border border-gray-200 rounded-l-xl formkit-input focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter your email" required="">
                            </div>
                        </div>
                        <div><input type="submit" data-element="submit" id="member_submit"
                                class="formkit-submit formkit-submit w-full px-4 py-4 text-base font-medium text-center text-white bg-blue-600 border border-blue-600 cursor-pointer rounded-r-xl formkit-submit hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                                value="Subscribe"></div>
                    </form>
                </div>
                <p class="text-sm text-gray-500 md:text-center dark:text-gray-400 font-normal">By subscribing, you agree
                    with
                    ConvertKit's <a rel="nofollow noopener noreferrer"
                        class="text-blue-600 dark-text-blue-400 hover:underline" href="https://convertkit.com/terms">Terms
                        of Service</a> and <a class="text-blue-600 dark-text-blue-400 hover:underline"
                        rel="nofollow noopener noreferrer" href="https://convertkit.com/privacy">Privacy Policy</a>.</p>
            </div>
        </aside>

    </div>
@endsection
