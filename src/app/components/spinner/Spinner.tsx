import React from "react";
import { motion } from "framer-motion";

const Spinner: React.FC = () => {
  return (
    <motion.div
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        border: "5px solid #ccc",
        borderTopColor: "#0f52ba",
        position: "relative",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, loop: Infinity, ease: "linear" }}
    ></motion.div>
  );
};

export default Spinner;
