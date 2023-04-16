import jwt_decode from "jwt-decode";

//TODO: Does this do anything? It seems like there are no references.
const JwtDecoder = (userToken) => {
  var token = userToken;
  var decoded = jwt_decode(token);

  console.log(decoded);

  var decodedHeader = jwt_decode(token, { header: true });
  console.log(decodedHeader);
};

export default JwtDecoder;
