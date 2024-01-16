


import styled from 'styled-components';

export const ButtonContainer = styled.div`
    display: inline-flex;
    gap: ${p => p.theme.spacing(4)};
    margin-right: auto;
    margin-left: auto;

`;

export const Button = styled.button`
    padding: ${p => p.theme.spacing(4)};
    border-radius: ${p => p.theme.radii.md};
    border: none;
    background-color: ${p => p.theme.colors.lightB};
    color: ${p => p.theme.colors.black};
    text-transform: capitalize;
    font-size: 20px;
    font-weight: 400;

    &:hover {
        background-color: ${p => p.theme.colors.blue};
        color: ${p => p.theme.colors.white};
        box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.08),
    0px 1px 1px rgba(0, 0, 0, 0.16), 0px 1px 6px rgb#00000014
    }

`;