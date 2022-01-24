export const getDiscourseInfo = (req, res) => {
  console.log('inside the getDiscourseInfo!');
  //   var discourse_sso = require('discourse-sso');
  //   var sso = new discourse_sso(process.env.DISCOURSE_SSO);
  //   var payload = req.query.payload; // fetch from incoming request
  //   var sig = req.query.sig; // fetch from incoming request
  //   if (sso.validate(payload, sig)) {
  //     console.log('INSIDE HERE!');
  //   }
  //   var nonce = sso.getNonce(payload);
  //   var userparams = {
  //     // Required, will throw exception otherwise
  //     nonce: nonce,
  //     external_id: 'some user id here',
  //     email: 'jpfraneto@gmail.com',
  //     // Optional
  //     username: 'jotape',
  //     name: 'Jorge Pablo Franetovic Stocker',
  //   };
  //   var q = sso.buildLoginString(userparams);
  //   res.redirect('http://discourse.example.com/session/sso_login?' + q);
};
