import type { NextPage } from "next";
import styles from "./SmoothCorner.module.scss";
import { useEffect } from "react";

import attachPaintWorklet from "../../lib/attachPaintWorklet";

const SmoothCorner: NextPage<any> = ({ children, ...props }) => {
  useEffect(() => {
    attachPaintWorklet();
  }, []);
  return (
    <div className={[props.className, "smoothed"].join(" ")}>{children}</div>
  );
};

export default SmoothCorner;
