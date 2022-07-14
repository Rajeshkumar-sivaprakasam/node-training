const request = require("postman-request");

const uri =
  "http://api.weatherstack.com/current?access_key=df806e3b94a3a7e94fa60bbf0ce25254&query=New%20York&units=f";
request(uri, { json: true }, (error, response) => {
  // const res = JSON.parse(response.body); //if you didn't use json param use this way
  // console.log(res.current);

  // console.log(response.body.current);
  const res = response.body;
  console.log(
    `It is currently ${res.current.temperature} degrees out. It feels like ${res.current.precip} degrees out.`
  );
});
const geocode = () => {
  console.log();
};
