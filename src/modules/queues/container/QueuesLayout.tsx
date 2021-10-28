import QueuesListComponent from "../components/queuesListComponent/QueuesListComponent";
import {StyledQueueLayout} from "../styles/styles";
import {createContext, useContext} from "react";
import {QueuesStores} from "../stores/QueuesStores";
import {observer} from "mobx-react";
import QueueDetailsComponent from "../components/queueDetailsComponent/QueueDetailsComponent";
import EditCreateList from "../components/editCreateList/EditCreateList";
import Dialog from "../../../core/components/dialog/Dialog";
import {DeleteIcon} from "../../../core/icons/Icons";
import Modal from "../../../core/components/modal/Modal";

export const QueuesContext = createContext({
    store: new QueuesStores()
})

const QueuesLayout = () => {

    const { store } = useContext(QueuesContext);
    const {
        queue,
        deleteQueue,
        setQueueToDelete,
        queueToDelete,
        queueToEdit,
        closeEditQueue,
        handleOkCreateOrEditQueue,
        modalQueueTitle
    } = store;

    return (
        <QueuesContext.Provider
            value = {{
                store
            }}
        >
            <StyledQueueLayout>
                {
                    !queue ? <QueuesListComponent/>: <QueueDetailsComponent/>
                }
                {
                    !!queueToDelete &&
                    <Dialog
                        onOk={deleteQueue}
                        onClose={setQueueToDelete()}
                        title={'Delete queue'}
                        text={`Are you sure you want to delete the queue # ${queueToDelete}?`}
                        icon={<DeleteIcon/>}
                    />
                }
                {
                    !!queueToEdit?.isOpenEdit &&
                    <Modal
                        onOk={handleOkCreateOrEditQueue}
                        onClose={closeEditQueue}
                        title={modalQueueTitle}
                        subTitle={`( note: You can drag and drop to order the list )`}
                    >
                        <EditCreateList/>
                    </Modal>
                }
            </StyledQueueLayout>
        </QueuesContext.Provider>
    );
}

export default observer(QueuesLayout);
