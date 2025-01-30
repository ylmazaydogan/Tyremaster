"use client";
const ContactForm = () => {
    return (
        <div>
            <div className="flex gap-6 items-center mt-6">
                <span className="text-black font-semibold uppercase flex flex-shrink-0 text-lg lg:text-4xl">
                    CONTACT US
                </span>
                <hr className="border border-cool-gray w-full h-[1px]" />
            </div>

            <div className="grid grid-cols-2 gap-8 mt-6">
                <PostalAddressIcon />
                <MoreInformationIcon />
                <WorkHoursIcon />
                <EmailAdressIcon />
            </div>

        </div>
    );
};

const PostalAddressIcon = () => {
    return (
        <div>
            <h3 className="text-base text-black font-bold mb-2 uppercase">Postal Address</h3>
            <div className="flex items-start gap-4">
                <svg width="28" height="40" viewBox="0 0 28 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9915 -0.0144941C10.5083 -0.0597735 7.1492 1.27691 4.65002 3.7036C2.15085 6.1303 0.71542 9.4491 0.658203 12.9321C0.658203 19.3321 5.21953 27.7055 9.04486 33.5988C9.16828 33.7812 9.35709 33.9091 9.57225 33.9562C9.7874 34.0034 10.0125 33.9661 10.2009 33.852C10.2934 33.7974 10.3739 33.7243 10.4377 33.6379C10.5014 33.5514 10.5471 33.4533 10.572 33.3488C10.5969 33.2443 10.6005 33.1357 10.5825 33.0298C10.5646 32.9238 10.5255 32.8221 10.4675 32.7316C3.7502 22.3716 2.33421 16.2521 2.33421 12.9321C2.42008 9.89768 3.68585 7.01617 5.86253 4.90022C8.03921 2.78426 10.9552 1.60009 13.9909 1.60009C17.0265 1.60009 19.9425 2.78426 22.1192 4.90022C24.2959 7.01617 25.5617 9.89768 25.6475 12.9321C25.6475 23.0788 13.4515 38.5452 13.3275 38.6919C13.2598 38.7761 13.2098 38.873 13.1807 38.977C13.1515 39.0811 13.1437 39.1902 13.1578 39.2974C13.1719 39.4045 13.2075 39.5077 13.2626 39.6007C13.3177 39.6937 13.391 39.7745 13.4782 39.8384C13.6278 39.9467 13.8068 40.007 13.9915 40.0116C14.1193 40.0103 14.2453 39.9816 14.3605 39.9263C14.4757 39.871 14.5773 39.7908 14.6582 39.6919C15.1755 39.0386 27.3249 23.6388 27.3249 12.9321C27.268 9.44898 25.8327 6.13038 23.3334 3.7036C20.8342 1.27683 17.4748 -0.0601265 13.9915 -0.0144941ZM13.9915 8.81168C14.2099 8.81313 14.4201 8.72882 14.5768 8.57665C14.7334 8.42449 14.824 8.21686 14.8289 7.99853C14.8276 7.89004 14.805 7.78312 14.7622 7.68342C14.7194 7.58373 14.6573 7.49339 14.5794 7.4178C14.5016 7.3422 14.4096 7.28256 14.3087 7.24267C14.2078 7.20278 14.1 7.18343 13.9915 7.18538C12.8606 7.21918 11.7648 7.58502 10.8409 8.23811C9.91708 8.8912 9.20616 9.80242 8.79704 10.8573C8.38792 11.9121 8.29873 13.0639 8.54063 14.1691C8.78253 15.2743 9.34478 16.2839 10.1571 17.0714C10.9695 17.8589 11.9959 18.3894 13.1081 18.5968C14.2203 18.8043 15.369 18.6798 16.4106 18.2381C17.4522 17.7964 18.3406 17.0575 18.9647 16.1138C19.5887 15.1701 19.9209 14.0635 19.9195 12.9321C19.9239 11.674 19.5008 10.4515 18.7195 9.46532C18.5836 9.2902 18.3845 9.17493 18.1649 9.14501C17.9452 9.1151 17.7226 9.17276 17.5449 9.30517C17.4576 9.36723 17.3839 9.44613 17.3282 9.53759C17.2725 9.62905 17.2359 9.73105 17.2208 9.83707C17.2058 9.94309 17.2124 10.0514 17.2404 10.1548C17.2683 10.2582 17.317 10.3547 17.3835 10.4386C17.9422 11.1497 18.246 12.0279 18.2462 12.9321C18.2727 13.7785 18.0461 14.6132 17.5952 15.3299C17.1443 16.0466 16.4898 16.6124 15.7154 16.9549C14.9409 17.2974 14.0819 17.4011 13.2483 17.2524C12.4147 17.1038 11.6444 16.71 11.0361 16.1209C10.4278 15.5319 10.0092 14.7742 9.83384 13.9458C9.65848 13.1174 9.73435 12.2555 10.0518 11.4705C10.3692 10.6855 10.9137 10.0132 11.6156 9.53954C12.3175 9.06586 13.1448 8.81236 13.9915 8.81168Z" fill="#1FCE6D" />
                </svg>


                <p className="text-base text-black ml-2">
                    Paterstraat 101 <br />
                    2300 Turnhout, Belgium
                </p>
            </div>
        </div>
    );
};

