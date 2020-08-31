import React, { useEffect, useCallback, useState, Fragment } from "react";
import Loading from "../loading/Loading";

export default function Section({ children, className, fullWidth }) {
  const [isLoading, setIsLoading] = useState(
    document.readyState !== "complete"
  );
  const loadingCallback = useCallback(() => {
    setIsLoading(!isLoading);
  }, [isLoading]);
  useEffect(() => {
    window.addEventListener("load", loadingCallback);

    return () => {
      window.removeEventListener("load", loadingCallback);
    };
  }, [loadingCallback]);

  return (
    <Fragment>
      {isLoading ? <Loading /> : null}
      <section
        className={className}
        style={{
          width: fullWidth ? "100%" : "50%",
          display: isLoading ? "none" : "flex",
          height: "inherit"
        }}
      >
        {children}
      </section>
    </Fragment>
  );
}
