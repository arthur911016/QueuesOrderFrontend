import styled from "styled-components";

export const FlexDiv = styled.div`
  display: flex;
`;

interface IStyledButtonProps {
    bgColor?: string;
}

export const StyledButton = styled(FlexDiv)`
  justify-content: center;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${(props: IStyledButtonProps) => props.bgColor || 'white'};
  color: ${(props: IStyledButtonProps) => props.bgColor ? 'white' : 'black'};
  box-shadow: ${(props: IStyledButtonProps) => props.bgColor || 'rgb(0 0 0)'} 0 0 1px 0;
  height: 25px!important;
  & svg {
    width: 30px;
    height: 30px;
    &:not(:last-child) {
      margin-left: 5px; 
    }
  }
  & > span {
    margin-right: 5px;
    &:first-child {
      margin-left: 5px;
    }
  }
`

export const StyledModalBackDrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: #0000007a;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledDialog = styled(FlexDiv)`
    flex-direction: column;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    & >span {
      text-align: start;
      &.tittle {
        margin-bottom: 8px;
        font-size: 18px;
      }
    }
    & > div {
      display: flex;
      align-items: center;
      &.textContainer {
        margin: 10px 0;
        & > svg {
          width: 30px;
          height: 30px;
          margin-right: 8px;
        }
      }
      &.buttonsContainer {
        flex-direction: row-reverse;
        &> *:last-child {
          margin-right: 5px;
        }
      } 
    }
`;

export const StyledOverlay = styled(FlexDiv)`
    color: white;
    font-size: 18px;
`;