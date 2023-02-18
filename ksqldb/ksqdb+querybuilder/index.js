const KSQLDB_QUERY_ENDPOINT = "http://localhost:8088/query";
// const header = new Headers({ "Access-Control-Allow-Origin": "*" });
var obj;
var obj_2;

var myHeaders = new Headers();
myHeaders.append("Accept", "application/vnd.ksql.v1+json");
myHeaders.append("Access-Control-Allow-Origin", "*");
myHeaders.append("Access-Control-Allow-Headers", "x-requested-with");

var raw = '{\r\n    "ksql": "select * from orders;"\r\n}';

var requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
  // mode: "no-cors",
};

$("#builder").queryBuilder({
  filters: [
    {
      id: "id",
      label: "id",
      type: "string",
    },

    {
      id: "name",
      label: "name",
      type: "string",
    },

    {
      id: "age",
      label: "age",
      type: "integer",
    },
  ],
});

$(".parse-json").on("click", function () {
  obj = $("#builder").queryBuilder("getSQL", false);
  console.log(JSON.stringify(obj));
  // obj_2 = "SELECT * FROM ORDERS" + "<br>" + "WHERE " + obj.sql + "<br>";
  obj_2 = "select * from orders;";
  // const query = {
  //   ksql: obj_2,
  // };
  // $("#query").html(obj_2);
  // const response = fetch(KSQLDB_QUERY_ENDPOINT, {
  //   mode: "no-cors",
  //   method: "POST",
  //   headers: {
  //     Accept: "application/vnd.ksql.v1+json",
  //     // "Access-Control-Allow-Origin": "*",
  //   },
  //   body: JSON.stringify(query),
  // })
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  fetch("http://localhost:8088/query", requestOptions)
    .then((response) => console.log(response))
    .then((result) => $("#query").html(result))
    .catch((error) => console.log("error", error));

  // const json = response;
  // var obj = JSON.parse(json)

  var count = Object.keys(json).length;

  console.log("Rows obtained :", count);
  for (var i = 1; i < count; i++) {
    console.log(json[i].row.columns);
  }
});

// const main = async () => {
//   try {
//     const query = {
//       ksql: "select * from orders;",
//     };
//     const response = await fetch(KSQLDB_QUERY_ENDPOINT, {
//       method: "POST",
//       headers: {
//         Accept: "application/vnd.ksql.v1+json",
//       },
//       body: JSON.stringify(query),
//     });

//     const json = await response.json();
//     // var obj = JSON.parse(json)

//     var count = Object.keys(json).length;

//     console.log("Rows obtained :", count);
//     for (var i = 1; i < count; i++) {
//       console.log(json[i].row.columns);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

// main();
