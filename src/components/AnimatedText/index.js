"use client"

import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const { Animated } = require("./styles")

const AnimatedText = ({ target }) => {

  const number = useMotionValue(0);
  const springValue = useSpring(number, { stiffness: 80, damping: 20  });
  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    number.set(target);
  }, [target, number]);

  useEffect(() => {
    const unsubscribe = springValue.onChange((latest) => {
      setDisplayNumber(Math.floor(latest)); // Update state on animation change
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, [springValue]);

  useEffect(() => {
    
  })

  return (
    <Animated>{displayNumber}</Animated>
  )
}

export default AnimatedText;