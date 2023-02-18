import fetch from "node-fetch";
// import { obj_2 } from "./checking.js";
const KSQLDB_QUERY_ENDPOINT = "http://localhost:8088/query";

const main = async () => {
  try {
    const query = {
      ksql: "select * from orders;",
    };
    const response = await fetch(KSQLDB_QUERY_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/vnd.ksql.v1+json",
      },
      body: JSON.stringify(query),
    }).then((res) => {
      console.log(res);
    });

    const json = await response.json();
    // var obj = JSON.parse(json)
    // console.log("result", json);
    var count = Object.keys(json).length;

    // console.log("Rows obtained :", count);
    for (var i = 1; i < count; i++) {
      //   console.log(json[i].row.columns);
    }
  } catch (error) {
    console.error(error);
  }
};

main();
