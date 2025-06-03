import { consumer } from "../config";
import { EachMessagePayload } from "kafkajs";
const consumerA = (async (): Promise<void> => {
  try {
    await consumer.connect();
    await consumer.subscribe({ topic: "topicA" });

    await consumer.run({
      eachMessage: async ({
        topic,
        partition,
        message,
      }: EachMessagePayload): Promise<void> => {
        console.log(`${message.key} ${message.value} `);
      },
    });
  } catch (error) {
    console.error(error);
  }
})();
