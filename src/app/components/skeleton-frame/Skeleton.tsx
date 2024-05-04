import React from "react";
import {
  SkeletonButton,
  SkeletonImage,
  SkeletonInfoWrapper,
  SkeletonPrice,
  SkeletonProductItemWrapper,
  SkeletonText,
  SkeletonTitle,
} from "./SkeletonStyle";

const SkeletonProductItem: React.FC = () => {
  return (
    <SkeletonProductItemWrapper>
      <SkeletonImage />
      <SkeletonInfoWrapper>
        <SkeletonTitle />
        <SkeletonPrice />
      </SkeletonInfoWrapper>
      <SkeletonText />
      <SkeletonButton />
    </SkeletonProductItemWrapper>
  );
};

export default SkeletonProductItem;
