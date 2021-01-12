<template>
  <div id="1top">
    <div class="page-fixed">
      <div class="page-fixed__info-btn">
        <p @click="$router.push('/contacts')">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.8337 14.3888C10.6224 14.3902 10.4129 14.3497 10.2173 14.2695C10.0217 14.1893 9.84408 14.0711 9.69462 13.9216C9.54517 13.7722 9.42691 13.5945 9.34672 13.399C9.26653 13.2034 9.226 12.9939 9.2275 12.7825C9.2275 11.885 9.93625 11.175 10.8337 11.175C11.73 11.175 12.44 11.885 12.44 12.7825C12.44 13.6788 11.73 14.3888 10.8337 14.3888ZM19.1663 14.3888C18.9549 14.3902 18.7454 14.3497 18.5498 14.2695C18.3542 14.1893 18.1766 14.0711 18.0271 13.9216C17.8777 13.7722 17.7594 13.5945 17.6792 13.399C17.599 13.2034 17.5585 12.9939 17.56 12.7825C17.56 11.885 18.27 11.175 19.1663 11.175C20.0637 11.175 20.7725 11.885 20.7725 12.7825C20.7725 13.6788 20.0637 14.3888 19.1663 14.3888ZM8.52875 24.0187L9.4225 23.4737C10.4345 22.8567 11.6329 22.6192 12.8037 22.8038C13.0687 22.845 13.2863 22.8775 13.4538 22.8988C13.9613 22.9663 14.4787 23 15 23C20.525 23 24.875 19.2225 24.875 14.75C24.875 10.2775 20.525 6.5 15 6.5C9.475 6.5 5.125 10.2775 5.125 14.75C5.125 16.4575 5.75 18.0913 6.915 19.4763C6.975 19.5475 7.065 19.6475 7.1825 19.77C7.67384 20.2817 8.05067 20.8921 8.28796 21.5606C8.52524 22.2292 8.61755 22.9405 8.55875 23.6475L8.5275 24.0187H8.52875ZM7.74125 27.4275C7.54464 27.5505 7.31769 27.6164 7.08578 27.6178C6.85387 27.6192 6.62614 27.556 6.42807 27.4354C6.22999 27.3148 6.06939 27.1414 5.96421 26.9347C5.85903 26.728 5.81343 26.4961 5.8325 26.265L6.0675 23.44C6.09698 23.0866 6.05093 22.7309 5.93239 22.3966C5.81386 22.0624 5.62556 21.7572 5.38 21.5013C5.24889 21.3666 5.12216 21.2278 5 21.085C3.5075 19.3088 2.625 17.1188 2.625 14.75C2.625 8.8125 8.165 4 15 4C21.835 4 27.375 8.8125 27.375 14.75C27.375 20.6875 21.835 25.5 15 25.5C14.3625 25.5 13.7375 25.4587 13.1263 25.3775C12.8888 25.3454 12.6516 25.3104 12.415 25.2725C11.8294 25.1801 11.2299 25.2988 10.7238 25.6075L7.74 27.4275H7.74125Z" />
          </svg>
          <span>反馈</span>
        </p>
        <p @click="aboutModal=true">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.16732 24.5622H4.58398C4.28009 24.5622 3.98864 24.4415 3.77376 24.2266C3.55887 24.0117 3.43815 23.7202 3.43815 23.4163V18.833C3.43815 18.5291 3.31743 18.2377 3.10254 18.0228C2.88766 17.8079 2.59621 17.6872 2.29232 17.6872C1.98842 17.6872 1.69698 17.8079 1.48209 18.0228C1.26721 18.2377 1.14648 18.5291 1.14648 18.833V23.4163C1.14648 24.328 1.50865 25.2024 2.1533 25.847C2.79796 26.4917 3.6723 26.8538 4.58398 26.8538H9.16732C9.47121 26.8538 9.76266 26.7331 9.97754 26.5182C10.1924 26.3033 10.3132 26.0119 10.3132 25.708C10.3132 25.4041 10.1924 25.1127 9.97754 24.8978C9.76266 24.6829 9.47121 24.5622 9.16732 24.5622ZM25.209 17.6872C24.9051 17.6872 24.6136 17.8079 24.3988 18.0228C24.1839 18.2377 24.0631 18.5291 24.0631 18.833V23.4163C24.0631 23.7202 23.9424 24.0117 23.7275 24.2266C23.5127 24.4415 23.2212 24.5622 22.9173 24.5622H18.334C18.0301 24.5622 17.7386 24.6829 17.5238 24.8978C17.3089 25.1127 17.1882 25.4041 17.1882 25.708C17.1882 26.0119 17.3089 26.3033 17.5238 26.5182C17.7386 26.7331 18.0301 26.8538 18.334 26.8538H22.9173C23.829 26.8538 24.7033 26.4917 25.348 25.847C25.9927 25.2024 26.3548 24.328 26.3548 23.4163V18.833C26.3548 18.5291 26.2341 18.2377 26.0192 18.0228C25.8043 17.8079 25.5129 17.6872 25.209 17.6872ZM22.9173 1.64551H18.334C18.0301 1.64551 17.7386 1.76623 17.5238 1.98111C17.3089 2.196 17.1882 2.48745 17.1882 2.79134C17.1882 3.09523 17.3089 3.38668 17.5238 3.60157C17.7386 3.81645 18.0301 3.93717 18.334 3.93717H22.9173C23.2212 3.93717 23.5127 4.0579 23.7275 4.27278C23.9424 4.48767 24.0631 4.77911 24.0631 5.08301V9.66634C24.0631 9.97023 24.1839 10.2617 24.3988 10.4766C24.6136 10.6915 24.9051 10.8122 25.209 10.8122C25.5129 10.8122 25.8043 10.6915 26.0192 10.4766C26.2341 10.2617 26.3548 9.97023 26.3548 9.66634V5.08301C26.3548 4.17133 25.9927 3.29698 25.348 2.65233C24.7033 2.00767 23.829 1.64551 22.9173 1.64551ZM2.29232 10.8122C2.59621 10.8122 2.88766 10.6915 3.10254 10.4766C3.31743 10.2617 3.43815 9.97023 3.43815 9.66634V5.08301C3.43815 4.77911 3.55887 4.48767 3.77376 4.27278C3.98864 4.0579 4.28009 3.93717 4.58398 3.93717H9.16732C9.47121 3.93717 9.76266 3.81645 9.97754 3.60157C10.1924 3.38668 10.3132 3.09523 10.3132 2.79134C10.3132 2.48745 10.1924 2.196 9.97754 1.98111C9.76266 1.76623 9.47121 1.64551 9.16732 1.64551H4.58398C3.6723 1.64551 2.79796 2.00767 2.1533 2.65233C1.50865 3.29698 1.14648 4.17133 1.14648 5.08301V9.66634C1.14648 9.97023 1.26721 10.2617 1.48209 10.4766C1.69698 10.6915 1.98842 10.8122 2.29232 10.8122ZM11.459 6.22884H6.87565C6.57176 6.22884 6.28031 6.34956 6.06542 6.56445C5.85054 6.77933 5.72982 7.07078 5.72982 7.37467V11.958C5.72982 12.2619 5.85054 12.5533 6.06542 12.7682C6.28031 12.9831 6.57176 13.1038 6.87565 13.1038H11.459C11.7629 13.1038 12.0543 12.9831 12.2692 12.7682C12.4841 12.5533 12.6048 12.2619 12.6048 11.958V7.37467C12.6048 7.07078 12.4841 6.77933 12.2692 6.56445C12.0543 6.34956 11.7629 6.22884 11.459 6.22884ZM10.3132 10.8122H8.02148V8.52051H10.3132V10.8122ZM16.0423 13.1038H20.6257C20.9295 13.1038 21.221 12.9831 21.4359 12.7682C21.6508 12.5533 21.7715 12.2619 21.7715 11.958V7.37467C21.7715 7.07078 21.6508 6.77933 21.4359 6.56445C21.221 6.34956 20.9295 6.22884 20.6257 6.22884H16.0423C15.7384 6.22884 15.447 6.34956 15.2321 6.56445C15.0172 6.77933 14.8965 7.07078 14.8965 7.37467V11.958C14.8965 12.2619 15.0172 12.5533 15.2321 12.7682C15.447 12.9831 15.7384 13.1038 16.0423 13.1038ZM17.1882 8.52051H19.4798V10.8122H17.1882V8.52051ZM11.459 15.3955H6.87565C6.57176 15.3955 6.28031 15.5162 6.06542 15.7311C5.85054 15.946 5.72982 16.2374 5.72982 16.5413V21.1247C5.72982 21.4286 5.85054 21.72 6.06542 21.9349C6.28031 22.1498 6.57176 22.2705 6.87565 22.2705H11.459C11.7629 22.2705 12.0543 22.1498 12.2692 21.9349C12.4841 21.72 12.6048 21.4286 12.6048 21.1247V16.5413C12.6048 16.2374 12.4841 15.946 12.2692 15.7311C12.0543 15.5162 11.7629 15.3955 11.459 15.3955ZM10.3132 19.9788H8.02148V17.6872H10.3132V19.9788ZM16.0423 18.833C16.3462 18.833 16.6377 18.7123 16.8525 18.4974C17.0674 18.2825 17.1882 17.9911 17.1882 17.6872C17.492 17.6872 17.7835 17.5665 17.9984 17.3516C18.2133 17.1367 18.334 16.8452 18.334 16.5413C18.334 16.2374 18.2133 15.946 17.9984 15.7311C17.7835 15.5162 17.492 15.3955 17.1882 15.3955H16.0423C15.7384 15.3955 15.447 15.5162 15.2321 15.7311C15.0172 15.946 14.8965 16.2374 14.8965 16.5413V17.6872C14.8965 17.9911 15.0172 18.2825 15.2321 18.4974C15.447 18.7123 15.7384 18.833 16.0423 18.833ZM20.6257 15.3955C20.3218 15.3955 20.0303 15.5162 19.8154 15.7311C19.6005 15.946 19.4798 16.2374 19.4798 16.5413V19.9788C19.1759 19.9788 18.8845 20.0996 18.6696 20.3144C18.4547 20.5293 18.334 20.8208 18.334 21.1247C18.334 21.4286 18.4547 21.72 18.6696 21.9349C18.8845 22.1498 19.1759 22.2705 19.4798 22.2705H20.6257C20.9295 22.2705 21.221 22.1498 21.4359 21.9349C21.6508 21.72 21.7715 21.4286 21.7715 21.1247V16.5413C21.7715 16.2374 21.6508 15.946 21.4359 15.7311C21.221 15.5162 20.9295 15.3955 20.6257 15.3955ZM16.0423 19.9788C15.8157 19.9788 15.5942 20.046 15.4057 20.1719C15.2173 20.2978 15.0704 20.4768 14.9837 20.6862C14.897 20.8956 14.8743 21.1259 14.9185 21.3482C14.9627 21.5705 15.0718 21.7747 15.2321 21.9349C15.3923 22.0951 15.5965 22.2043 15.8188 22.2485C16.041 22.2927 16.2714 22.27 16.4808 22.1833C16.6902 22.0966 16.8691 21.9497 16.995 21.7613C17.1209 21.5728 17.1882 21.3513 17.1882 21.1247C17.1882 20.8208 17.0674 20.5293 16.8525 20.3144C16.6377 20.0996 16.3462 19.9788 16.0423 19.9788Z" />
          </svg>
          <span>信息</span>
        </p>
        <p @click="$router.push('/info/vip-introduction')">
          <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 24.25H27.5V26.75H2.5V24.25ZM13.75 10.5H16.25V20.5H13.75V10.5ZM9.95625 10.5H12.6125L8.88 20.455H6.38L2.6475 10.5H5.30375L7.63 16.8912L9.95625 10.5ZM21.25 18V20.5H18.75V10.5H23.75C24.7446 10.5 25.6984 10.8951 26.4017 11.5983C27.1049 12.3016 27.5 13.2554 27.5 14.25C27.5 15.2446 27.1049 16.1984 26.4017 16.9017C25.6984 17.6049 24.7446 18 23.75 18H21.25ZM21.25 13V15.5H23.75C24.0815 15.5 24.3995 15.3683 24.6339 15.1339C24.8683 14.8995 25 14.5815 25 14.25C25 13.9185 24.8683 13.6005 24.6339 13.3661C24.3995 13.1317 24.0815 13 23.75 13H21.25ZM2.5 4.25H27.5V6.75H2.5V4.25Z" />
          </svg>
          <span>贵宾</span>
        </p>
        <p @click="$router.push('/info/guide')">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.1808 7.88348C10.7233 7.59348 11.307 7.50098 11.8758 7.50098C12.5333 7.50098 13.2983 7.71723 13.9158 8.22223C14.562 8.75223 15.0008 9.56473 15.0008 10.6247C15.0008 11.8435 14.1395 12.5047 13.6545 12.8772L13.5483 12.9597C13.0183 13.376 12.8133 13.5985 12.8133 14.0622C12.8133 14.3109 12.7145 14.5493 12.5387 14.7251C12.3629 14.901 12.1244 14.9997 11.8758 14.9997C11.6271 14.9997 11.3887 14.901 11.2128 14.7251C11.037 14.5493 10.9383 14.3109 10.9383 14.0622C10.9383 12.6447 11.827 11.9272 12.3908 11.4847C13.032 10.981 13.1258 10.8685 13.1258 10.6247C13.1258 10.1285 12.9395 9.84723 12.7258 9.67348C12.4833 9.48254 12.1843 9.37746 11.8758 9.37473C11.507 9.37473 11.2533 9.43598 11.0633 9.53723C10.8845 9.63223 10.6958 9.79973 10.5133 10.1372C10.4546 10.2456 10.3751 10.3413 10.2794 10.4189C10.1838 10.4966 10.0737 10.5546 9.95563 10.5897C9.83752 10.6248 9.71366 10.6363 9.59111 10.6236C9.46856 10.6108 9.34972 10.574 9.24138 10.5154C9.13304 10.4567 9.03732 10.3772 8.95968 10.2815C8.88205 10.1859 8.82402 10.0758 8.7889 9.95773C8.75379 9.83962 8.74229 9.71576 8.75504 9.59321C8.7678 9.47066 8.80457 9.35182 8.86325 9.24348C9.19325 8.63598 9.62825 8.17723 10.1808 7.88223V7.88348Z" />
            <path d="M11.875 18.75C12.2065 18.75 12.5245 18.6183 12.7589 18.3839C12.9933 18.1495 13.125 17.8315 13.125 17.5C13.125 17.1685 12.9933 16.8505 12.7589 16.6161C12.5245 16.3817 12.2065 16.25 11.875 16.25C11.5435 16.25 11.2255 16.3817 10.9911 16.6161C10.7567 16.8505 10.625 17.1685 10.625 17.5C10.625 17.8315 10.7567 18.1495 10.9911 18.3839C11.2255 18.6183 11.5435 18.75 11.875 18.75Z" />
            <path d="M11.8747 3.75C10.2979 3.74974 8.74641 4.14722 7.36392 4.90568C5.98143 5.66413 4.81259 6.75905 3.96555 8.08911C3.11852 9.41917 2.62065 10.9414 2.51804 12.5149C2.41543 14.0885 2.71137 15.6624 3.37849 17.0912L2.47224 20.6437C2.40573 20.9047 2.40778 21.1784 2.47821 21.4383C2.54863 21.6983 2.68504 21.9356 2.8742 22.1272C3.06336 22.3189 3.29884 22.4584 3.55781 22.5323C3.81678 22.6061 4.09044 22.6118 4.35224 22.5487C5.28974 22.3237 6.731 21.9775 8.01474 21.6712C9.28934 22.246 10.6764 22.5284 12.0742 22.4977C13.4721 22.4671 14.8454 22.1241 16.0936 21.494C17.3417 20.8639 18.4331 19.9626 19.2879 18.856C20.1426 17.7495 20.739 16.4658 21.0334 15.099C21.3278 13.7321 21.3128 12.3167 20.9893 10.9564C20.6659 9.59617 20.0423 8.32546 19.1642 7.23737C18.2862 6.14929 17.1758 5.2714 15.9145 4.66798C14.6532 4.06457 13.2729 3.75092 11.8747 3.75ZM4.37474 13.125C4.37524 11.4941 4.90731 9.90785 5.89035 8.60654C6.87338 7.30523 8.25379 6.35981 9.82242 5.91354C11.3911 5.46726 13.0624 5.54445 14.5832 6.1334C16.104 6.72236 17.3914 7.79099 18.2503 9.17736C19.1092 10.5637 19.4929 12.1923 19.343 13.8163C19.1932 15.4403 18.5181 16.9711 17.4201 18.177C16.322 19.3828 14.8608 20.1979 13.2579 20.4986C11.655 20.7994 9.99774 20.5695 8.53724 19.8437L8.23349 19.6925L7.90224 19.7712L4.41724 20.605C4.66724 19.63 4.99474 18.34 5.27974 17.22L5.36724 16.875L5.20474 16.5587C4.65729 15.4971 4.37265 14.3195 4.37474 13.125Z" />
            <path d="M18.125 26.2499C15.6625 26.2499 13.4237 25.3012 11.75 23.7499H11.875C12.7725 23.7499 13.6438 23.6387 14.4763 23.4287C15.5563 24.0312 16.8013 24.3749 18.1263 24.3749C19.3263 24.3749 20.4588 24.0937 21.4625 23.5937L21.7663 23.4424L22.0975 23.5212C23.2487 23.7962 24.5538 24.0774 25.5225 24.2837C25.3025 23.3449 25.0037 22.0887 24.72 20.9699L24.6325 20.6249L24.795 20.3087C25.3425 19.247 25.6271 18.0694 25.625 16.8749C25.6256 15.621 25.3116 14.387 24.7117 13.2859C24.1118 12.1847 23.2452 11.2518 22.1913 10.5724C21.9708 9.67958 21.6346 8.81938 21.1912 8.01367C22.4322 8.44336 23.569 9.12886 24.5282 10.0258C25.4874 10.9227 26.2475 12.0111 26.7594 13.2204C27.2713 14.4297 27.5235 15.7331 27.4997 17.0461C27.4759 18.3591 27.1766 19.6524 26.6213 20.8424C26.9375 22.1024 27.2587 23.4674 27.4613 24.3462C27.5207 24.6009 27.5149 24.8665 27.4445 25.1184C27.3741 25.3703 27.2412 25.6003 27.0583 25.7872C26.8753 25.9742 26.6482 26.1119 26.3979 26.1878C26.1476 26.2636 25.8822 26.2751 25.6262 26.2212C24.7175 26.0312 23.2887 25.7262 21.985 25.4212C20.772 25.9692 19.456 26.2517 18.125 26.2499Z" />
          </svg>
          <span>帮助</span>
        </p>
        <p>
          <a href="#" v-scroll-to="'#top'">
            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.1655 21.0339L14.6963 7.97949C14.3525 7.50684 13.6489 7.50684 13.3078 7.97949L3.83591 21.0339C3.8126 21.066 3.79864 21.104 3.79557 21.1435C3.7925 21.1831 3.80044 21.2227 3.81852 21.258C3.83659 21.2934 3.8641 21.323 3.89798 21.3436C3.93186 21.3643 3.97079 21.3751 4.01047 21.375H6.02463C6.16159 21.375 6.2905 21.3079 6.37107 21.1978L14.0007 10.6812L21.6303 21.1978C21.7109 21.3079 21.8398 21.375 21.9768 21.375H23.9909C24.1655 21.375 24.2675 21.1763 24.1655 21.0339Z" />
            </svg>
            <span>TOP</span>
          </a>

        </p>

      </div>
      <!--      <a href="#top">-->
      <!--        <div  class="page-fixed__top-btn">-->
      <!--          <svg width="26" height="36" viewBox="0 0 156 188" fill="#888888" xmlns="http://www.w3.org/2000/svg">-->
      <!--            <path d="M154.244 82.2421C153.687 82.7995 153.025 83.2417 152.297 83.5433C151.569 83.845 150.789 84.0003 150.001 84.0003C149.213 84.0003 148.432 83.845 147.704 83.5433C146.976 83.2417 146.315 82.7995 145.758 82.2421L84.0006 20.4851V182C84.0006 183.591 83.3685 185.118 82.2433 186.243C81.118 187.368 79.5919 188 78.0006 188C76.4093 188 74.8832 187.368 73.758 186.243C72.6328 185.118 72.0006 183.591 72.0006 182V20.4851L10.2436 82.2421C9.11543 83.3523 7.59426 83.9718 6.01144 83.9655C4.42861 83.9593 2.91238 83.3278 1.79302 82.2087C0.673652 81.0896 0.0418399 79.5735 0.035209 77.9907C0.028578 76.4079 0.647663 74.8866 1.75761 73.7581L73.7576 1.75813C74.3147 1.20075 74.9762 0.758603 75.7042 0.456936C76.4322 0.155269 77.2126 0 78.0006 0C78.7887 0 79.569 0.155269 80.297 0.456936C81.0251 0.758603 81.6865 1.20075 82.2436 1.75813L154.244 73.7581C154.801 74.3152 155.243 74.9765 155.544 75.7044C155.846 76.4322 156.001 77.2123 156.001 78.0001C156.001 78.788 155.846 79.5681 155.544 80.2959C155.243 81.0237 154.801 81.6851 154.244 82.2421V82.2421Z" fill="#888888"/>-->
      <!--          </svg>-->

      <!--        </div>-->
      <!--      </a>-->
    </div>
    <section class="banner">
      <div style="display: none" class="banner-inner">
        <h1 class="section-title text-white text-center">来自俄罗斯的美丽女孩在我们的网站上见面并交流！</h1>
        <div class="banner-checks">
          <p class="banner-check">
            <img src="/check-mark.svg" alt="">
            闲聊
          </p>
          <p class="banner-check">
            <img src="/check-mark.svg" alt="">
            每日流
          </p>
          <p class="banner-check">
            <img src="/check-mark.svg" alt="">
            闲聊
          </p>
          <p class="banner-check">
            <img src="/check-mark.svg" alt="">
            每日流
          </p>
        </div>
        <div class="banner-btn text-center">
          <p class="btn btn-l-blue">开始聊天</p>
        </div>

        <img class="banner-decor" src="/banner-decor.png" alt="">
      </div>
    </section>
    <section>
      <div class="container">
        <h3 class="section-title mb-30"><nuxt-link to="/streams">与女孩预定的广播</nuxt-link> </h3>
        <p class="mb-30">培训，如果您真的有兴趣的话，您将会成功。例如，经常在视频流的前半小时或一个小时，我一直在讲话直到订阅者赶上。如果您对我的操作方式感兴趣-签名中有一个链接，则可以执行相同的操作。只是在您玩游戏和思考某件事时，如果它不会干扰游戏玩法，请大声说出来（例如，在两个角色之间的情节对话中）。</p>
        <div class="stream-video bg-none">
          <div class="stream-video__top">
            <div  class="stream-video__top--user">
              <img :src="streamers[0].avatar" alt="">
              <div class="stream-video__top--user--info">
                <p>{{streamers[0].fio}}</p>
                <p>@{{streamers[0].nickname}}</p>
              </div>
            </div>
            <p style="font-size: 24px;font-weight: bold">烹饪您最喜欢的食物</p>
            <div class="stream-video__top--stats">
              <img src="/girl_rating_icon.png" alt="">
              <div class="user-profile-about__girl-stats--item--info">
                <p>{{streamers[0].streamer_rating}}</p>
                <p>广播评级</p>
              </div>
            </div>
          </div>
          <div class="stream-video__content mb-40 ">

            <video style="width: 100%;height: 100%" controls>
              <source src="/video.mp4" type="video/mp4">

              Your browser does not support HTML video.
            </video>

          </div>
          <p>培训，如果您真的有兴趣的话，您将会成功。例如，经常在视频流的前半小时或一个小时，我一直在讲话直到订阅者赶上。如果您对我的操作方式感兴趣-签名中有一个链接，则可以执行相同的操作。只是在您玩游戏和思考某件事时，如果它不会干扰游戏玩法，请大声说出来（例如，在两个角色之间的情节对话中）。</p>
        </div>
      </div>
    </section>
    <section class="slider-streams">
      <div class="container">
        <h3 class="section-title"><nuxt-link to="/streams">与女孩预定的广播</nuxt-link> </h3>
      </div>
      <client-only>
        <swiper class="slider-streams__wrapper"  :options="swiperOption">
          <div class="swiper-pagination" slot="pagination"></div>
          <swiper-slide v-for="stream in streams"
                        :key="stream.id">
            <StreamCard :name="stream.name"
                        :avatar="stream.streamer.avatar"
                        :stream_img="stream.image"
                        :nickname="stream.streamer.nickname"
                        :is_vip="stream.is_vip" :url="stream.url"/>
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination" slot="pagination"></div>
      </client-only>

    </section>
    <section class="features">
      <div class="container">
        <div class="features-wrapper">
          <h3 class="section-title">您将在我 们的平台上 获得什么？</h3>
          <div class="features-items">
            <div class="features-item">
              <div class="features-item__img">
                <img src="/feature-img1.png" alt="">
              </div>
              <p class="features-item__title">与俄罗斯姑娘交流24/7</p>
              <p class="features-item__text">与女孩见面并交流：全天候私人聊天或社交团体中！ 交流您的思想和心情，帮助俄罗斯姑娘学习有趣的汉语和迷人的中国文化！</p>
            </div>
            <div class="features-item">
              <div class="features-item__img">
                <img src="/feature-img2.png" alt="">
              </div>
              <p class="features-item__title">参加视频广播</p>
              <p class="features-item__text">参与开发：我们的女孩不断为您播报各种主题！<br>
                共同学习中国语言和文化<br>
                棋盘游戏或电脑游戏<br>
                做运动和瑜伽<br>
                各种爱好：烹饪，绘画或卡拉OK</p>
            </div>
            <div class="features-item">
              <div class="features-item__img">
                <img src="/feature-img3.png" alt="">
              </div>
              <p class="features-item__title">与俄罗斯姑娘交流24/7</p>
              <p class="features-item__text">与女孩见面并交流：全天候私人聊天或社交团体中！ 交流您的思想和心情，帮助俄罗斯姑娘学习有趣的汉语和迷人的中国文化！</p>
            </div>
            <div class="features-item">
              <div class="features-item__img">
                <img src="/feature-img4.png" alt="">
              </div>
              <p class="features-item__title">与俄罗斯姑娘交流24/7</p>
              <p class="features-item__text">与女孩见面并交流：全天候私人聊天或社交团体中！ 交流您的思想和心情，帮助俄罗斯姑娘学习有趣的汉语和迷人的中国文化！</p>
            </div>
          </div>
        </div>
      </div>

    </section>
    <section class="slider-girls">
      <div class="container">
        <h3 class="section-title"> <nuxt-link to="/girls">我们的女孩正在等你！</nuxt-link> </h3>
      </div>
      <client-only>
        <swiper class="slider-girls__wrapper"  :options="swiperOption">
          <div class="swiper-pagination" slot="pagination"></div>
          <swiper-slide v-for="streamer in streamers" :key="streamer.id">
            <GirlCard :nickname="streamer.nickname" :avatar="streamer.avatar" :fio="streamer.fio"/>
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination" slot="pagination"></div>
      </client-only>

    </section>
    <section class="steps">
      <div class="container">

        <div class="steps-wrapper">

          <h3 class="section-title">您将在我们的 平台上获得什么？</h3>
          <div class="steps-item">
            <p class="steps-item__num">01</p>
            <div class="steps-item__group">
              <p class="steps-item__group--top">个人资料</p>
              <p class="steps-item__group--bottom">每个女孩都填写自己的个人资料：她的兴趣，喜欢的电影和音乐类型，书籍和兴趣爱好</p>
            </div>
          </div>
          <div class="steps-item">
            <p class="steps-item__num">02</p>
            <div class="steps-item__group">
              <p class="steps-item__group--top">通讯与广播</p>
              <p class="steps-item__group--bottom">女孩为您启动广播并等待响应！ 给她的每条信息，每一份礼物和关注都很重要。 您越活跃，女孩的评价就越高</p>
            </div>
          </div>
          <div class="steps-item">
            <p class="steps-item__num">03</p>
            <div class="steps-item__group">
              <p class="steps-item__group--top">学习语言和文化</p>
              <p class="steps-item__group--bottom">在交流过程中，女孩学习汉语和中国文化，学习有关这个美丽国家的信息，并准备搬家</p>
            </div>
          </div>
          <div class="steps-item">
            <p class="steps-item__num">决<br>赛</p>
            <div class="steps-item__group">
              <p class="steps-item__group--top">计算收视率和中国之行</p>
              <p class="steps-item__group--bottom">在六个月的最后，我们将计算出评分最高的女孩，并派她们去中国学习和旅行！ 您将能够与他们见面并聊天，参加常规活动并享有独特的体验！</p>
            </div>
          </div>

        </div>
      </div>
    </section>
    <section class="pricing">
      <div class="container">
        <h3 class="section-title">我们的房价</h3>
        <div class="pricing-wrapper">
          <div class="pricing-item">
            <div class="pricing-item__decor decor-one">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.59 13.41L13.42 20.58C13.2343 20.766 13.0137 20.9135 12.7709 21.0141C12.5281 21.1148 12.2678 21.1666 12.005 21.1666C11.7422 21.1666 11.4819 21.1148 11.2391 21.0141C10.9963 20.9135 10.7757 20.766 10.59 20.58L2 12V2H12L20.59 10.59C20.9625 10.9647 21.1716 11.4716 21.1716 12C21.1716 12.5284 20.9625 13.0353 20.59 13.41V13.41Z" stroke="#f64953" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 7H7.01" stroke="#f64953" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <p class="pricing-item__name price-one">每月固定费用</p>
            <p class="pricing-item__price">124.00 <span>Y</span></p>
            <div class="pricing-item__infos">
              <p class="pricing-item__info"><img src="/check-mark.svg" alt="">一般聊天中的交流</p>
              <p class="pricing-item__info"><img src="/check-mark.svg" alt="">使用相机</p>
              <p class="pricing-item__info"><img src="/check-mark.svg" alt="">送礼物的能力</p>
            </div>
            <p class="btn btn-l-blue">找出联络人</p>
          </div>
          <div class="pricing-item  price-vip">
            <div class="pricing-item__decor decor-two">
              <div class="crown">
                <svg  width="44" height="31" viewBox="0 0 44 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.62891 9.28153C1.62891 10.6181 2.68545 11.7191 3.99736 11.7339L9.64951 28.9924L9.80662 29.4721L10.2848 29.3104C13.9659 28.0658 17.9097 27.3842 21.9999 27.3842C26.09 27.3842 30.0339 28.0658 33.7149 29.3104L34.1939 29.4724L34.3505 28.9917L39.9734 11.7339C41.314 11.719 42.3412 10.6183 42.3412 9.31157C42.3412 7.95565 41.2602 6.88909 39.9459 6.88909C38.592 6.88909 37.5506 7.99595 37.5506 9.31157C37.5506 10.0461 37.8664 10.7022 38.3755 11.1448C37.3876 12.1879 35.9111 13.6753 34.3919 14.9643C33.5193 15.7047 32.644 16.3698 31.8473 16.8471C31.0324 17.3353 30.3708 17.5829 29.9068 17.5829C29.0076 17.5829 28.1738 17.1536 27.3926 16.3778C26.6085 15.599 25.9112 14.5025 25.3033 13.2565C24.1791 10.952 23.4065 8.23278 22.9472 6.33608C23.7848 5.95499 24.3656 5.09883 24.3656 4.11486C24.3656 2.75894 23.2845 1.69238 21.9703 1.69238C20.6163 1.69238 19.575 2.79925 19.575 4.11486C19.575 5.09883 20.1558 5.95499 20.9933 6.33608C20.5341 8.23278 19.7614 10.952 18.6372 13.2565C18.0294 14.5025 17.3321 15.599 16.5479 16.3778C15.7667 17.1536 14.9329 17.5829 14.0337 17.5829C13.5697 17.5829 12.9081 17.3353 12.0932 16.8471C11.2965 16.3698 10.4212 15.7047 9.54864 14.9643C8.02938 13.6753 6.55293 12.1879 5.56506 11.1448C6.07411 10.7022 6.38988 10.0461 6.38988 9.31157C6.38988 7.95565 5.30883 6.88909 3.99459 6.88909C2.67526 6.88909 1.62891 7.96077 1.62891 9.28153Z" fill="#FFB800" stroke="#FF7A00"/>
                </svg>
              </div>


              <svg width="41" height="19" viewBox="0 0 41 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.0312 0.847656L10.7266 19H6.35547L0.132812 0.847656H4.30469L8.23047 13.6797C8.42578 14.3125 8.54688 14.9102 8.59375 15.4727H8.66406C8.72656 14.8945 8.85938 14.2812 9.0625 13.6328L12.9883 0.847656H17.0312ZM23.1133 0.847656V19H19.2461V0.847656H23.1133ZM31.1875 12.6719V19H27.3203V0.847656H33.5664C38.082 0.847656 40.3398 2.76172 40.3398 6.58984C40.3398 8.44922 39.6562 9.94141 38.2891 11.0664C36.9297 12.1836 35.2266 12.7188 33.1797 12.6719H31.1875ZM31.1875 3.84766V9.70703H32.8633C35.1367 9.70703 36.2734 8.71875 36.2734 6.74219C36.2734 4.8125 35.1484 3.84766 32.8984 3.84766H31.1875Z" fill="white"/>
              </svg>


            </div>
            <p class="pricing-item__name price-two">VIP费是最好的</p>
            <p class="pricing-item__price">999.00 <span>Y</span></p>
            <div class="pricing-item__infos">
              <p class="pricing-item__info"><img src="/check-mark.svg" alt="">一般聊天中的交流</p>
              <p class="pricing-item__info"><img src="/check-mark.svg" alt="">使用相机</p>
              <p class="pricing-item__info"><img src="/check-mark.svg" alt="">送礼物的能力</p>
            </div>
            <p class="btn btn-l-blue">找出联络人</p>
          </div>
          <div class="pricing-item">
            <div class="pricing-item__decor decor-one">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 2L19 4M19 4L22 7L18.5 10.5L15.5 7.5M19 4L15.5 7.5M11.39 11.61C11.9064 12.1195 12.3168 12.726 12.5978 13.3948C12.8787 14.0635 13.0246 14.7813 13.0271 15.5066C13.0295 16.232 12.8884 16.9507 12.6119 17.6213C12.3355 18.2919 11.9291 18.9012 11.4162 19.4141C10.9033 19.9271 10.294 20.3334 9.62333 20.6099C8.95271 20.8864 8.23403 21.0275 7.50866 21.025C6.7833 21.0226 6.06557 20.8767 5.39682 20.5958C4.72807 20.3148 4.1215 19.9043 3.61203 19.388C2.61016 18.3507 2.05579 16.9614 2.06832 15.5193C2.08085 14.0772 2.65928 12.6977 3.67903 11.678C4.69877 10.6583 6.07824 10.0798 7.52032 10.0673C8.96241 10.0548 10.3517 10.6091 11.389 11.611L11.39 11.61ZM11.39 11.61L15.5 7.5" stroke="#FFB800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

            </div>
            <p class="pricing-item__name price-three">每月固定费用</p>
            <p class="pricing-item__price">355.00 <span>Y</span></p>
            <div class="pricing-item__infos">
              <p class="pricing-item__info"><img src="/check-mark.svg" alt="">一般聊天中的交流</p>
              <p class="pricing-item__info"><img src="/check-mark.svg" alt="">使用相机</p>
              <p class="pricing-item__info"><img src="/check-mark.svg" alt="">送礼物的能力</p>
            </div>
            <p class="btn btn-l-blue">找出联络人</p>
          </div>
        </div>
      </div>
    </section>
    <section class="why-we">
      <div class="container">
        <h3 class="section-title">我们平台的功能</h3>
        <div class="why-we-wrapper">
          <div class="why-we-item">
            <img src="/why-img-1.png" alt="">
            <p>美丽的俄罗斯 姑娘的海洋</p>
          </div>
          <div class="why-we-item">
            <img src="/why-img-2.png" alt="">
            <p>交流的机会：聊天和广播</p>
          </div>
          <div class="why-we-item">
            <img src="/why-img-3.png" alt="">
            <p>通过兴趣和 爱好互相寻找</p>
          </div>
          <div class="why-we-item">
            <img src="/why-img-4.png" alt="">
            <p>开放：在个人资 料中谈论自己</p>
          </div>
        </div>
      </div>
    </section>
    <section class="road-map">
      <div class="container">
        <h3 class="section-title">我们平台的功能</h3>
      </div>
      <div class="road-map__inner">
        <div class="container">
          <div data-num="1" class="road-map__item num  road-map__item--first">
            <img src="/road_map_1.png" alt="">
            <p>女孩开始交流，向我们注册</p>
          </div>
          <div data-num="2" class="road-map__item num  road-map__item--second">
            <img src="/road_map_2.png" alt="">
            <p>学习中国 语言和文化</p>
          </div>
          <div data-num="3" class="road-map__item num  road-map__item--third">
            <img src="/road_map_3.png" alt="">
            <p>通过捐赠和捐 赠提高其评分</p>
          </div>
          <div data-text="决赛" class="road-map__item text  road-map__item--four">
            <img src="/road_map_4.png" alt="">
            <p>每六个月，获得TOP3评级的女孩实现他们的梦想-前往上海学习</p>
          </div>

        </div>
      </div>

    </section>
    <section class="faq">
      <div class="container">
        <div class="faq-wrapper">
          <h3 class="section-title">
            有关我们 平台的问 题的答案
          </h3>

          <div class="faq-items">
            <div class="faq-item" :class="{'faqItemActive':accordeon1Active}">
              <div class="faq-item__top" @click="accordeon1Active ? accordeon1Active=false : accordeon1Active=true">
                <p>如何使用我们的平台？</p>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17" cy="17" r="16.5" fill="white" stroke="#CECFDF"/>
                  <path d="M17 21L13.5359 15L20.4641 15L17 21Z" fill="#CECFDF"/>
                </svg>
              </div>
              <div class="faq-item__content">
                <div class="faq-item__content--inner">
                  <p>在该网站上注册，填写您的个​​人资料，并放置头像。 然后，您可以充分利用我们的服务：与女孩见面并聊天，观看广播并参加小组讨论，提供礼物并从女孩那里购买商品！</p>
                </div>

              </div>
            </div>
            <div class="faq-item" :class="{'faqItemActive':accordeon2Active}">
              <div class="faq-item__top" @click="accordeon2Active ? accordeon2Active=false : accordeon2Active=true">
                <p>为什么要付费访问？</p>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17" cy="17" r="16.5" fill="white" stroke="#CECFDF"/>
                  <path d="M17 21L13.5359 15L20.4641 15L17 21Z" fill="#CECFDF"/>
                </svg>
              </div>
              <div class="faq-item__content">
                <div class="faq-item__content--inner">
                  <p>与来自俄罗斯的女孩交流的经验是一个非常有趣的话题。 我们仅对真正感兴趣的交流对象提供对该网站的访问权限，因为否则，这些女孩将无法应付想要使用我们服务的大量人流！</p>
                </div>

              </div>
            </div>
            <div class="faq-item" :class="{'faqItemActive':accordeon3Active}">
              <div class="faq-item__top" @click="accordeon3Active ? accordeon3Active=false : accordeon3Active=true">
                <p>什么是水晶，我该如何使用它们？</p>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17" cy="17" r="16.5" fill="white" stroke="#CECFDF"/>
                  <path d="M17 21L13.5359 15L20.4641 15L17 21Z" fill="#CECFDF"/>
                </svg>
              </div>
              <div class="faq-item__content">
                <div class="faq-item__content--inner">
                  <p>水晶是我们平台上的本地货币。 有了它，您可以方便快捷地向女孩赠送礼物并表现出关注的迹象，成为女孩的粉丝，为女孩自己订购女孩和商品的私人礼物，以及请求个人广播！<br><br>

                    每月使用我们的平台，您将以常规价格获得300个晶体，以VIP速率获得1200个晶体。 如果您没有足够的货币，您总是可以立即从您的个人账户充值水晶的余额！</p>
                </div>

              </div>
            </div>
            <div class="faq-item" :class="{'faqItemActive':accordeon4Active}">
              <div class="faq-item__top" @click="accordeon4Active ? accordeon4Active=false : accordeon4Active=true">
                <p>我对您的平台有任何疑问或建议！ 我该如何联系您？</p>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17" cy="17" r="16.5" fill="white" stroke="#CECFDF"/>
                  <path d="M17 21L13.5359 15L20.4641 15L17 21Z" fill="#CECFDF"/>
                </svg>
              </div>
              <div class="faq-item__content">
                <div class="faq-item__content--inner">
                  <p>从网站的标题或网站的页脚转到“联系人”部分，并向您写下您的问题，对我们工作的反馈或对我们平台开发的希望！</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    <section class="best-users">
      <div class="container">
        <h3 class="section-title mb-30">门户网站上的顶级动态</h3>
        <p class="mb-30">培训，如果您真的有兴趣的话，您将会成功。例如，经常在视频流的前半小时或一个小时，我一直在讲话直到订阅者赶上。如果您对我的操作方式感兴趣-签名中有一个链接，则可以执行相同</p>
        <div class="best-users-first">
          <div class="best-user-item user-gold user-top">
            <nuxt-link to="/">
              <div data-num="4" class="best-user-item__img">
                <img src="http://placehold.it/300" alt="">
              </div>
              <p class="best-user-item__name">Hei Pi Jey</p>
              <p class="best-user-item__score">捐赠了7320颗水晶</p>

            </nuxt-link>
          </div>
          <div class="best-user-item user-sliver user-top">
            <nuxt-link to="/">
              <div data-num="4" class="best-user-item__img">
                <img src="http://placehold.it/300" alt="">
              </div>
              <p class="best-user-item__name">Hei Pi Jey</p>
              <p class="best-user-item__score">捐赠了7320颗水晶</p>

            </nuxt-link>
          </div>
          <div class="best-user-item user-bronze user-top">
            <nuxt-link to="/">
              <div data-num="4" class="best-user-item__img">
                <img src="http://placehold.it/300" alt="">
              </div>
              <p class="best-user-item__name">Hei Pi Jey</p>
              <p class="best-user-item__score">捐赠了7320颗水晶</p>

            </nuxt-link>
          </div>
        </div>
        <div class="best-users-second">
          <div class="best-user-item">
            <nuxt-link to="/">
              <div data-num="4" class="best-user-item__img">
                <img src="http://placehold.it/300" alt="">
              </div>
              <p class="best-user-item__name">Hei Pi Jey</p>
              <p class="best-user-item__score">捐赠了7320颗水晶</p>

            </nuxt-link>
          </div>
          <div class="best-user-item">
            <nuxt-link to="/">
              <div data-num="4" class="best-user-item__img">
                <img src="http://placehold.it/300" alt="">
              </div>
              <p class="best-user-item__name">Hei Pi Jey</p>
              <p class="best-user-item__score">捐赠了7320颗水晶</p>

            </nuxt-link>
          </div>
          <div class="best-user-item">
            <nuxt-link to="/">
              <div data-num="4" class="best-user-item__img">
                <img src="http://placehold.it/300" alt="">
              </div>
              <p class="best-user-item__name">Hei Pi Jey</p>
              <p class="best-user-item__score">捐赠了7320颗水晶</p>

            </nuxt-link>
          </div>
        </div>
        <div class="best-users-third">
          <div class="best-user-item">
            <nuxt-link to="/">
              <div data-num="4" class="best-user-item__img">
                <img src="http://placehold.it/300" alt="">
              </div>
              <p class="best-user-item__name">Hei Pi Jey</p>
              <p class="best-user-item__score">捐赠了7320颗水晶</p>

            </nuxt-link>
          </div>
          <div class="best-user-item">
            <nuxt-link to="/">
              <div data-num="4" class="best-user-item__img">
                <img src="http://placehold.it/300" alt="">
              </div>
              <p class="best-user-item__name">Hei Pi Jey</p>
              <p class="best-user-item__score">捐赠了7320颗水晶</p>

            </nuxt-link>
          </div>
          <div class="best-user-item">
            <nuxt-link to="/">
              <div data-num="4" class="best-user-item__img">
                <img src="http://placehold.it/300" alt="">
              </div>
              <p class="best-user-item__name">Hei Pi Jey</p>
              <p class="best-user-item__score">捐赠了7320颗水晶</p>

            </nuxt-link>
          </div>
          <div class="best-user-item">
            <nuxt-link to="/">
              <div data-num="4" class="best-user-item__img">
                <img src="http://placehold.it/300" alt="">
              </div>
              <p class="best-user-item__name">Hei Pi Jey</p>
              <p class="best-user-item__score">捐赠了7320颗水晶</p>

            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section class="best-girls">
      <div class="container">
        <h3 class="section-title">有关我们平台的问题的答案</h3>
        <div class="best-girls-wrapper">
          <div @click="$router.push(`/profile/${girl.nickname}`)" class="best-girls-item" v-for="(girl,index) in top_streamers" :key="girl.id">
            <div class="best-girls-item__num">{{index+1}}</div>
            <div class="best-girls-item__img">
              <img :src="girl.avatar" alt="">
            </div>
            <div class="best-girls-item__score">#{{girl.streamer_rating}}</div>
            <div class="best-girls-item__name">{{girl.fio}}</div>
            <div class="best-girls-item__link">@{{girl.nickname}}</div>

          </div>

        </div>
      </div>
    </section>
    <el-dialog  :visible.sync="aboutModal">
      <div class="banner-info-block">
        <div class="banner-info-block__top">

          <img class="banner-info-block__top--img" src="/lip.webp" alt="">

          <div class="banner-info-block__top--name">
            <p>Li pin hin</p>
            <p>creator QR SOCIAL</p>
          </div>
        </div>
        <div class="banner-info-block__content mb-20">
          <p class="section-subheader mb-10">我的传记</p>
          <p>我叫李品欣，1970年出生于湖北省十堰市。 1996年，我毕业于中国国家研究所俄罗斯和独联体文化与语言研究学院。 1998年，我第一次去俄罗斯出差，并于2001年返回，然后成为该国的常客！
            在过去的六个月到两年的时间里，我一直进行了9次以上的商务旅行，并设法研究了这个国家和人民！
            俄罗斯人对我们的文化和语言非常感兴趣，其中许多人希望交流和了解我们！唯一的障碍是俄罗斯的生活水平低下。</p>
        </div>
        <div class="banner-info-block__content">
          <p class="section-subheader mb-10">该门户网站背后的想法</p>
          <p class="mb-40">几年来，我一直在思考如何在我们这边的人与俄罗斯人之间建立桥梁和联系，并提出了一个这样的交流和相识的场所！
            许多俄罗斯姑娘都梦想着移居中国并嫁给中国男人，所以我决定在这个网站上将双方的机会结合起来！
            试试看，一定要写下您对我们门户网站的意见！ 我们会考虑您的每条评论，并不断完善和填充我们的网站！</p>
          <p class="btn btn-l-blue" @click="aboutModal=false">写一条消息</p>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import GirlCard from '@/components/GirlCard'
