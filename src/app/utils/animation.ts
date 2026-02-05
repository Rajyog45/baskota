import { Variants } from "framer-motion";

export const fadeLeft: Variants = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
};

export const fadeRight: Variants = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
};

export const viewportOnce = {
  once: true,
  amount: 0.3,
};

export const transitionFast = {
  duration: 0.8,
};

export const progressBar = (value: number) => ({
  initial: { width: 0 },
  whileInView: { width: `${value}%` },
  viewport: { once: true },
  transition: { duration: 1 },
});
