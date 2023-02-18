const client = require("./connection.js");

// Function to store msg in DB
const obj = async (message) => {
    let x = JSON.parse(message);
    let __query_for_consumer = `insert into message (room_id, author, message, time, client_email) values (${x.room_id},'${x.author}','${x.message}',${x.time},'${x.client_email}')`;
    let result2;
    console.log(x,"jozi");
    try {
        result2 = await client.connection.query(__query_for_consumer);
    } catch (error) { console.log(error);
        throw error;
    }
    console.log('data added');
};

module.exports.obj = obj;