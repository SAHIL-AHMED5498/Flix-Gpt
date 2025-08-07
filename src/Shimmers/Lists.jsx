import React from "react";
import { ShimmerPostList } from "react-shimmer-effects";

export class Lists extends  React.Component {
  render() {
    return <div className="scale-50 origin-top-left ml-2 flex w-screen">
        <ShimmerPostList   postStyle="STYLE_FOUR" col={4} row={4} gap={20} />
        <ShimmerPostList postStyle="STYLE_FOUR" col={4} row={4} gap={20} />
    
    </div>;
  }
}