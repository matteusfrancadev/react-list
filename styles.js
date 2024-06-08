import styled from "styled-components";


export const Main = styled.main`
    width: 350px;
    background-color: white;
    margin-left: auto;
    margin-right: auto;
    padding: 60px;
    border-radius: 5px;
    margin-top: 100px;
`
export const Input = styled.input`
    margin-left: 40px;
    height: 20px;
    width: 185px;
    border-radius: 5px;
    padding: 5px;
    border: none;
    border: 2px solid #D1D3D466;
    font-size: 13px;
`

export const Button = styled.button`
    margin-left: 10px;
    height: 30px;
    width: 100px;
    border-radius: 5px;
    border: none;
    background: #8052EC;
    cursor: pointer;
`

export const Li = styled.li`
    list-style: none;
    width: 380px ;
    border-radius: 5px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
`

export const ListItem = styled.div`
    display: flex;
    align-items: center;
    background: ${ props => props.isFinished ? '#E8FF8B' : '#E4E4E4'};
    box-shadow: 1px 4px 10px 0px #00000033;
    padding: 0 7px;
    margin-bottom: 20px;
`
