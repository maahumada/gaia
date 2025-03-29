import Image from "next/image";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px rgba(0, 0, 0, .4);
  background: #F6EDDC;
  height: 70px;
  z-index: 20;
  position: relative;
  gap: 80px;
`

export const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LinkIcon = styled(Link)`
  filter: ${props => props.selected ? 
    "brightness(0) saturate(100%) invert(22%) sepia(86%) saturate(326%) hue-rotate(99deg) brightness(89%) contrast(84%);" 
    : 
    "brightness(0) saturate(100%) invert(19%) sepia(13%) saturate(0%) hue-rotate(236deg) brightness(106%) contrast(82%);" 
  };
`

export const LinkIconImage = styled(Image)``

export const MainButton = styled.button`
  border: none;
  background: #23513B;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%) translateX(-50%);
  box-shadow: 0 0 4px rgba(0, 0, 0, .4);
  position: absolute;
  left: 50%;
  top: 0;
  cursor: pointer;
`

export const MainButtonIcon = styled(Image)`
  margin-left: 2px;
`

export const HiddenInput = styled.input`
  display: none;
`

export const ModalBackground = styled.div`
  background: rgba(0, 0, 0, .8);
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 98;
  top: 0;
  left: 0;
`

export const Modal = styled.form`
  position: fixed;
  top: 80px;
  left: 3%;
  height: calc(100vh - 252px);
  padding: 16px;
  width: 94%;
  background: #F6EDDC;
  box-shadow: 0 0 8px rgba(0, 0, 0, .4);
  border-radius: 8px;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  overflow-y: auto;
`

export const ModalTitle = styled.p`
  font-size: 30px;
  font-weight: 700;
  color: #23513B;
`

export const ModalImagePreview = styled(Image)`
  border-radius: 8px;
  border: 4px solid #23513B;
`

export const ModalInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`

export const ModalLabel = styled.label`
  font-size: 24px;
  font-weight: 700;
  color: #23513B;
`

export const ModalInput = styled.input`
  font-size: 20px;
  font-weight: 400;
  color: #000000;
  background: #F6EDDC;
  padding: 6px 16px;
  border-radius: 8px;
  border: none;
  outline: none;
  box-shadow: 0 0 4px rgba(0, 0, 0, .4);
  width: 100%;
`

export const ModalSubmit = styled.button`
  width: 100%;
  padding: 8px 0;
  background: #23513B;
  border: none;
  border-radius: 8px;
  font-size: 24px;
  font-weight: 700;
  color: #F6EDDC;
  margin: 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const ModalCloseButton = styled.button`
  align-self: flex-end;
  border: none;
  background: none;
  cursor: pointer;
`

export const ModalCloseButtonIcon = styled(Image)`

`

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const ModalSubmitLoading = styled(Image)`
  filter: brightness(0) saturate(100%) invert(90%) sepia(25%) saturate(133%) hue-rotate(352deg) brightness(103%) contrast(93%);
  animation: ${rotate} 1s forwards infinite linear;
`