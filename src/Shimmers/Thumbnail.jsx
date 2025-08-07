import React from "react";
import { ShimmerThumbnail } from "react-shimmer-effects";

export class Thumbnail extends React.Component {
  render() {
    return <div className="w-full h-full  "><ShimmerThumbnail  rounded /></div>
  }
}