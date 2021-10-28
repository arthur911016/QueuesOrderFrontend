import styled from "styled-components";
import {FlexDiv} from "../../../core/styles/styles";


export const StyledTicketComponent = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  & > span {
    font-size: 22px;
    font-weight: bolder;
    color: #5e5c57;
  }

  background-image: url("data:image/png;base64,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");
`

export const StyledQueueContainer = styled(FlexDiv)`
  flex-direction: column;
  width: 60%;
  padding: 10px 0;
`

export const StyledQueueLayout = styled(FlexDiv)`
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`

export const StyledQueueRow = styled(FlexDiv)`
  justify-content: space-between;
  align-items: center;
  & > div:first-child {
    width: calc(100% - 145px);
  }
  & > *:last-child {
    width: 140px;
  }
  & span.statusSpan {
    text-align: end;
  }
`;

export const StyledActionsContainer = styled(FlexDiv)`
  justify-content: space-between;
  width: 90px;
`;

export const StyledQueueStatus = styled(FlexDiv)`
  flex-direction: column;
  width: 60%;
  padding: 10px 0;
  & > div.buttonContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    & > div:last-child {
      height: 35px;
    }
  }
  & > span {
    margin-top: 10px;
    text-align: start;
    margin-left: 5px;
    font-size: 20px;
  }
`;

export const TopDataContainer = styled(FlexDiv)`
  height: 50px;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  margin-bottom: 25px;
`;

export const StyledMessageContainer = styled(FlexDiv)`
  height: 200px;
  font-size: 20px;
  justify-content: center;
  align-items: center;

  & b {
    color: #c95d6b;
  }
`;

export const StyledCreateButtonContainer = styled(FlexDiv)`
  flex-direction: row-reverse;
`