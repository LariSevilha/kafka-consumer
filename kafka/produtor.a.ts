import { producer } from "../config";

const producerA = (async (): Promise<void> => {
  try {
    await producer.connect();
    await producer.send({
      topic: "topicA",
      messages: [
        {
          key: "message_from",
          value: "producerA",
        },
      ],
    });
    await producer.disconnect();
  } catch (error) {
    console.log(error);
  }
})();
