import styled from 'styled-components';

export const Ship = styled.div`
    width: 0;
    height: 0;
    position: absolute;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 40px solid aqua;
    transform-origin: center;
    transform: translate(${props => props.x}px, ${props => props.y}px) rotate(${props => props.angle}deg);
`
