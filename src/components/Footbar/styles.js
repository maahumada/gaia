import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px rgba(0, 0, 0, .4);
  background: #F6EDDC;
  height: 70px;
  z-index: 1;
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
  width: 80px;
  height: 80px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-40px) translateX(-50%);
  box-shadow: 0 0 4px rgba(0, 0, 0, .4);
  position: absolute;
  left: 50%;
  top: 0;
  cursor: pointer;
`

export const MainButtonIcon = styled(Image)`
  margin-left: 2px;
`