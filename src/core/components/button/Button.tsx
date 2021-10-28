import {IButton} from "../../types/types";
import {StyledButton} from "../../styles/styles";

const Button = ({icon,onCLick, text,width, bgColor }: IButton) => {
    return (
        <StyledButton onClick={onCLick} style={{width}} bgColor={bgColor}>
            { icon }
            { text && <span>{text}</span> }
        </StyledButton>
    )
}

export default Button;