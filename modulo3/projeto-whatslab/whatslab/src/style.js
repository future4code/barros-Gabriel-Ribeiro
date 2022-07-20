import styled from "styled-components";

export const Mensagens=styled.div`
    display: flex;
    justify-content: center;
    div{
        display: flex;
        background-color: lightyellow;
        padding: 0vh 1vh;
        margin: 1.5vh 4vh;
        p {
            margin: 1vh;
        }
    }
`

export const MainContainer=styled.div`
    width: 70vh;
    align-items: center;
    justify-content: center;
    text-align: left;
    border: 1px solid lightgray;
    border-radius: 8px;
    margin: 20vh 62vh;
    box-shadow: 2px 2px 6px gray;
`

export const Formulario=styled.form`
    display: flex;
    background-color: lightgray;
    margin:1vh;
    padding: 1vh;
    border-radius: 4px;
    input{
        margin: 1vh;
        font-size: 1vw;
        border: 0px;
        width: 10vh;
    }
    button{
        margin: 1vh 1vh;
        font-size: 1vw;
        background-color: green;
        border: 0px;
        border-radius: 2px;
        font-weight: 600;
        color: white;
    }
`

export const FormMsg=styled.div`
    input{
        width: 41vh;
        margin: 1vh;
        font-size: 1vw;
        border: 0px
    }
    
`