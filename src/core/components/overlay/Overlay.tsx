import {StyledModalBackDrop, StyledOverlay} from "../../styles/styles";
import {IOverlayProps} from "../../types/types";

const Overlay = ({title}: IOverlayProps) => {

    return (
        <StyledModalBackDrop>
            <StyledOverlay>
                <span><b>{title}</b></span>
            </StyledOverlay>
        </StyledModalBackDrop>
    )
}

export default Overlay;