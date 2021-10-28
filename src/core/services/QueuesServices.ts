class QueuesServices {

    private baseUrl: string = ''

    constructor(url: string) {
        this.baseUrl = `${process.env.REACT_APP_API_URL}/${url}`
    }

    getAllQueues = () => {
        return fetch(this.baseUrl).then(response => response.json())
    }

    getQueueById = (id: number) => {
        return fetch(`${this.baseUrl}/${id}`).then(response => response.json())
    }

    createQueue = (queue: number[]) => {
        return fetch(this.baseUrl, {
            method: 'post',
            body: JSON.stringify({ queue }),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
    }

    updateQueue = (id: number, queue: number[]) => {
        return fetch(`${this.baseUrl}/${id}`, {
            method: 'put',
            body: JSON.stringify({ queue }),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
    }

    deleteQueue = (id: number) => {
        return fetch(`${this.baseUrl}/${id}`, {
            method: 'delete'
        }).then(response => response.json())
    }
}

const queuesServices = new QueuesServices('queues');
export default queuesServices;