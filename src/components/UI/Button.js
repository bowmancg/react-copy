import styled from 'styled-components'

const Button = styled.button`
font: inherit;
padding: 0.5rem 1.5rem;
border: 1px solid red;
color: black;
background: green;
box-shadow: 0 0 4px black
cursor: pointer;

&:focus {
    outline: none;
}

&:hover,
&:active {
    background: blue;
    border-color: black;
    box-shadow: 0 0 8px black
}
`

export default Button;