import StreamCard from '@/components/StreamCard'
export default {
  components: {
    GirlCard,
    StreamCard
  },
  async fetch({store}){
    await store.dispatch('user_bg/fetchUserBg')
  },
  async asyncData({$axios,params}){
    console.log(params)
    try{
      const get_streamers = await $axios.get(`/api/v1/user/get_streamers?at_home=true`)
      const get_top_streamers = await $axios.get(`/api/v1/user/get_streamers?top5=true`)
      const get_streams = await $axios.get(`/api/v1/stream/get_streams_for_home_page`)
      //const response_donaters = await $axios.get(`/api/v1/gift/get_user_top10_donaters`)
      const streamers = get_streamers.data
      const top_streamers = get_top_streamers.data
      const streams = get_streams.data
      //const top_donaters = response_donaters.data
      //console.log('donaters',top_donaters)
      return {streamers,streams,top_streamers}//,top_donaters
    }catch (e) {
      const err = 404
      return {err}
    }
  },
  data(){
    return {
      aboutModal:false,
      accordeon1Active:true,
      accordeon2Active:false,
      accordeon3Active:false,
      accordeon4Active:false,
      swiperOption: {
        //slidesPerView: 5,
        spaceBetween: 20,
        //centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            centeredSlides: true,
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 30
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 5,
            spaceBetween: 40
          }
        }
      },


    }
  },

}
</script>



