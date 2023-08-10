
import React from "react";
import styled from "styled-components";

const Popupbox = styled.div`
position: fixed;
background: #00000050;
width: 100%;
height: 100vh;
top: 0;
left: 0;
`
const Box = styled.div`

width: 30%;
margin-left: 820px;
height: auto;
max-height: 70vh;
margin-top: calc(100vh - 85vh - 20px);
background: #fff;
border-radius: 4px;
padding: 20px;
border: 1px solid #999;
overflow: auto;
`
const CloseIcon = styled.span`
content: 'x';
cursor: pointer;
position: fixed;
right: calc(35% - 10px);
top: calc(100vh - 85vh - 33px);
background: #ededed;
width: 25px;
height: 25px;
border-radius: 50%;
line-height: 20px;
text-align: center;
border: 1px solid #999;
font-size: 20px;
`
export default function popup(props) {
  return (
    <Popupbox>
      <Box>
        <CloseIcon  onClick={props.handleClose}>x</CloseIcon>
        {props.content}
      </Box>
    </Popupbox>
  )
}
