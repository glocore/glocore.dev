import { motion } from "framer-motion";
import React from "react";

const Eyes = ({ mouseCoordinates, ...rest }) => {
  const eyesRef = React.useRef();

  const getEyeStyle = () => {
    if (eyesRef.current) {
      const left = eyesRef.current.getBoundingClientRect().left;
      const top = eyesRef.current.getBoundingClientRect().top;

      // distance from eyes to mouse pointer
      const mouseX = mouseCoordinates.x - left;
      const mouseY = mouseCoordinates.y - top;

      const rotationRadians = Math.atan2(mouseX, mouseY);
      const rotationDegrees = rotationRadians * (180 / Math.PI) * -1 + 180;

      return { transform: `rotate(${rotationDegrees}deg)`, zIndex: -10 };
    }
  };

  return (
    <div ref={eyesRef} className="eyes" {...rest}>
      <motion.div
        className="eye"
        animate={{ ...getEyeStyle() }}
        transition={{ type: "spring", duration: 0.5 }}
      />
      <motion.div
        className="eye"
        animate={{ ...getEyeStyle() }}
        transition={{ type: "spring", duration: 0.5 }}
      />
    </div>
  );
};

export default Eyes;
