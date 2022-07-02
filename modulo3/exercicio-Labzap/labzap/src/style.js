import styled from "styled-components"

export const novaHeader=styled.header`
background-color: white;
display: flex;
align-items: center;
width: 100%;
height: 10vh;
`
export const Logo=styled.div`
background-image: url(${(props)=>props.backImage});
width: 200px;
height: 50px;
`