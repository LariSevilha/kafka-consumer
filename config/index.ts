import { Kafka, KafkaConfig, Producer } from "kafkajs";
const config: KafkaConfig = {
    brokers: ["localhost:9092"],
}
const kafka = new Kafka(config);

const producer: Producer = kafka.producer();
const consumer = kafka.consumer({ groupId: 'consumerA' });
export{
    producer,
    consumer
    
}