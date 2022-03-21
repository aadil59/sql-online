import React from "react";

const IconChevron = (props) => {
  return (
    <svg
      width={props.size || "9"}
      height={props.size || "9"}
      x="0"
      y="0"
      viewBox="0 0 494.148 494.148"
    >
      <g>
        <g xmlns="http://www.w3.org/2000/svg">
          <g>
            <path
              d="M405.284,201.188L130.804,13.28C118.128,4.596,105.356,0,94.74,0C74.216,0,61.52,16.472,61.52,44.044v406.124    c0,27.54,12.68,43.98,33.156,43.98c10.632,0,23.2-4.6,35.904-13.308l274.608-187.904c17.66-12.104,27.44-28.392,27.44-45.884    C432.632,229.572,422.964,213.288,405.284,201.188z"
              fill={props.color || "#ffffff"}
              data-original="#000000"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default IconChevron;
