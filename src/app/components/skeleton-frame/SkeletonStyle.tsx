import styled, { keyframes } from "styled-components";

const shimmerAnimation = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

export const SkeletonProductItemWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  position: relative;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  width: 251px;
  height: 328px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const SkeletonShimmer = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #f2f2f2 8%, #e0e0e0 18%, #f2f2f2 33%);
  background-size: 1000px 100%;
  animation: ${shimmerAnimation} 1s infinite linear;
`;

export const SkeletonImage = styled(SkeletonShimmer)`
  width: 100%;
  height: 160px;
  border-radius: 8px 8px 0 0;
  margin-bottom: 8px;
  `;

export const SkeletonInfoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  
`;

export const SkeletonPrice = styled(SkeletonShimmer)`
  width: 74px;
  height: 30px;
  border-radius: 5px;
  border: none;
`;

export const SkeletonTitle = styled(SkeletonShimmer)`
  width: calc(100% - 84px);
  height: 20px;
  word-break: break-word;
`;

export const SkeletonText = styled(SkeletonShimmer)`
  width: 80%;
  height: 20px;
  margin-top: 10px;
  border-radius: 4px;
`;

export const SkeletonButton = styled(SkeletonShimmer)`
  width: 100%;
  height: 40px;
  margin-top: auto;
  border-radius: 0 0 8px 8px; /* Arredondar apenas a parte inferior */
`;
