import {StyledDialog, StyledModalBackDrop} from "../../styles/styles";
import {IModalProps} from "../../types/types";
import Button from "../button/Button";

const Modal = ({onClose, onOk,title,children,subTitle}: IModalProps) => {

    const avoidCloseOnClick = (event: any) => {
        event?.stopPropagation?.()
    }

    return (
        <StyledModalBackDrop onClick={onClose}>
            <StyledDialog onClick={avoidCloseOnClick}>
                <span className={'tittle'}><b>{title}</b></span>
                {subTitle && <span>{subTitle}</span>}
                {
                    children
                }
                <div className={'buttonsContainer'}>
                    <Button onCLick={onOk} text={'Ok'} bgColor={'#558B2F'}/>
                    <Button onCLick={onClose} text={'Cancel'} bgColor={'#C62828'}/>
                </div>
            </StyledDialog>
        </StyledModalBackDrop>
    )
}

export default Modal;