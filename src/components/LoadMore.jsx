import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
display: inline-block;
border-radius: 3px;
padding: 0.5rem 0;
margin: 0.5rem 1rem;
width: 11rem;
background-color: #f5cd79;
color: white;
border: 2px solid #f5cd79;`

export default function LoadMore() {
    return (
        <div className="button.class">
            <Button onClick={() => {

            }}>LOAD MORE...</Button>
        </div>

    )
}