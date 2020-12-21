import React from "react";

const Progress = ({ done, i }) => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
      animation: "move 2s linear ",
    };

    setStyle(newStyle);
  }, 500);

  return (
    <div id="boxbar" className="progress">
      <div
        className={i ? "progress-done" : "progress-done disabled"}
        style={style}
      >
        <style>{`
            @keyframes move {
                 0% { width: 0px; }
                 100% {width: ${done}%; }
            }
        `}</style>
        {done}%
      </div>
    </div>
  );
};

export default Progress;
