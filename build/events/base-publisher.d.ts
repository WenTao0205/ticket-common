import { Stan } from 'node-nats-streaming';
export declare abstract class Publisher {
    abstract subject: string;
    protected client: Stan;
    constructor(client: Stan);
    publish(data: any): Promise<void>;
}
