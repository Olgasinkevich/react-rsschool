import React from 'react';

type FrameType = {
    className: string;
    children: JSX.Element;
};

export default function Frame (props: FrameType): JSX.Element {
   return (
       <div className={`border-home-page ${props.className}`}>
           {props.children}
       </div>
   )
};
