import styles from '../styles/components/PlanetSvg.module.scss';

export const PlanetSvg = () => {
  return (
    <svg
      height='250'
      width='100%'
      viewBox='0 0 600 600'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g id='uranus2'>
        <g id={styles.full}>
          <ellipse
            id={styles.shadow}
            cx='420.5'
            cy='524.5'
            rx='99.5'
            ry='24.5'
            fill='#939393'
            fillOpacity='0.65'
          />
          <g id={styles.backMoons}>
            <g id='Group'>
              <path
                id='Vector'
                d='M101.256 147.917C129.015 147.917 151.519 125.413 151.519 97.6533C151.519 69.8937 129.015 47.39 101.256 47.39C73.496 47.39 50.9923 69.8937 50.9923 97.6533C50.9923 125.413 73.496 147.917 101.256 147.917Z'
                fill='url(#paint0_linear)'
              />
              <path
                id='Vector_2'
                d='M58.1674 123.541C76.9316 96.7226 100.252 73.3313 127.013 54.4908C141.688 63.268 151.519 79.3097 151.519 97.6533C151.519 125.413 129.015 147.917 101.256 147.917C82.9652 147.917 66.9607 138.145 58.1674 123.541Z'
                fill='url(#paint1_linear)'
              />
            </g>
            <path
              id='Vector_3'
              d='M428.978 52.3102C443.423 52.3102 455.133 40.6002 455.133 26.1551C455.133 11.71 443.423 0 428.978 0C414.533 0 402.823 11.71 402.823 26.1551C402.823 40.6002 414.533 52.3102 428.978 52.3102Z'
              fill='url(#paint2_linear)'
            />
          </g>
          <g id={styles.planet}>
            <path
              id='Vector_4'
              d='M264.001 462.761C385.372 462.761 483.762 364.37 483.762 243C483.762 121.629 385.372 23.2385 264.001 23.2385C142.63 23.2385 44.24 121.629 44.24 243C44.24 364.37 142.63 462.761 264.001 462.761Z'
              fill='url(#paint3_linear)'
            />
            <g id='Group_2'>
              <path
                id='Vector_5'
                d='M108.396 200.647C115.676 198.51 122.994 196.207 130.338 193.741C142.254 189.742 148.581 176.743 144.423 164.882L144.42 164.873C140.341 153.238 127.668 147.004 115.981 150.934C109.193 153.217 102.435 155.347 95.723 157.321C85.4238 160.35 78.6664 170.183 79.5719 180.881C80.7756 195.097 94.707 204.667 108.396 200.647Z'
                fill='url(#paint4_linear)'
              />
              <path
                id='Vector_6'
                d='M176.806 291.66C176.806 284.108 175.085 276.959 172.016 270.582C186.387 270.496 198.012 258.822 198.012 244.431C198.012 229.986 186.302 218.275 171.857 218.275C157.413 218.275 145.702 229.986 145.702 244.431C145.702 245.063 145.732 245.688 145.776 246.308C140.309 244.182 134.369 243.003 128.15 243.003C101.277 243.003 79.4916 264.788 79.4916 291.66C79.4916 318.533 101.277 340.317 128.15 340.317C155.021 340.316 176.806 318.532 176.806 291.66Z'
                fill='url(#paint5_linear)'
              />
              <path
                id='Vector_7'
                d='M205.989 99.0655C220.435 99.0655 232.145 87.3555 232.145 72.9104C232.145 58.4654 220.435 46.7553 205.989 46.7553C191.544 46.7553 179.834 58.4654 179.834 72.9104C179.834 87.3555 191.544 99.0655 205.989 99.0655Z'
                fill='url(#paint6_linear)'
              />
              <path
                id='Vector_8'
                d='M264.001 23.2415C257.225 23.2415 250.528 23.5628 243.913 24.1651C273.478 26.3436 283.146 64.5428 258.781 80.9569C243.491 91.247 227.097 101.085 209.829 110.311C198.636 116.295 194.078 130.39 199.75 141.734C203.555 149.344 211.155 153.701 219.066 153.701C222.489 153.701 225.983 152.878 229.235 151.151C250.609 139.807 270.818 127.539 289.511 114.618C300.343 107.119 315.121 109.167 323.604 119.236C327.68 124.065 329.647 129.928 329.647 135.741C329.647 143.702 325.963 151.583 318.935 156.622C309.599 163.308 299.801 169.834 289.591 176.149C280.525 181.75 276.209 192.854 279.732 202.903C284.652 216.918 300.915 222.228 313.052 214.729C343.903 195.655 371.491 174.733 394.45 152.908C404.861 143.009 421.948 146.744 427.379 160.046C427.429 160.176 427.489 160.317 427.539 160.447C430.501 167.746 428.985 176.108 423.654 181.901C417.44 188.657 409.479 197.1 405.363 200.965C383.016 221.987 355.729 242.156 324.979 260.438C320.301 243.07 303.907 230.501 284.792 231.736C264.995 233.031 249.173 249.374 248.48 269.202C248.139 279.04 251.462 288.106 257.174 295.133C249.886 298.315 242.587 301.347 235.299 304.208C223.935 308.666 217.65 321.205 221.595 332.75C225.772 344.948 239.244 351.162 251.181 346.494C262.525 342.066 273.87 337.268 285.184 332.117C347.828 303.546 403.034 266.812 443.03 227.368C443.401 232.529 443.582 237.749 443.582 243C443.582 248.17 443.401 253.29 443.05 258.359C411.929 290.144 369.172 320.432 320.2 345.138C263.017 373.981 204.74 391.519 155.758 394.632C154.965 394.682 154.172 394.732 153.379 394.772C132.508 395.917 114.517 394.2 100.643 389.983C118.844 410.202 140.74 427.018 165.276 439.376C180.706 438.061 196.809 435.561 213.373 431.927C254.273 422.962 297.913 407.17 340.63 385.616C340.931 385.466 341.232 385.315 341.534 385.165C360.709 375.447 377.454 401.569 360.638 414.971C328.011 440.952 287.834 457.858 243.913 461.834C250.528 462.436 257.225 462.758 264.001 462.758C385.375 462.758 483.759 364.373 483.759 243C483.759 121.626 385.375 23.2415 264.001 23.2415ZM353.229 120.441C338.783 120.441 327.077 108.735 327.077 94.2889C327.077 79.8425 338.783 68.1368 353.229 68.1368C367.676 68.1368 379.392 79.8425 379.392 94.2889C379.392 108.735 367.676 120.441 353.229 120.441ZM406.166 384.693C391.72 384.693 380.004 372.987 380.004 358.541C380.004 344.094 391.72 332.378 406.166 332.378C420.612 332.378 432.318 344.094 432.318 358.541C432.318 372.987 420.612 384.693 406.166 384.693Z'
                fill='url(#paint7_linear)'
              />
            </g>
            <path
              id='Vector_9'
              d='M511.999 117.861C495.123 84.4003 454.535 66.922 397.211 68.197C415.964 82.5129 432.348 99.7803 445.67 119.307C458.36 123.533 467.325 129.968 471.521 138.281C475.718 146.583 475.567 157.596 471.451 170.296C466.833 184.511 457.245 200.835 443.181 217.851C442.679 218.454 442.177 219.056 441.665 219.658C410.061 257.225 361.331 293.687 304.138 322.55C246.954 351.393 188.677 368.931 139.696 372.043C138.903 372.094 138.109 372.144 137.316 372.184C115.3 373.389 96.4869 371.411 82.3317 366.682C69.6421 362.456 60.6771 356.021 56.4807 347.708C52.2844 339.406 52.435 328.403 56.551 315.703C48.9212 293.918 44.6245 270.567 44.2731 246.262C9.16602 291.619 -0.893256 334.667 16.0027 368.138C32.3064 400.464 70.7364 417.872 124.998 417.872C126.906 417.872 128.833 417.852 130.791 417.802C133.742 417.742 136.744 417.621 139.786 417.461C158.027 416.467 177.343 413.716 197.311 409.339C238.21 400.374 281.851 384.582 324.567 363.028C367.274 341.474 405.905 315.754 437.418 288.186C452.808 274.723 466.502 260.819 478.137 246.734C480.075 244.395 481.942 242.066 483.729 239.737C507.712 208.756 520 178.859 520 152.346C520 140.038 517.35 128.472 511.999 117.861Z'
              fill='url(#paint8_linear)'
            />
            <path
              id='Vector_10'
              d='M520 152.346C520 178.859 507.712 208.756 483.729 239.737C481.942 242.066 480.075 244.395 478.137 246.734C466.502 260.819 452.808 274.723 437.418 288.186C405.905 315.754 367.274 341.474 324.567 363.028C281.851 384.582 238.21 400.374 197.311 409.339C177.343 413.716 158.027 416.467 139.786 417.461C136.744 417.621 133.742 417.742 130.791 417.802C128.833 417.852 126.906 417.872 124.998 417.872C118.262 417.872 111.767 417.601 105.522 417.069C112.509 416.547 119.647 415.784 126.916 414.77C136.774 413.405 146.874 411.588 157.134 409.339C198.033 400.374 241.674 384.582 284.391 363.028C327.097 341.474 365.728 315.754 397.241 288.186C412.631 274.723 426.325 260.819 437.96 246.734C456.442 224.367 468.911 202.471 475.155 181.901C478.257 171.691 479.824 161.802 479.824 152.346C479.824 140.038 477.173 128.472 471.822 117.861C459.725 93.8773 435.43 78.1057 401.518 71.5702C400.102 70.4257 398.667 69.3013 397.211 68.197C454.535 66.922 495.123 84.4003 511.999 117.861C517.35 128.472 520 140.038 520 152.346Z'
              fill='url(#paint9_linear)'
            />
            <path
              id='Vector_11'
              d='M82.3226 366.682C69.6331 362.456 60.6681 356.021 56.4818 347.708C52.2854 339.406 52.436 328.403 56.552 315.703C52.95 305.424 50.0998 294.81 48.0559 283.899C45.7569 271.679 44.4598 259.105 44.2741 246.262C35.3091 257.844 27.9885 269.275 22.3214 280.435C23.3223 286.267 24.5571 292.02 26.0128 297.684C28.7244 308.238 29.3026 319.181 28.4363 330.043C27.9002 336.762 28.8489 342.724 31.3637 347.707C38.2707 361.381 58.0479 369.954 86.0873 372.032C94.3496 372.655 103.315 372.705 112.882 372.153C112.882 372.143 112.882 372.143 112.882 372.143C101.205 371.401 90.9052 369.544 82.3226 366.682Z'
              fill='url(#paint10_linear)'
            />
          </g>
          <g id={styles.frontMoons}>
            <g id='Group_3'>
              <path
                id='Vector_12'
                d='M450.003 511.998C488.661 511.998 519.999 480.66 519.999 442.002C519.999 403.344 488.661 372.005 450.003 372.005C411.345 372.005 380.007 403.344 380.007 442.002C380.007 480.66 411.345 511.998 450.003 511.998Z'
                fill='url(#paint11_linear)'
              />
              <g id='Group_4'>
                <path
                  id='Vector_13'
                  d='M450.004 372.005C445.716 372.005 441.525 372.412 437.449 373.15C470.113 379.069 494.891 407.632 494.891 442.002C494.891 453.195 492.249 463.765 487.577 473.144C485.209 462.483 475.394 454.623 463.868 455.32C452.668 455.996 443.45 464.994 442.528 476.178C442.044 482.053 443.785 487.51 447 491.799C452.105 498.609 448.523 508.438 440.218 510.293C439.302 510.498 438.379 510.685 437.45 510.854C441.525 511.592 445.716 511.998 450.005 511.998C488.663 511.998 520.001 480.66 520.001 442.002C520.001 403.344 488.661 372.005 450.004 372.005Z'
                  fill='url(#paint12_linear)'
                />
                <path
                  id='Vector_14'
                  d='M414.61 455.278C422.788 455.278 429.418 448.648 429.418 440.47C429.418 432.292 422.788 425.662 414.61 425.662C406.432 425.662 399.802 432.292 399.802 440.47C399.802 448.648 406.432 455.278 414.61 455.278Z'
                  fill='url(#paint13_linear)'
                />
                <path
                  id='Vector_15'
                  d='M459.71 425.662C467.888 425.662 474.518 419.032 474.518 410.854C474.518 402.676 467.888 396.046 459.71 396.046C451.532 396.046 444.902 402.676 444.902 410.854C444.902 419.032 451.532 425.662 459.71 425.662Z'
                  fill='url(#paint14_linear)'
                />
              </g>
            </g>
            <path
              id='Vector_16'
              d='M34.1556 511.998C48.6006 511.998 60.3107 500.288 60.3107 485.843C60.3107 471.398 48.6006 459.688 34.1556 459.688C19.7105 459.688 8.00046 471.398 8.00046 485.843C8.00046 500.288 19.7105 511.998 34.1556 511.998Z'
              fill='url(#paint15_linear)'
            />
          </g>
        </g>
      </g>
      <defs>
        <linearGradient
          id='paint0_linear'
          x1='39.8488'
          y1='97.6533'
          x2='149.073'
          y2='97.6533'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#EAF6FF' />
          <stop offset='0.5213' stopColor='#D8ECFE' />
          <stop offset='1' stopColor='#B3DAFE' />
        </linearGradient>
        <linearGradient
          id='paint1_linear'
          x1='17.7626'
          y1='101.203'
          x2='124.867'
          y2='101.203'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#EAF6FF' />
          <stop offset='0.5213' stopColor='#D8ECFE' />
          <stop offset='1' stopColor='#B3DAFE' />
        </linearGradient>
        <linearGradient
          id='paint2_linear'
          x1='390.613'
          y1='26.1551'
          x2='443.83'
          y2='26.1551'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#EAF6FF' />
          <stop offset='0.5213' stopColor='#D8ECFE' />
          <stop offset='1' stopColor='#B3DAFE' />
        </linearGradient>
        <linearGradient
          id='paint3_linear'
          x1='44.241'
          y1='243'
          x2='483.762'
          y2='243'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#60B7FF' />
          <stop offset='0.5857' stopColor='#0182FC' />
          <stop offset='1' stopColor='#2740B0' />
        </linearGradient>
        <linearGradient
          id='paint4_linear'
          x1='-79.0052'
          y1='175.664'
          x2='464.133'
          y2='175.664'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#60B7FF' />
          <stop offset='0.5857' stopColor='#0182FC' />
          <stop offset='1' stopColor='#2740B0' />
        </linearGradient>
        <linearGradient
          id='paint5_linear'
          x1='-79.0052'
          y1='279.296'
          x2='464.133'
          y2='279.296'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#60B7FF' />
          <stop offset='0.5857' stopColor='#0182FC' />
          <stop offset='1' stopColor='#2740B0' />
        </linearGradient>
        <linearGradient
          id='paint6_linear'
          x1='-79.0053'
          y1='72.9104'
          x2='464.133'
          y2='72.9104'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#60B7FF' />
          <stop offset='0.5857' stopColor='#0182FC' />
          <stop offset='1' stopColor='#2740B0' />
        </linearGradient>
        <linearGradient
          id='paint7_linear'
          x1='-78.9992'
          y1='243'
          x2='464.13'
          y2='243'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#60B7FF' />
          <stop offset='0.5857' stopColor='#0182FC' />
          <stop offset='1' stopColor='#2740B0' />
        </linearGradient>
        <linearGradient
          id='paint8_linear'
          x1='-5.9239'
          y1='243.002'
          x2='604.331'
          y2='243.002'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#EAF6FF' />
          <stop offset='0.5213' stopColor='#D8ECFE' />
          <stop offset='1' stopColor='#B3DAFE' />
        </linearGradient>
        <linearGradient
          id='paint9_linear'
          x1='5.99361'
          y1='243.002'
          x2='393.612'
          y2='243.002'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#EAF6FF' />
          <stop offset='0.5213' stopColor='#D8ECFE' />
          <stop offset='1' stopColor='#B3DAFE' />
        </linearGradient>
        <linearGradient
          id='paint10_linear'
          x1='-123.512'
          y1='309.399'
          x2='97.7358'
          y2='309.399'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#EAF6FF' />
          <stop offset='0.5213' stopColor='#D8ECFE' />
          <stop offset='1' stopColor='#B3DAFE' />
        </linearGradient>
        <linearGradient
          id='paint11_linear'
          x1='380.007'
          y1='442.002'
          x2='520'
          y2='442.002'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#EAF6FF' />
          <stop offset='0.5213' stopColor='#D8ECFE' />
          <stop offset='1' stopColor='#B3DAFE' />
        </linearGradient>
        <linearGradient
          id='paint12_linear'
          x1='331.264'
          y1='442.002'
          x2='475.915'
          y2='442.002'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#EAF6FF' />
          <stop offset='0.5213' stopColor='#D8ECFE' />
          <stop offset='1' stopColor='#B3DAFE' />
        </linearGradient>
        <linearGradient
          id='paint13_linear'
          x1='331.264'
          y1='440.47'
          x2='475.915'
          y2='440.47'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#EAF6FF' />
          <stop offset='0.5213' stopColor='#D8ECFE' />
          <stop offset='1' stopColor='#B3DAFE' />
        </linearGradient>
        <linearGradient
          id='paint14_linear'
          x1='331.264'
          y1='410.854'
          x2='475.915'
          y2='410.854'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#EAF6FF' />
          <stop offset='0.5213' stopColor='#D8ECFE' />
          <stop offset='1' stopColor='#B3DAFE' />
        </linearGradient>
        <linearGradient
          id='paint15_linear'
          x1='-4.20921'
          y1='485.843'
          x2='49.0086'
          y2='485.843'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#EAF6FF' />
          <stop offset='0.5213' stopColor='#D8ECFE' />
          <stop offset='1' stopColor='#B3DAFE' />
        </linearGradient>
      </defs>
    </svg>
  );
};
