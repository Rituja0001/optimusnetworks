import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Reusable scroll-triggered text reveal component.
 * Supports word-by-word staggered fade-up with optional cinematic blur effect.
 */
export function RevealHeading({ 
  children, 
  className = "", 
  as = "h2", 
  blur = false, 
  delay = 0,
  stagger = 0.035,
  once = true
}) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.h2;

  // Split string children into words if children is a string
  const isString = typeof children === 'string';
  
  if (shouldReduceMotion || !isString) {
    return (
      <Component 
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once }}
        transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
        className={className}
      >
        {children}
      </Component>
    );
  }

  const words = children.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      }
    }
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 18, 
      filter: blur ? 'blur(8px)' : 'blur(0px)' 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { 
        duration: 0.65, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  return (
    <Component
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-40px" }}
      className={`inline-block ${className}`}
    >
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block whitespace-nowrap mr-[0.25em]">
          <motion.span variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}

/**
 * Paragraph / subtext block scroll reveal.
 */
export function RevealText({
  children,
  className = "",
  delay = 0.15,
  as = "p",
  once = true
}) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.p;

  return (
    <Component
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-30px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}
