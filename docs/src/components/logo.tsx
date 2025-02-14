import React from 'react';
import theme from '../gatsby-plugin-theme-ui';

type SvgProps = JSX.IntrinsicElements['svg'];

interface LogoProps extends SvgProps {
  size?: number;
  color?: string;
}

export const Logo = ({ size = 512, color = theme.colors.primary, ...props }: LogoProps) => (
  <svg {...props} viewBox='0 0 215 204' width={size} height={(204 / 215) * size} overflow='visible'>
    <style />
    <defs>
      <path
        className='prefix__bounce'
        d='M22.48 186.978a6.146 6.146 0 00-2.197-1.289c-.84-.286-1.76-.43-2.763-.43-1.211 0-2.27.212-3.174.635-.905.424-1.605 1.039-2.1 1.846-.312.495-.53 1.094-.654 1.797-.124.703-.186 1.77-.186 3.203v10.078H5.684v-21.875h5.722v3.399c.56-1.25 1.42-2.217 2.578-2.9 1.16-.684 2.513-1.026 4.063-1.026a9.35 9.35 0 014.433 1.113v5.45zm26.445 14.766a21.75 21.75 0 01-4.062 1.23c-1.38.274-2.839.41-4.375.41-3.659 0-6.455-.98-8.389-2.939-1.933-1.96-2.9-4.782-2.9-8.467 0-3.567.93-6.386 2.793-8.457 1.862-2.07 4.4-3.105 7.617-3.105 3.242 0 5.759.96 7.549 2.88 1.79 1.921 2.685 4.626 2.685 8.116v2.324H35.02c.013 1.719.521 3.001 1.524 3.848 1.002.846 2.5 1.27 4.492 1.27 1.315 0 2.61-.19 3.887-.567 1.276-.378 2.61-.977 4.003-1.797v5.254zm-4.843-12.305c-.026-1.51-.414-2.653-1.162-3.427-.75-.775-1.853-1.163-3.31-1.163-1.316 0-2.364.4-3.145 1.202-.782.8-1.244 1.936-1.387 3.408l9.004-.02zm24.199-6.308c.43-.925.976-1.608 1.64-2.051.664-.443 1.478-.664 2.442-.664 1.888 0 3.193.65 3.916 1.953.722 1.302 1.084 4.01 1.084 8.125v12.324h-4.688v-14.043c0-1.627-.124-2.715-.37-3.262-.248-.546-.698-.82-1.349-.82-.65 0-1.106.28-1.367.84-.26.56-.39 1.64-.39 3.242v14.043h-4.63v-14.043c0-1.601-.13-2.682-.39-3.242s-.716-.84-1.367-.84-1.1.274-1.348.82c-.247.547-.37 1.635-.37 3.262v14.043h-4.688v-21.875h4.16v2.266c.325-.86.846-1.54 1.562-2.041a4.092 4.092 0 012.403-.752c.885 0 1.692.264 2.421.79.73.528 1.172 1.17 1.329 1.925zm18.241-2.188h11.329v17.48h7.109v4.395H85v-4.394h7.128v-13.086h-5.606v-4.395zm5.606-10.644h5.723v6.68h-5.723v-6.68zm39.96 16.68a6.146 6.146 0 00-2.197-1.29c-.84-.286-1.76-.43-2.763-.43-1.211 0-2.27.212-3.174.635-.905.424-1.605 1.039-2.1 1.846-.312.495-.53 1.094-.654 1.797-.124.703-.186 1.77-.186 3.203v10.078h-5.722v-21.875h5.722v3.399c.56-1.25 1.42-2.217 2.579-2.9 1.158-.684 2.513-1.026 4.062-1.026a9.35 9.35 0 014.434 1.113v5.45zm27.403 0a6.146 6.146 0 00-2.198-1.29c-.84-.286-1.76-.43-2.763-.43-1.211 0-2.27.212-3.174.635-.905.424-1.605 1.039-2.1 1.846-.312.495-.53 1.094-.654 1.797-.124.703-.186 1.77-.186 3.203v10.078h-5.722v-21.875h5.722v3.399c.56-1.25 1.42-2.217 2.579-2.9 1.158-.684 2.513-1.026 4.062-1.026a9.35 9.35 0 014.434 1.113v5.45zm16.952-1.915c-1.367 0-2.441.602-3.222 1.807-.781 1.204-1.172 2.88-1.172 5.03 0 2.148.39 3.824 1.172 5.029.781 1.204 1.855 1.806 3.222 1.806 1.38 0 2.461-.602 3.243-1.806.78-1.205 1.171-2.881 1.171-5.03 0-2.148-.39-3.825-1.171-5.03-.782-1.204-1.862-1.806-3.243-1.806zm-10.117 6.836c0-3.528.915-6.325 2.744-8.388 1.83-2.064 4.287-3.096 7.373-3.096 3.1 0 5.564 1.032 7.393 3.096 1.83 2.063 2.744 4.86 2.744 8.388 0 3.529-.915 6.325-2.744 8.389-1.83 2.064-4.294 3.096-7.393 3.096-3.086 0-5.543-1.032-7.373-3.096-1.829-2.064-2.744-4.86-2.744-8.389zm47.969-4.922a6.146 6.146 0 00-2.198-1.289c-.84-.286-1.76-.43-2.763-.43-1.211 0-2.27.212-3.174.635-.905.424-1.605 1.039-2.1 1.846-.312.495-.53 1.094-.654 1.797-.124.703-.186 1.77-.186 3.203v10.078h-5.722v-21.875h5.722v3.399c.56-1.25 1.42-2.217 2.579-2.9 1.158-.684 2.513-1.026 4.062-1.026a9.35 9.35 0 014.434 1.113v5.45z'
        id='prefix__path-1'
      />
    </defs>
    <g id='prefix__Logo' stroke='none' strokeWidth={1} fill='none' fillRule='evenodd'>
      <g id='prefix__Group' transform='translate(-1)'>
        <path
          id='prefix__Rectangle'
          fillRule='nonzero'
          className='prefix__remirror-rectangle'
          style={{
            animationDuration: '20s',
            animationDirection: 'alternate',
            animationName: 'logo-background',
            animationIterationCount: 'infinite',
          }}
          d='M1 0h216v216H1z'
        />
        <path
          d='M104.984 60.358c-3.869-3.46-8.403-6.055-13.602-7.785-5.2-1.73-10.902-2.595-17.11-2.595-7.496 0-14.045 1.278-19.647 3.833-5.603 2.556-9.935 6.271-12.999 11.146-1.934 2.989-3.284 6.606-4.05 10.852s-1.149 10.693-1.149 19.343v60.86H1v-132.1h35.427v20.523c3.466-7.549 8.786-13.387 15.96-17.515 7.175-4.129 15.558-6.193 25.15-6.193 4.837 0 9.573.57 14.208 1.71a58.322 58.322 0 0113.24 5.013v32.908z'
          id='prefix__r'
          fill='#37393A'
          className='prefix__remirror-r'
          style={{
            animationDuration: '20s',
            animationDirection: 'alternate',
            animationName: 'r-color-change',
            animationIterationCount: 'infinite',
          }}
        />
        <path
          d='M215.984 60.358c-3.869-3.46-8.403-6.055-13.602-7.785-5.2-1.73-10.902-2.595-17.11-2.595-7.496 0-14.045 1.278-19.647 3.833-5.603 2.556-9.935 6.271-12.999 11.146-1.934 2.989-3.284 6.606-4.05 10.852s-1.149 10.693-1.149 19.343v60.86H112v-132.1h35.427v20.523c3.466-7.549 8.786-13.387 15.96-17.515 7.175-4.129 15.558-6.193 25.15-6.193 4.837 0 9.573.57 14.208 1.71a58.322 58.322 0 0113.24 5.013v32.908z'
          id='prefix__r'
          fill={color}
          className='prefix__remirror-r-reverse'
          transform='matrix(-1 0 0 1 327.984 0)'
          style={{
            animationDuration: '20s',
            animationDirection: 'alternate',
            animationName: 'r-reverse-color-change',
            animationIterationCount: 'infinite',
          }}
        />
        <path id='prefix__Rectangle' fill='#C7D3DD' fillRule='nonzero' d='M104 0h8v156h-8z' />
        <use fill='#A9AEB1' xlinkHref='#prefix__path-1' className='prefix__bounce' id='prefix__remirror' />
      </g>
    </g>
  </svg>
);

export default Logo;
