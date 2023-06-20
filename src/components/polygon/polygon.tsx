import React from "react";
interface PolygonProps {
  color: string;
  faixa: string;
  className: string;
}
export const Polygon = ({ color, className, faixa }: PolygonProps) => {
  return (
    <div className="h-[49px] w-[95px] relative flex justify-center items-center">
      <svg
        width="95"
        height="49"
        viewBox="0 0 95 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.80162 13.4104L47.5 1.5497L93.1984 13.4104V35.5896L47.5 47.4503L1.80162 35.5896V13.4104Z"
          stroke={color}
          strokeWidth="3"
        />
      </svg>
      <div className="absolute text-yellow">
        <p className={className}>{faixa}</p>
      </div>
    </div>
  );
};
