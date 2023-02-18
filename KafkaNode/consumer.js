const { obj } = require("./consumer_sql.js");

// Function for Kafka Consumer
function func_2 () {
    const Kafka = require("node-rdkafka");
    const externalConfig = require("./config");

    const CONSUMER_GROUP_ID = "node-consumer-2";

    const kafkaConf = {
        ...externalConfig.kafkaConfig,
        ...{
            "group.id": CONSUMER_GROUP_ID,
            "socket.keepalive.enable": true,
            debug: "generic,broker,security",
            
        },
    };

    const topics = [externalConfig.topic];

    var stream = new Kafka.KafkaConsumer.createReadStream(
        kafkaConf,
        { "auto.offset.reset": "earliest" },
        {
            topics: topics,
        }
    );

    stream.on("data", function (message) {
        console.log(JSON.parse(message.value));
        obj(message.value);
    });
}

module.exports.func_2 = func_2;