const EmailAdressIcon=()=>{
    return(
        <div>
                    <h3 className="text-base font-bold mb-2 uppercase">Email Address</h3>
                    <div className="flex items-start gap-4">
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_750_5135)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9998 12.6891C22.1445 12.6922 24.2002 13.546 25.7159 15.0634C27.2315 16.5808 28.0831 18.6375 28.0838 20.7822C28.0838 21.0912 28.2066 21.3878 28.4251 21.6064C28.6436 21.8249 28.9401 21.9475 29.2491 21.9475C29.5582 21.9475 29.8546 21.8249 30.0731 21.6064C30.2917 21.3878 30.4144 21.0912 30.4144 20.7822C30.4168 18.255 29.501 15.8133 27.8373 13.9111C26.1736 12.0088 23.8754 10.7753 21.3705 10.441C18.8656 10.1067 16.3246 10.694 14.2203 12.0934C12.116 13.4928 10.5918 15.6091 9.93136 18.0484C9.27094 20.4877 9.51929 23.0839 10.6302 25.3538C11.7411 27.6236 13.6387 29.4125 15.9702 30.3876C18.3016 31.3627 20.908 31.4577 23.3041 30.6546C25.7002 29.8514 27.7229 28.2055 28.9958 26.0224C29.1499 25.7558 29.1921 25.4391 29.1132 25.1415C29.0342 24.8439 28.8407 24.5897 28.5748 24.4345C28.3088 24.2793 27.9922 24.2357 27.6943 24.3134C27.3964 24.3911 27.1414 24.5833 26.9852 24.8486C26.2707 26.073 25.2469 27.0886 24.0164 27.7926C22.7859 28.4965 21.3919 28.8644 19.9743 28.8596C18.5567 28.8548 17.1652 28.4775 15.9395 27.7652C14.7138 27.053 13.6968 26.0309 12.9907 24.8017C12.2845 23.5724 11.9141 22.179 11.9163 20.7613C11.9185 19.3437 12.2934 17.9519 13.0035 16.7249C13.7135 15.4979 14.7336 14.4788 15.9616 13.7704C17.1895 13.0621 18.5822 12.6894 19.9998 12.6891ZM39.9411 19.2353C39.6458 15.426 38.2656 11.7815 35.9637 8.73203C33.6618 5.68257 30.5346 3.35616 26.952 2.02825C23.3695 0.70035 19.4815 0.426107 15.7482 1.23854C12.0148 2.05097 8.5923 3.91569 5.88554 6.61224C3.17878 9.30879 1.30111 12.7244 0.474571 16.4547C-0.351965 20.1849 -0.0927126 24.0742 1.22164 27.6617C2.536 31.2492 4.85042 34.3848 7.89116 36.6982C10.9319 39.0116 14.5716 40.4061 18.3798 40.7158C18.9131 40.7558 19.4464 40.7822 19.9798 40.7822C22.6112 40.7844 25.2172 40.2674 27.6484 39.2607C30.0796 38.254 32.2883 36.7775 34.1478 34.9156C34.256 34.8082 34.3417 34.68 34.4003 34.5393C34.4588 34.3986 34.489 34.2477 34.489 34.0953C34.489 33.9429 34.4588 33.792 34.4003 33.6513C34.3417 33.5106 34.256 33.3831 34.1478 33.2757C33.9289 33.0578 33.6326 32.9352 33.3238 32.9352C33.0149 32.9352 32.7187 33.0578 32.4998 33.2757C29.6505 36.1241 25.9132 37.9127 21.9077 38.346C17.9021 38.7792 13.8688 37.8311 10.4764 35.6578C7.08389 33.4845 4.53598 30.2166 3.25509 26.3967C1.97419 22.5769 2.03725 18.4344 3.43372 14.6552C4.83019 10.8761 7.47623 7.68723 10.9332 5.6181C14.3902 3.54896 18.4505 2.7234 22.441 3.27825C26.4316 3.8331 30.1127 5.73513 32.8741 8.66888C35.6355 11.6026 37.3113 15.3923 37.6238 19.4091C37.7123 20.5777 37.6864 21.752 37.5464 22.9156C37.4741 23.5187 37.2557 24.0951 36.9102 24.5947C36.5647 25.0942 36.1025 25.5017 35.5638 25.7822C35.0942 26.0329 34.5698 26.1627 34.0375 26.1604C33.5052 26.1581 32.9818 26.024 32.5145 25.7691C32.3796 25.6962 32.2318 25.6502 32.0793 25.6344C31.9268 25.6186 31.7728 25.6329 31.6259 25.6767C31.479 25.7205 31.3421 25.7929 31.2231 25.8896C31.1041 25.9862 31.0054 26.105 30.9325 26.2398C30.8596 26.3747 30.8139 26.5229 30.7981 26.6754C30.7824 26.8279 30.7967 26.9816 30.8405 27.1285C30.8842 27.2754 30.9565 27.4125 31.0532 27.5315C31.1498 27.6505 31.2689 27.7489 31.4038 27.8219C32.206 28.2561 33.1029 28.4858 34.0151 28.4905C34.9273 28.4951 35.8265 28.2746 36.6331 27.8486C37.5105 27.396 38.2636 26.7354 38.8261 25.9241C39.3887 25.1128 39.7437 24.176 39.8598 23.1956C40.0156 21.8814 40.0428 20.5548 39.9411 19.2353Z" fill="#1FCE6D" />
                            </g>
                            <defs>
                                <clipPath id="clip0_750_5135">
                                    <rect width="40" height="40" fill="white" transform="translate(0 0.78125)" />
                                </clipPath>
                            </defs>
                        </svg>


                        <p className="text-base text-black ml-2">
                            info@tyremaster.app <br />
                            sales@tyremaster.app
                        </p>
                    </div>
                </div>
    )
};

