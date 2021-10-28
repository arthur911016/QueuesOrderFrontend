import {StyledDialog, StyledModalBackDrop} from "../../styles/styles";
import {IDialogProps} from "../../types/types";
import Button from "../button/Button";

const Dialog = ({onClose,text,title,onOk,icon}: IDialogProps) => {

    const avoidCloseOnClick = (event: any) => {
        event?.stopPropagation?.()
    }

    return (
        <StyledModalBackDrop onClick={onClose}>
            <StyledDialog onClick={avoidCloseOnClick}>
                <span className={'tittle'}><b>{title}</b></span>
                <div className={'textContainer'}>
                    { icon }
                    <span>{text}</span>
                </div>
                <div className={'buttonsContainer'}>
                    <Button onCLick={onOk} text={'Ok'} bgColor={'#558B2F'}/>
                    <Button onCLick={onClose} text={'Cancel'} bgColor={'#C62828'}/>
                </div>
            </StyledDialog>
        </StyledModalBackDrop>
    )
}

export default Dialog;