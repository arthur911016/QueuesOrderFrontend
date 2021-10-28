import {StyledTicketComponent} from "../../styles/styles";
import {ITicketComponent} from "../../types/types";


const TicketComponent = ({ ticket }: ITicketComponent) => {

    return <StyledTicketComponent><span>{ ticket }</span></StyledTicketComponent>;
}

export default TicketComponent;
