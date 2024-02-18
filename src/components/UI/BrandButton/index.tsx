import { ClassAttributes, ButtonHTMLAttributes } from 'react';
import { JSX } from 'react/jsx-runtime';
import classes from './index.module.css';

const BrandButton = function (
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLButtonElement> &
    ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      {...props}
      className={props.className ? [props.className, classes.button].join(' ') : classes.button}
    >
      {props.children}
    </button>
  );
};

export default BrandButton;
