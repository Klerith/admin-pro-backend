const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client( process.env.GOOGLE_SECRET );

async function googleVerify( token ) {

  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_ID,  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload();
  console.log({payload})
  // If request specified a G Suite domain:
  // const domain = payload['hd'];

  return payload;
}

module.exports = {
    googleVerify
}
