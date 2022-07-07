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
    width: 300px;
    margin-bottom: 10px;
`

export const PostHeader=styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 10px;
`

export const PostFooter=styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    justify-content: space-between;
`

export const UserPhoto=styled.div`
    background-image: url(${(props)=>props.fotoUsuario});
    height: 30px;
    width: 30px;
    margin-right: 10px;
    border-radius: 50%;
`

export const PostPhoto=styled.div`
    background-image: url(${(props)=>props.fotoPost});
    width: 100%;
`