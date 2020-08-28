import React, { useEffect, useCallback, useState, Fragment } from "react";
import Loading from "../loading/Loading";

const sectionStyle = {
  width: "50%",
};

export default function Section(props) {
  const [isLoading, setIsLoading] = useState(document.readyState !== "complete");
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
        className={props.className}
        style={{ ...sectionStyle, display: isLoading ? "none" : "flex" }}
      >
        {props.children}
      </section>
    </Fragment>
  );
}
