import React, { SFC } from 'react';

interface SvgRatio {
  /**
   * The standard width of the SVG element
   */
  width: number;

  /**
   * The standard height of the SVG element
   */
  height: number;
}

export const calcSvgWidth = (ratio: SvgRatio, height: number) => (height / ratio.height) * ratio.width;
export const calcSvgHeight = (ratio: SvgRatio, w: number) => (w / ratio.width) * ratio.height;

interface IconProps {
  size?: number;
}

export const CoffeeActiveIcon: SFC<IconProps> = ({ size = 16 }) => {
  const ratio: SvgRatio = {
    width: 296,
    height: 250,
  };
  const width = calcSvgWidth(ratio, size);
  return (
    <svg
      width={width}
      height={size}
      viewBox={`0 0 ${ratio.width} ${ratio.height}`}
      className='octicon v-align-text-bottom'
    >
      <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g transform='translate(-1.000000, 0.000000)' fillRule='nonzero'>
          <path
            d='M291.664,125.038 C285.884,114.371 276.011,106.6 263.865,103.156 C259.739,101.986 255.49,101.392 251.236,101.392 C243.85,101.392 236.762,103.184 230.447,106.389 C230.468,103.063 230.451,99.947 230.434,97.061 C230.424,95.295 230.414,93.607 230.414,92 C230.414,87.582 226.832,84 222.414,84 L9.042,84 C4.624,84 1.042,87.582 1.042,92 C1.042,93.606 1.032,95.295 1.022,97.061 C0.843,128.289 0.51,186.415 51.848,247.165 C53.369,248.963 55.604,250.001 57.958,250.001 L173.497,250.001 C175.852,250.001 178.087,248.963 179.607,247.165 C184.406,241.487 188.752,235.831 192.69,230.219 C203.262,228.608 277.914,215.379 294.67,161.448 C298.602,148.8 297.533,135.869 291.664,125.038 Z M61.71,234.001 C17.927,180.523 16.87,130.937 17.007,100.001 L214.45,100.001 C214.587,130.936 213.53,180.523 169.747,234.001 L61.71,234.001 Z M279.393,156.699 C268.87,190.565 227.311,205.576 204.536,211.374 C222.271,179.624 227.931,150.055 229.688,126.495 C235.251,120.833 242.956,117.392 251.236,117.392 C254.014,117.392 256.795,117.782 259.5,118.548 C267.462,120.806 273.889,125.818 277.597,132.66 C281.449,139.77 282.07,148.082 279.393,156.699 Z'
            fill='#000000'
          />
          <path
            d='M73.729,59.001 C73.729,63.419 77.311,67.001 81.729,67.001 C86.147,67.001 89.729,63.419 89.729,59.001 C89.729,56.539 90.143,55.66 90.967,53.907 C92.133,51.43 93.729,48.039 93.729,42 C93.729,35.961 92.133,32.569 90.967,30.093 C90.143,28.34 89.729,27.461 89.729,24.999 C89.729,22.538 90.143,21.658 90.967,19.906 C92.133,17.43 93.729,14.039 93.729,8.001 C93.729,3.583 90.147,0.001 85.729,0.001 C81.311,0.001 77.729,3.583 77.729,8.001 C77.729,10.462 77.315,11.342 76.491,13.094 C75.325,15.57 73.729,18.961 73.729,24.999 C73.729,31.037 75.325,34.429 76.491,36.905 C77.315,38.658 77.729,39.537 77.729,42 C77.729,44.462 77.315,45.342 76.491,47.095 C75.324,49.571 73.729,52.963 73.729,59.001 Z'
            fill='#F5A623'
          />
          <path
            d='M105.729,59.001 C105.729,63.419 109.311,67.001 113.729,67.001 C118.147,67.001 121.729,63.419 121.729,59.001 C121.729,56.539 122.143,55.66 122.967,53.907 C124.133,51.43 125.729,48.039 125.729,42 C125.729,35.961 124.133,32.569 122.967,30.093 C122.143,28.34 121.729,27.461 121.729,24.999 C121.729,22.538 122.143,21.658 122.967,19.906 C124.133,17.43 125.729,14.039 125.729,8.001 C125.729,3.583 122.147,0.001 117.729,0.001 C113.311,0.001 109.729,3.583 109.729,8.001 C109.729,10.462 109.315,11.342 108.491,13.094 C107.325,15.57 105.729,18.961 105.729,24.999 C105.729,31.037 107.325,34.429 108.491,36.905 C109.315,38.658 109.729,39.537 109.729,42 C109.729,44.462 109.315,45.342 108.491,47.095 C107.324,49.571 105.729,52.963 105.729,59.001 Z'
            fill='#D0021B'
          />
          <path
            d='M137.729,59.001 C137.729,63.419 141.311,67.001 145.729,67.001 C150.147,67.001 153.729,63.419 153.729,59.001 C153.729,56.539 154.143,55.66 154.967,53.907 C156.133,51.43 157.729,48.039 157.729,42 C157.729,35.961 156.133,32.569 154.967,30.093 C154.143,28.34 153.729,27.461 153.729,24.999 C153.729,22.538 154.143,21.658 154.967,19.906 C156.133,17.43 157.729,14.039 157.729,8.001 C157.729,3.583 154.147,0.001 149.729,0.001 C145.311,0.001 141.729,3.583 141.729,8.001 C141.729,10.462 141.315,11.342 140.491,13.094 C139.325,15.57 137.729,18.961 137.729,24.999 C137.729,31.037 139.325,34.429 140.491,36.905 C141.315,38.658 141.729,39.537 141.729,42 C141.729,44.462 141.315,45.342 140.491,47.095 C139.324,49.571 137.729,52.963 137.729,59.001 Z'
            fill='#F5A623'
          />
          <path
            d='M186.634534,129.231184 C193.549966,158.153098 174.7693,202.579194 117.199597,231.773931 C115.722451,232.523546 114.110193,232.897705 112.499234,232.897705 C110.888274,232.897705 109.276016,232.523546 107.798871,231.773931 C81.7156232,218.547177 61.50718,201.090356 49.3561309,181.292447 C38.6367568,163.827831 34.6314447,144.852292 38.3665314,129.232484 C42.5901025,111.565199 55.8155574,100.58989 72.8826302,100.58989 C92.3102779,100.58989 104.834186,108.727832 112.499234,118.648222 C120.16558,108.729131 132.689489,100.58989 152.118435,100.58989 C169.184209,100.58989 182.409664,111.563899 186.634534,129.231184 Z'
            fill='#D0021B'
          />
        </g>
      </g>
    </svg>
  );
};

