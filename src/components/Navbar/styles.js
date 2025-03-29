import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .4);
  background: #F6EDDC;
  height: 60px;
  z-index: 1;
`

export const Logo = styled(Link)`
  color: #23513B;
  font-size: 40px;
  font-weight: 700;
  text-decoration: none;
`

export const Profile = styled(Image)``