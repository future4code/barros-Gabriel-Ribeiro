import { Component } from "react";
import styled from "styled-components";

export const MainContainer=styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const PostContainer=styled.div`
    border: 1px solid gray;
    width: 32vh;
    margin: 1vh;
`

export const PostHeader=styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    margin: 1vh;
    img {
        width: 40px;
        height: 40px;
        border-radius: 20px;
    }
    p {
        font-weight: bold;
        margin-left: 1vh
    }
`

export const PostFooter=styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    justify-content: space-between;
    margin: 1vh;
`

export const PostPhoto=styled.div`
img {
        width: 30vh;
        height: 30vh;
        border-radius: 5px;
        margin: 1vh;
    }
`
    
export const Formulario=styled.form`
    display: grid;
    align-items: center;
    justify-content: center;
    margin:1vh;
    width: 100%;
    padding: 1vh;
    input{
        margin: 1vh;
        font-size: 1vw;
    }
    button{
        margin: 1vh;
        font-size: 1vw;
    }
`