import {action, computed, makeObservable, observable} from "mobx";
import queuesServices from "../../../core/services/QueuesServices";
import {IEditQueueProps, QueueType} from "../types/types";


export class QueuesStores {
    queues: QueueType[] = [];
    queue: any = null;
    queueToDelete = 0
    queueToEdit: IEditQueueProps | null = null;
    loadingQueue: boolean = true;
    calculatingBribes = false;
    constructor(){
        makeObservable(this, {
            queues: observable,
            setQueues: action,
            queue: observable,
            setQueue: action,
            queueStatus: computed,
            queueToDelete: observable,
            setQueueToDelete: action,
            queueToEdit: observable,
            setQueueToEdit: action,
            modalQueueTitle: computed,
            loadingQueue: observable,
            listPlaceholder: computed,
            calculatingBribes: observable,
            setCalculationBribes: action
        })
        this.getAllQueues();
    }

    setQueueToEdit = (queueToEdit: IEditQueueProps | null = null) => {
        this.queueToEdit = queueToEdit;
    }

    setLoadingQueues = (loadingQueue: boolean = false) => {
        this.loadingQueue = loadingQueue;
    }

    setCalculationBribes = (calculatingBribes: boolean = false) => {
        this.calculatingBribes = calculatingBribes;
    }

    setQueues = (queues: QueueType[]) => {
        this.queues = queues;
    }

    setQueueToDelete = (queueToDelete = 0) => () => {
        this.queueToDelete = queueToDelete;
    }

    setQueue = (queue: any = null) => {
        this.queue = queue;
    }

    getAllQueues = async () => {
        this.setLoadingQueues(true);
        const result = await queuesServices.getAllQueues();
        this.setLoadingQueues();
        this.setQueues(result?.data || []);
    }

    deleteQueue = async () => {
        if (this.queueToDelete) {
            try {
                await queuesServices.deleteQueue(this.queueToDelete)
                this.setQueueToDelete()();
                await this.getAllQueues();
            } catch(err) {
                console.log(err)
            }
        }
    }

    viewQueue = (id: number) =>  async () => {
        try {
            this.setCalculationBribes(true);
            const result = await queuesServices.getQueueById(id)
            if (result.data) {
                this.setCalculationBribes();
                this.setQueue(result.data)
            }
        } catch(err) {
            this.setCalculationBribes();
            console.log(err)
        }
    }

    clearQueue = () => {
        this.setQueue(null)
    }

    increaseEditQueue = () => {
        if (this.queueToEdit) {
            const queue = this.queueToEdit?.queue || [];
            queue.push(queue.length + 1)
            this.setQueueToEdit({
                ...this.queueToEdit,
                queue
            })
        }
    }

    decreaseEditQueue = () => {
        if (this.queueToEdit && this.queueToEdit?.queue.length > 1) {
            const queue = this.queueToEdit?.queue.filter(item => item !== this.queueToEdit?.queue.length);
            this.setQueueToEdit({
                ...this.queueToEdit,
                queue
            })
        }
    }

    closeEditQueue = () => {
        this.setQueueToEdit(null)
    }

    createOrEditQueue = (id: number = 0) => () => {
        this.setQueueToEdit({
            id,
            queue: !id? [1] : this.queues.find(el => el.id === id)?.queue || [],
            isOpenEdit: true
        });
    }

    handleOkCreateOrEditQueue = async () => {
        if (!this.queueToEdit) {
            return;
        }
        const {
            queue,
            id
        } = this.queueToEdit
        const result = !id ? await this.createNewQueue(queue) : await this.updateQueue(id, queue)
        if (result) {
            this.setQueueToEdit();
            this.setQueue()
            this.getAllQueues();
        }
    }

    createNewQueue = async (queue: number[]) => {
        try {
            await queuesServices.createQueue(queue);
            return Promise.resolve(true);
        } catch (err) {
            return Promise.resolve(false);
        }

    }

    updateQueue = async (id: number, queue: number[]) => {
        try {
            await queuesServices.updateQueue(id, queue);
            return Promise.resolve(true);
        } catch (err) {
            return Promise.resolve(false);
        }

    }

    get queueStatus(){
        if (!this.queue) {
            return [];
        }
        const status = [{queue: this.queue?.orderedQueue || [], ticket: null}]
        Object.values(this.queue?.bribedData?.bribesDetails || {}).forEach((({ticket, bribedDoneArray}: any) => {
            bribedDoneArray.forEach((queue: number[]) => {
                status.push({queue, ticket})
            })
        }))
        return status;
    }

    get modalQueueTitle(){
        return !this.queueToEdit?.id ? `Create new queue` : `Edit queue # ${this.queueToEdit?.id}`
    }

    get listPlaceholder() {
        if (this.loadingQueue) {
            return `Loading Queues...`
        } else if (!this.queues.length) {
            return `There are no queues to analise, please start adding some queues`
        }
        return '';
    }


}