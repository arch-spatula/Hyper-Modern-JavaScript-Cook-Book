import React, { useEffect, useRef } from "react";

function Comment() {
  const containerRef = useRef(null);

  useEffect(() => {
    const createUtterancesEl = () => {
      const script = document.createElement("script");
      script.src = "https://giscus.app/client.js";
      script.setAttribute(
        "data-repo",
        "arch-spatula/Hyper-Modern-JavaScript-Cook-Book"
      );
      script.setAttribute("data-repo-id", "R_kgDOIDtyvA");
      script.setAttribute("data-category", "General");
      script.setAttribute("data-category-id", "DIC_kwDOIDtyvM4CV6lR");
      script.setAttribute("data-mapping", "pathname");
      script.setAttribute("data-strict", "0");
      script.setAttribute("data-reactions-enabled", "1");
      script.setAttribute("data-emit-metadata", "0");
      script.setAttribute("data-input-position", "bottom");
      script.setAttribute("data-theme", "preferred_color_scheme");
      script.setAttribute("data-lang", "ko");
      script.setAttribute("data-loading", "lazy");
      script.setAttribute("crossorigin", "anonymous");

      // script.setAttribute("issue-term", "title");
      // script.setAttribute("label", "comment");
      // script.setAttribute("theme", "github-light");
      // script.crossOrigin = "anonymous";
      script.async = true;

      containerRef.current.appendChild(script);
    };

    createUtterancesEl();
  }, []);

  return <div ref={containerRef} />;
}

export default Comment;
