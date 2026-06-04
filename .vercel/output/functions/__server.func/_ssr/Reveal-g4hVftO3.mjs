import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
const variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};
function RevealBase({
  children,
  delay = 0,
  className,
  as = "div"
}) {
  const Comp = motion[as];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      className,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true, margin: "-80px" },
      variants,
      transition: { delay },
      children
    }
  );
}
const Reveal = reactExports.memo(RevealBase);
export {
  Reveal as R
};