export const CoffeeOutlineIcon: SFC<IconProps> = ({ size = 16 }) => {
  const ratio: SvgRatio = {
    width: 296,
    height: 250,
  };
  const width = calcSvgWidth(ratio, size);
  return (
    <svg
      width={width}
      height={size}
      viewBox={`0 0 ${ratio.width} ${ratio.height}`}
      className='octicon v-align-text-bottom'
    >
      <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g transform='translate(-1.000000, 0.000000)' fill='#000000' fillRule='nonzero'>
          <path d='M291.664,125.038 C285.884,114.371 276.011,106.6 263.865,103.156 C259.739,101.986 255.49,101.392 251.236,101.392 C243.85,101.392 236.762,103.184 230.447,106.389 C230.468,103.063 230.451,99.947 230.434,97.061 C230.424,95.295 230.414,93.607 230.414,92 C230.414,87.582 226.832,84 222.414,84 L9.042,84 C4.624,84 1.042,87.582 1.042,92 C1.042,93.606 1.032,95.295 1.022,97.061 C0.843,128.289 0.51,186.415 51.848,247.165 C53.369,248.963 55.604,250.001 57.958,250.001 L173.497,250.001 C175.852,250.001 178.087,248.963 179.607,247.165 C184.406,241.487 188.752,235.831 192.69,230.219 C203.262,228.608 277.914,215.379 294.67,161.448 C298.602,148.8 297.533,135.869 291.664,125.038 Z M61.71,234.001 C17.927,180.523 16.87,130.937 17.007,100.001 L214.45,100.001 C214.587,130.936 213.53,180.523 169.747,234.001 L61.71,234.001 Z M279.393,156.699 C268.87,190.565 227.311,205.576 204.536,211.374 C222.271,179.624 227.931,150.055 229.688,126.495 C235.251,120.833 242.956,117.392 251.236,117.392 C254.014,117.392 256.795,117.782 259.5,118.548 C267.462,120.806 273.889,125.818 277.597,132.66 C281.449,139.77 282.07,148.082 279.393,156.699 Z' />
          <path d='M73.729,59.001 C73.729,63.419 77.311,67.001 81.729,67.001 C86.147,67.001 89.729,63.419 89.729,59.001 C89.729,56.539 90.143,55.66 90.967,53.907 C92.133,51.43 93.729,48.039 93.729,42 C93.729,35.961 92.133,32.569 90.967,30.093 C90.143,28.34 89.729,27.461 89.729,24.999 C89.729,22.538 90.143,21.658 90.967,19.906 C92.133,17.43 93.729,14.039 93.729,8.001 C93.729,3.583 90.147,0.001 85.729,0.001 C81.311,0.001 77.729,3.583 77.729,8.001 C77.729,10.462 77.315,11.342 76.491,13.094 C75.325,15.57 73.729,18.961 73.729,24.999 C73.729,31.037 75.325,34.429 76.491,36.905 C77.315,38.658 77.729,39.537 77.729,42 C77.729,44.462 77.315,45.342 76.491,47.095 C75.324,49.571 73.729,52.963 73.729,59.001 Z' />
          <path d='M105.729,59.001 C105.729,63.419 109.311,67.001 113.729,67.001 C118.147,67.001 121.729,63.419 121.729,59.001 C121.729,56.539 122.143,55.66 122.967,53.907 C124.133,51.43 125.729,48.039 125.729,42 C125.729,35.961 124.133,32.569 122.967,30.093 C122.143,28.34 121.729,27.461 121.729,24.999 C121.729,22.538 122.143,21.658 122.967,19.906 C124.133,17.43 125.729,14.039 125.729,8.001 C125.729,3.583 122.147,0.001 117.729,0.001 C113.311,0.001 109.729,3.583 109.729,8.001 C109.729,10.462 109.315,11.342 108.491,13.094 C107.325,15.57 105.729,18.961 105.729,24.999 C105.729,31.037 107.325,34.429 108.491,36.905 C109.315,38.658 109.729,39.537 109.729,42 C109.729,44.462 109.315,45.342 108.491,47.095 C107.324,49.571 105.729,52.963 105.729,59.001 Z' />
          <path d='M137.729,59.001 C137.729,63.419 141.311,67.001 145.729,67.001 C150.147,67.001 153.729,63.419 153.729,59.001 C153.729,56.539 154.143,55.66 154.967,53.907 C156.133,51.43 157.729,48.039 157.729,42 C157.729,35.961 156.133,32.569 154.967,30.093 C154.143,28.34 153.729,27.461 153.729,24.999 C153.729,22.538 154.143,21.658 154.967,19.906 C156.133,17.43 157.729,14.039 157.729,8.001 C157.729,3.583 154.147,0.001 149.729,0.001 C145.311,0.001 141.729,3.583 141.729,8.001 C141.729,10.462 141.315,11.342 140.491,13.094 C139.325,15.57 137.729,18.961 137.729,24.999 C137.729,31.037 139.325,34.429 140.491,36.905 C141.315,38.658 141.729,39.537 141.729,42 C141.729,44.462 141.315,45.342 140.491,47.095 C139.324,49.571 137.729,52.963 137.729,59.001 Z' />
          <path d='M168.917145,145.699198 C166.011322,133.547815 156.914985,126 145.177316,126 C131.814279,126 123.20046,131.598089 117.927622,138.420342 C112.655679,131.597196 104.041859,126 90.6797164,126 C78.9411534,126 69.8448169,133.548708 66.9398867,145.700091 C64.3709312,156.44324 67.125745,169.494428 74.498424,181.506417 C82.8557948,195.123221 96.7549612,207.129849 114.694759,216.227079 C115.710726,216.742658 116.819621,217 117.927622,217 C119.035624,217 120.144519,216.742658 121.160485,216.227079 C160.756356,196.14723 173.673511,165.591402 168.917145,145.699198 Z M80.8444143,149.024096 C81.6235897,145.764427 83.93699,140.296796 90.6797164,140.296796 C98.4321541,140.296796 103.915869,142.954213 107.444497,148.420057 C110.305643,152.853851 110.804244,157.556603 110.805137,157.556603 C111.116986,161.259473 114.213136,164.105429 117.928516,164.105429 C121.643896,164.105429 124.740046,161.25858 125.051895,157.556603 C125.110869,156.851592 126.716578,140.29769 145.178209,140.29769 C151.920042,140.29769 154.234336,145.76532 155.013511,149.02499 C157.835341,160.830569 150.114178,184.236211 117.928516,201.77838 C85.7428541,184.236211 78.0216907,160.830569 80.8444143,149.024096 Z' />
        </g>
      </g>
    </svg>
  );
};
