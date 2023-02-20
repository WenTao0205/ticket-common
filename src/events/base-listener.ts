import { Message, Stan } from "node-nats-streaming"

export abstract class Listener {
  abstract subject: string
  // queueGroup保证只发给Group中的一个service
  abstract queueGroupName: string
  abstract onMessage(data: any, msg: Message): void
  protected client: Stan
  protected ackWait = 5 * 1000

  constructor(client: Stan) {
    this.client = client
  }

  // 订阅选项
  subscriptionOptions() {
    return this.client
      .subscriptionOptions()
      .setDeliverAllAvailable()
      .setManualAckMode(true)
      .setAckWait(this.ackWait)
      .setDurableName(this.queueGroupName)
  }

  // 启动监听
  listen() {
    const subscription = this.client.subscribe(
      this.subject,
      this.queueGroupName
    )

    subscription.on('message', (msg: Message) => {
      console.log(
        `Message received: ${this.subject} / ${this.queueGroupName}`
      )

      const parseData = this.parseMessage(msg)
      this.onMessage(parseData, msg)
    })
  }

  // 格式转换
  parseMessage(msg: Message) {
    const data = msg.getData()
    return typeof data === 'string'
      ? JSON.parse(data)
      : JSON.parse(data.toString('utf-8'))
  }
}