const WorkHoursIcon=()=>{
    return(
        <div>
                    <h3 className="text-base uppercase font-bold mb-1">Work Hours</h3>
                    <div className="flex items-start gap-4">
                        <svg className="mt-2" width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_750_5127)">

                                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.2607 23.9152C26.2607 24.4185 25.8581 24.8211 25.3548 24.8211H21.0166C20.5133 24.8211 20.1107 24.4185 20.1107 23.9152C20.1107 23.4119 20.5133 23.0093 21.0166 23.0093H25.3548C25.8581 23.0093 26.2607 23.422 26.2607 23.9152ZM23.1807 6.5624C23.6839 6.5624 24.0866 6.15978 24.0866 5.65651V3.73401C24.0866 3.23074 23.6839 2.82812 23.1807 2.82812C22.6774 2.82812 22.2748 3.23074 22.2748 3.73401V5.65651C22.2748 6.15978 22.6875 6.5624 23.1807 6.5624ZM20.1107 11.1824C20.1107 11.6857 20.5133 12.0883 21.0166 12.0883H25.3548C25.8581 12.0883 26.2607 11.6857 26.2607 11.1824C26.2607 10.6792 25.8581 10.2765 25.3548 10.2765H21.0166C20.5133 10.2765 20.1107 10.6892 20.1107 11.1824ZM25.3548 16.648H21.0166C20.5133 16.648 20.1107 17.0506 20.1107 17.5538C20.1107 18.0571 20.5133 18.4597 21.0166 18.4597H25.3548C25.8581 18.4597 26.2607 18.0571 26.2607 17.5538C26.2607 17.0506 25.8581 16.648 25.3548 16.648ZM30.3171 6.5624C30.8203 6.5624 31.2229 6.15978 31.2229 5.65651V3.73401C31.2229 3.23074 30.8203 2.82812 30.3171 2.82812C29.8138 2.82812 29.4112 3.23074 29.4112 3.73401V5.65651C29.4112 6.15978 29.8138 6.5624 30.3171 6.5624ZM29.542 12.0883H33.8802C34.3835 12.0883 34.7861 11.6857 34.7861 11.1824C34.7861 10.6792 34.3835 10.2765 33.8802 10.2765H29.542C29.0388 10.2765 28.6361 10.6792 28.6361 11.1824C28.6361 11.6857 29.0488 12.0883 29.542 12.0883ZM29.542 18.4597H33.8802C34.3835 18.4597 34.7861 18.0571 34.7861 17.5538C34.7861 17.0506 34.3835 16.648 33.8802 16.648H29.542C29.0388 16.648 28.6361 17.0506 28.6361 17.5538C28.6361 18.0571 29.0488 18.4597 29.542 18.4597ZM26.7539 6.5624C27.2572 6.5624 27.6598 6.15978 27.6598 5.65651V3.73401C27.6598 3.23074 27.2572 2.82812 26.7539 2.82812C26.2506 2.82812 25.848 3.23074 25.848 3.73401V5.65651C25.848 6.15978 26.2506 6.5624 26.7539 6.5624ZM29.542 24.8211H33.8802C34.3835 24.8211 34.7861 24.4185 34.7861 23.9152C34.7861 23.4119 34.3835 23.0093 33.8802 23.0093H29.542C29.0388 23.0093 28.6361 23.4119 28.6361 23.9152C28.6361 24.4185 29.0488 24.8211 29.542 24.8211ZM16.8193 16.648H12.4811C11.9779 16.648 11.5752 17.0506 11.5752 17.5538C11.5752 18.0571 11.9779 18.4597 12.4811 18.4597H16.8193C17.3226 18.4597 17.7252 18.0571 17.7252 17.5538C17.7252 17.0506 17.3226 16.648 16.8193 16.648ZM20.5234 5.65651V3.73401C20.5234 3.23074 20.1208 2.82812 19.6175 2.82812C19.1142 2.82812 18.7116 3.23074 18.7116 3.73401V5.65651C18.7116 6.15978 19.1142 6.5624 19.6175 6.5624C20.1208 6.5624 20.5234 6.15978 20.5234 5.65651ZM16.8193 10.2765H12.4811C11.9779 10.2765 11.5752 10.6792 11.5752 11.1824C11.5752 11.6857 11.9779 12.0883 12.4811 12.0883H16.8193C17.3226 12.0883 17.7252 11.6857 17.7252 11.1824C17.7252 10.6792 17.3226 10.2765 16.8193 10.2765ZM39.0941 3.91519H34.7861V3.73401C34.7861 3.23074 34.3835 2.82812 33.8802 2.82812C33.3769 2.82812 32.9743 3.23074 32.9743 3.73401V5.65651C32.9743 6.15978 33.3769 6.5624 33.8802 6.5624C34.3533 6.5624 34.7458 6.18998 34.7861 5.72697H38.1882V29.3807H20.9461C20.4429 29.3807 20.0403 29.7833 20.0403 30.2866C20.0403 30.7899 20.4429 31.1925 20.9461 31.1925H39.0941C39.5974 31.1925 40 30.7899 40 30.2866V4.82108C40 4.31781 39.5974 3.91519 39.0941 3.91519ZM16.5979 23.1905C16.9502 23.5428 16.9502 24.1165 16.5979 24.4688C16.2456 24.8211 15.6719 24.8211 15.3196 24.4688L15.2793 24.4285L14.5848 25.123C15.8027 26.5624 16.5476 28.4346 16.5476 30.4678C16.5476 35.0274 12.8334 38.7416 8.27378 38.7416C3.71414 38.7416 0 35.0274 0 30.4678C0 26.5423 2.74786 23.2509 6.42174 22.4054C6.41168 22.3551 6.41168 22.3148 6.41168 22.2645C6.41168 21.7612 6.81429 21.3586 7.31756 21.3586H9.24006C9.74333 21.3586 10.1459 21.7612 10.1459 22.2645C10.1459 22.3148 10.1459 22.3551 10.1359 22.4054C11.2934 22.6771 12.3603 23.1804 13.2864 23.885L14.0111 23.1603L13.9708 23.12C13.6185 22.7677 13.6185 22.194 13.9708 21.8417C14.3231 21.4894 14.8968 21.4894 15.2491 21.8417L15.9235 22.5161L15.9336 22.5262L15.9436 22.5362L16.5979 23.1905ZM8.27378 24.0058C4.71062 24.0058 1.81178 26.9046 1.81178 30.4678C1.81178 34.0309 4.71062 36.9298 8.27378 36.9298C11.8369 36.9298 14.7358 34.0309 14.7358 30.4678C14.7358 26.9046 11.8369 24.0058 8.27378 24.0058ZM7.26724 18.4597C7.77051 18.4597 8.17313 18.0571 8.17313 17.5538V5.72697H11.5752C11.6155 6.18998 11.998 6.5624 12.4811 6.5624C12.9844 6.5624 13.387 6.15978 13.387 5.65651V3.73401C13.387 3.23074 12.9844 2.82812 12.4811 2.82812C11.9779 2.82812 11.5752 3.23074 11.5752 3.73401V3.91519H7.26724C6.76397 3.91519 6.36135 4.31781 6.36135 4.82108V17.5538C6.36135 18.0571 6.77403 18.4597 7.26724 18.4597ZM10.1963 29.5619H9.17967V26.9851C9.17967 26.4819 8.77705 26.0793 8.27378 26.0793C7.77051 26.0793 7.36789 26.4819 7.36789 26.9851V30.4678C7.36789 30.9711 7.77051 31.3737 8.27378 31.3737H10.1963C10.6995 31.3737 11.1022 30.9711 11.1022 30.4678C11.1022 29.9645 10.6995 29.5619 10.1963 29.5619ZM16.0544 6.5624C16.5576 6.5624 16.9602 6.15978 16.9602 5.65651V3.73401C16.9602 3.23074 16.5576 2.82812 16.0544 2.82812C15.5511 2.82812 15.1485 3.23074 15.1485 3.73401V5.65651C15.1485 6.15978 15.5511 6.5624 16.0544 6.5624Z" fill="#1FCE6D" />
                            </g>
                            <defs>
                                <clipPath id="clip0_750_5127">
                                    <rect width="40" height="40" fill="white" transform="translate(0 0.78125)" />
                                </clipPath>
                            </defs>
                        </svg>

                        <p className="text-base text-black ml-1">
                            Monday-Friday 9:00-19:00 <br />
                            Saturday 10:00-14:00
                        </p>
                    </div>
                </div>
    );
};

