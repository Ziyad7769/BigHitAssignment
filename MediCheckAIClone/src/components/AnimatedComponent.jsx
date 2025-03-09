import React, { useEffect, useState } from "react";
import BigCircuit from "../assets/big-circuit.png";
import BigLight from "../assets/big-light.png";

const CircuitAnimation = () => {
  const [circuitScale, setCircuitScale] = useState(0.75);
  const [lightScale, setLightScale] = useState(1);
  const [animationPhase, setAnimationPhase] = useState("full");

  useEffect(() => {
    const runAnimationSequence = async () => {
      while (true) {
        // Phase 1: Scale down the circuit
        setAnimationPhase("scaleDown");
        setCircuitScale(0.75);
        setLightScale(0.9);
        await new Promise((resolve) => setTimeout(resolve, 1200));

        // Pause at small size
        setAnimationPhase("small");
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Phase 2: Scale up the circuit
        setAnimationPhase("scaleUp");
        setCircuitScale(1);
        setLightScale(1.1); // Slightly increase light size
        await new Promise((resolve) => setTimeout(resolve, 1200));

        // Pause at full size
        setAnimationPhase("full");
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }
    };

    runAnimationSequence();

    // Cleanup function to prevent memory leaks
    return () => {
      // This would ideally cancel any pending animations
      // With setTimeout, we don't have a clean way to cancel the entire sequence
      // but in a real app, you might use cancelAnimationFrame or clear specific timeouts
    };
  }, []);

  return (
    <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] flex items-center justify-center">
      {/* Static Background Light */}
      <img
        src={BigLight}
        alt="Light Effect"
        className="absolute w-full h-full transition-transform duration-[2000ms] ease-out"
        style={{ transform: `scale(${lightScale})` }}
      />

      {/* Animated Circuit */}
      <img
        src={BigCircuit}
        alt="Circuit"
        className="absolute w-[80%] transition-transform duration-[1000ms] ease-out"
        style={{ transform: `scale(${circuitScale})` }}
      />
    </div>
  );
};

export default CircuitAnimation;