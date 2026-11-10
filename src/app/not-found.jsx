import Errors from "@/components/sstErrorPage/Errors";
import React from "react";

const NotFound = () => {
  // React 19 hoists <title> into <head>; Next already adds noindex to 404s.
  return <div>
     <title>Page Not Found | Support Studio Technologies</title>
     <Errors/>
  </div>;
};

export default NotFound;
