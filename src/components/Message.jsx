import React, { useState, useEffect } from "react";
import checkBox from "../assets/checkbox.gif";
const Message = ({ showMessage, message }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (showMessage) {
      setIsVisible(true);
      // Hide the message after a few seconds (e.g., 3 seconds)
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      return () => {
        clearTimeout(timer); // Clear the timer on unmount (cleanup)
      };
    }
  }, [showMessage]);

  return (
    <div
      className={`popup ${
        isVisible ? "visible" : "hidden"
      } absolute left-1/2 w-1/3 -translate-x-1/2 h-[200px] border bg-[#3C3C3C] rounded-md flex items-center justify-center flex-col`}
    >
      <div className="w-20">
        <img src={checkBox} alt="" />
      </div>
      <p className="text-slate-50">{message}</p>
    </div>
  );
};

export default Message;
