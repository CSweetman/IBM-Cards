import * as React from "react";
import { useState } from "react";
import blue from "@material-ui/core/colors/lightBlue";
import styled from "styled-components";
import EditIcon from '@material-ui/icons/Edit';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


interface boxInfo {
  num: string;
  title: string;
  description: string;
  time: string;
  filePath: string;
  fileName: string;
}

export const CardBox = styled.div`
  display: block;
  width: 24vw;
  min-width: 300px;
  height: 250px;
  max-width: 100vw;
  padding: 0 20px;
  border: 2px #ccc solid;
  color: #fff;
  background-color: #000;
  position: relative;
`
export const TimeLeft = styled.p`
  position: relative;
  top: 0.5rem; 
  font-size: 14px;
`

export const CardTitle = styled.h3`
  position: absolute;
  top: 1rem;
`

export const CardDesc = styled.h4`
  position: relative;
`
export const OffForwardArrow = styled(ArrowForwardIcon)`
  position: "absolute";
  left: ${window.innerWidth>1350? "24rem":"18rem"};
  top: "10rem";
`

export const AnchorComponent = styled.a`
  text-decoration: inherit;
  color: inherit;
  cursor: auto;
`

const Card = ({ num, title, description, time, filePath, fileName }: boxInfo) => {
  const [isMouseOn, setMouse] = useState(false);
  return (
    <CardBox onMouseEnter={() => setMouse(true)} onMouseLeave={() => setMouse(false)} onClick={() => {}}>
      <>
        <AnchorComponent href={filePath} download={fileName}>
        <div style={{opacity: isMouseOn ? "1" : "0", transition: ".33s"}}>
          <CardDesc>{description}<TimeLeft>{time}</TimeLeft></CardDesc><br />
          <ArrowForwardIcon style={{color: "#114D97", position: "absolute", left: window.innerWidth>1350? "24rem": "17rem", top: "10rem"}}/>
        </div>
          <div style={{opacity: isMouseOn ? "0" : "1", transition: ".33s"}}>
            <CardTitle>{title}</CardTitle>
            <ArrowForwardIcon style={{position: "absolute", left: window.innerWidth>1350? "25rem":"18rem", top: "10rem"}}/>
            
          </div>
          </AnchorComponent>
        </>
        
    </CardBox>
  );
};

export default Card;