const MoreInformationIcon=()=>{
    return(
        <div>
                    <h3 className="text-base font-bold mb-2 uppercase text-black">More Information</h3>
                    <div className="flex items-start gap-4">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_750_5131)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8773 2.68229C17.7871 2.67927 17.6973 2.69459 17.613 2.72656C17.5286 2.75853 17.4515 2.80713 17.386 2.86914C17.3205 2.93116 17.268 3.00542 17.2314 3.08789C17.1949 3.17036 17.1751 3.25879 17.1733 3.34896C17.1867 3.52806 17.2673 3.69556 17.399 3.81771C17.5307 3.93986 17.7036 4.00781 17.8832 4.00781C18.0628 4.00781 18.2358 3.93986 18.3675 3.81771C18.4992 3.69556 18.5798 3.52806 18.5933 3.34896C18.5909 3.25849 18.5706 3.16982 18.5335 3.08724C18.4965 3.00466 18.4435 2.92982 18.3775 2.86784C18.3116 2.80586 18.234 2.75775 18.1493 2.72591C18.0645 2.69407 17.9744 2.67909 17.884 2.68229H17.8773ZM18.5719 36.0026C18.5548 36.2863 18.6233 36.5688 18.7686 36.8132C18.9138 37.0575 19.1291 37.2525 19.3866 37.373C19.644 37.4935 19.9317 37.5339 20.2123 37.4889C20.493 37.444 20.7536 37.3159 20.9605 37.1211C21.1675 36.9262 21.3111 36.6733 21.3728 36.3958C21.4345 36.1184 21.4115 35.8286 21.3067 35.5645C21.2019 35.3003 21.0201 35.0737 20.785 34.9141C20.5499 34.7544 20.2722 34.6693 19.988 34.6693C19.8073 34.6632 19.6271 34.6927 19.458 34.7565C19.2889 34.8204 19.1341 34.9171 19.0024 35.041C18.8708 35.1649 18.7651 35.3142 18.6912 35.4792C18.6173 35.6442 18.5768 35.8219 18.5719 36.0026ZM9.37191 30.6693C9.46225 30.6723 9.55232 30.6576 9.63688 30.6257C9.72145 30.5937 9.79886 30.545 9.86466 30.4831C9.93047 30.4211 9.98332 30.3468 10.0203 30.2643C10.0572 30.1818 10.0775 30.093 10.0799 30.0026V3.34896C10.1419 2.81889 10.3889 2.32809 10.7774 1.96224C11.166 1.59639 11.6711 1.37894 12.2039 1.34896H27.7839C28.317 1.37864 28.8225 1.59571 29.2113 1.96159C29.6001 2.32747 29.8473 2.81868 29.9093 3.34896C29.9203 3.52922 29.9997 3.69854 30.1313 3.82227C30.2628 3.946 30.4367 4.01497 30.6173 4.01497C30.7979 4.01497 30.9716 3.946 31.1032 3.82227C31.2348 3.69854 31.3142 3.52922 31.3253 3.34896C31.2542 2.45282 30.8523 1.61549 30.1978 0.999349C29.5432 0.383211 28.6827 0.0323494 27.7839 0.015625H12.1973C11.2987 0.0326767 10.4386 0.383894 9.78426 1C9.12996 1.61611 8.72823 2.45305 8.65723 3.34896V30.0026C8.65964 30.093 8.67993 30.1818 8.71688 30.2643C8.75382 30.3468 8.80675 30.4211 8.87256 30.4831C8.93837 30.545 9.01578 30.5937 9.10034 30.6257C9.18491 30.6576 9.2749 30.6723 9.36523 30.6693H9.37191ZM20.7052 2.68229C20.6149 2.67927 20.5248 2.69464 20.4403 2.72656C20.3557 2.75848 20.2783 2.80652 20.2125 2.86849C20.1467 2.93045 20.0938 3.00475 20.0569 3.08724C20.0199 3.16973 19.9996 3.2586 19.9972 3.34896C20.0042 3.53075 20.0823 3.70276 20.2148 3.82747C20.3472 3.95219 20.5234 4.01961 20.7052 4.01562H23.5386C23.7205 4.01961 23.8966 3.95219 24.0291 3.82747C24.1615 3.70276 24.2396 3.53075 24.2466 3.34896C24.2442 3.2586 24.2239 3.16973 24.1869 3.08724C24.15 3.00475 24.0971 2.93045 24.0313 2.86849C23.9655 2.80652 23.8881 2.75848 23.8035 2.72656C23.719 2.69464 23.6289 2.67927 23.5386 2.68229H20.7052ZM26.3706 12.0156C26.5573 12.0163 26.737 11.9448 26.8719 11.8158C26.9371 11.7553 26.9891 11.6824 27.0247 11.6009C27.0602 11.5195 27.0786 11.4313 27.0786 11.3424C27.0786 11.2536 27.0602 11.1661 27.0247 11.0846C26.9891 11.0032 26.9371 10.9296 26.8719 10.8691L25.4546 9.53581C25.3168 9.4135 25.1389 9.34635 24.9546 9.34635C24.7703 9.34635 24.5924 9.4135 24.4546 9.53581C24.389 9.59601 24.3367 9.66917 24.3009 9.75065C24.2651 9.83213 24.2467 9.92012 24.2467 10.0091C24.2467 10.0981 24.2651 10.1861 24.3009 10.2676C24.3367 10.3491 24.389 10.4222 24.4546 10.4824L25.8706 11.8158C26.0026 11.9427 26.1781 12.0142 26.3612 12.0156H26.3706ZM20.2052 9.53581C20.1397 9.59601 20.0874 9.66917 20.0516 9.75065C20.0158 9.83213 19.9973 9.92012 19.9973 10.0091C19.9973 10.0981 20.0158 10.1861 20.0516 10.2676C20.0874 10.3491 20.1397 10.4222 20.2052 10.4824L25.8706 15.8158C26.0097 15.936 26.1874 16.0026 26.3713 16.0026C26.5551 16.0026 26.7328 15.936 26.8719 15.8158C26.9371 15.7553 26.9891 15.6824 27.0247 15.6009C27.0602 15.5195 27.0786 15.4313 27.0786 15.3424C27.0786 15.2536 27.0602 15.1661 27.0247 15.0846C26.9891 15.0032 26.9371 14.9296 26.8719 14.8691L21.2066 9.53581C21.068 9.41082 20.8879 9.3418 20.7013 9.3418C20.5146 9.3418 20.3345 9.41082 20.1959 9.53581H20.2052ZM30.62 5.34896H12.2066C12.1163 5.34594 12.0262 5.36131 11.9417 5.39323C11.8571 5.42515 11.7797 5.47319 11.7139 5.53516C11.6481 5.59712 11.5951 5.67141 11.5582 5.75391C11.5212 5.8364 11.501 5.92527 11.4986 6.01562C11.5056 6.19741 11.5837 6.36943 11.7161 6.49414C11.8486 6.61885 12.0247 6.68627 12.2066 6.68229H29.9119V36.6693C29.85 37.1996 29.6028 37.6908 29.2139 38.0566C28.8251 38.4225 28.3197 38.6396 27.7866 38.6693H12.1973C11.6644 38.6393 11.1593 38.4225 10.7708 38.0566C10.3822 37.6908 10.1352 37.1993 10.0732 36.6693V33.3359H27.7773C27.8677 33.3391 27.9579 33.3242 28.0426 33.2923C28.1274 33.2605 28.2049 33.2124 28.2708 33.1504C28.3368 33.0884 28.3898 33.0142 28.4268 32.9316C28.4639 32.8491 28.4842 32.7597 28.4866 32.6693C28.4793 32.4874 28.4009 32.3154 28.2682 32.1908C28.1356 32.0661 27.9593 31.9986 27.7773 32.0026H9.36523C9.18336 31.9986 9.0072 32.066 8.87476 32.1908C8.74231 32.3155 8.66418 32.4875 8.65723 32.6693V36.6693C8.72823 37.5652 9.12996 38.4028 9.78426 39.0189C10.4386 39.635 11.2987 39.9856 12.1973 40.0026H27.7773C28.6761 39.9859 29.5365 39.635 30.1911 39.0189C30.8457 38.4027 31.2476 37.5654 31.3186 36.6693V6.01562C31.3162 5.92527 31.2959 5.8364 31.259 5.75391C31.222 5.67141 31.1692 5.59712 31.1034 5.53516C31.0375 5.47319 30.9601 5.42515 30.8756 5.39323C30.791 5.36131 30.7009 5.34594 30.6106 5.34896H30.62Z" fill="#1FCE6D" />
                            </g>
                            <defs>
                                <clipPath id="clip0_750_5131">
                                    <rect width="40" height="40" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>


                        <p className="text-base text-black ml-2">
                            +31 6 12 34 56 78 <br />
                            WhatsApp available
                        </p>
                    </div>
                </div>
    );
};



export default ContactForm;