import styled, { keyframes } from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: #F6EDDC;
`

export const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const CloseButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  align-self: flex-end;
  margin-right: 24px;
`

export const CloseButtonIcon = styled(Image)``

const fadeInSize = keyframes`
  0% { opacity: 0; transform: scale(0); transform: rotate3d(0, 1, 0, 45deg); }
  100% { opacity: 1; transform: scale(1); transform: rotate3d(0, 1, 0, 0deg); }
`

export const LoadingTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #23513B;
  text-align: center;
  animation: ${fadeInSize} .6s forwards 1 ease-out;
  animation-delay: .2s;
  transform: scale(0);
`

const fadeIn = keyframes`
  0% { opacity: 0; transform: scale(0); }
  100% { opacity: 1; transform: scale(1); }
`

const floating = keyframes`
  0% { margin-top: 4px; margin-bottom: -4px; }
  50% { margin-top: -4px; margin-bottom: 4px; }
  100% { margin-top: 4px; margin-bottom: -4px; }
`

export const LoadingLogoContainer = styled.div``

export const LoadingLogo = styled(Image)`
  animation: ${floating} 3s forwards infinite cubic-bezier(0.25, 0.1, 0.25, 1.0), ${fadeIn} .6s forwards 1 ease-out;
  animation-delay: .2s;
  transform: scale(0);
`

const titleAnimation = keyframes`
  0% { transform: scale(0) rotateX(90deg); opacity: 0.2; }
  100% { transform: scale(1) rotateX(0deg);  opacity: 1; }
`

const float = keyframes`
  0% { margin-top: 4px; margin-bottom: -4px; }
  50% { margin-top: -4px; margin-bottom: 4px; }
  100% { margin-top: 4px; margin-bottom: -4px; }
`

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 800;
  color: #23513B;
  animation: ${titleAnimation} 1s forwards 1 ease-out, ${float} 3s forwards infinite cubic-bezier(0.25, 0.1, 0.25, 1.0);
  text-align: center;
  max-width: 100%;
`

const imageAnimation = keyframes`
  0% { transform: scale(0); opacity: 0.5; }
  100% { transform: scale(1); opacity: 1; }
`

export const MainImage = styled(Image)`
  border-radius: 8px;
  border: 4px solid #23513B;
  animation: ${imageAnimation} 1s forwards 1 ease-out, ${float} 3s forwards infinite cubic-bezier(0.25, 0.1, 0.25, 1.0);
  z-index: 99;
`

export const Metadata = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #424242;
  max-width: 90%;
  text-align: center;
  margin-top: 12px;
`

export const AIResponse = styled.div`
  width: 90%;
  margin-top: 12px;
  font-size: 20px;
  max-height: calc(100vh - 600px);
  overflow-y: auto;
  padding: 8px 16px;
  box-shadow: 0 0 4px rgba(0, 0, 0, .4);
  border-radius: 8px;
  position: relative;
`

export const AIResponseText = styled.p``

export const ResponseBackground = styled(Image)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  opacity: 0.1;
`

const endangeredAnimation = keyframes`
  0% { transform: scale(0); opacity: 0.2; }
  100% { transform: scale(1);  opacity: 1; }
`

export const EndangeredAlert = styled.div`
  background-color: rgba(255, 0, 0, 0.1);
  color: rgb(206, 66, 27);
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  font-size: 28px;
  padding: 12px 16px;
  border-radius: 8px;
  margin: 0 16px;
  text-align: center;
  border: 3px solid rgb(206, 66, 27);
  animation: ${endangeredAnimation} 1s forwards 1 ease-out;
`;

export const ErrorTitle = styled.p`
  font-size: 32px;
  font-weight: 700;
  color: #23513B;
  text-align: center;
  max-width: 90%;
`

export const ErrorText = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #23513B;
  text-align: center;
  max-width: 90%;
`

export const ErrorSubtitle = styled.p`
  font-size: 26px;
  font-weight: 700;
  color: #23513B;
  text-align: center;
  max-width: 90%;
`