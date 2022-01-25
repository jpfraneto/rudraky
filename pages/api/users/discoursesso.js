const { connectToDatabase } = require('../../../lib/mongodb');
const { getDiscourseInfo } = require('../../../lib/discourse');
const ObjectId = require('mongodb').ObjectId;
import { randomBytes, createHmac } from 'crypto';

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case 'GET': {
      return getHandler(req, res);
    }

    case 'POST': {
      return;
    }

    case 'PUT': {
      return;
    }

    case 'DELETE': {
      return;
    }
  }
}

const getHandler = async (req, res) => {
  let nonce = randomBytes(16).toString('base64');
  const returnUrl = 'www.localhost:3000';
  const payload = `nonce=${nonce}&return_sso_url=${returnUrl}`;
  const base64payload = Buffer.from(payload).toString('base64');
  const urlEncodedPayload = encodeURI(base64payload);
  const hexSignature = createHmac('sha256', 'marisol')
    .update(urlEncodedPayload)
    .digest('hex')
    .toLowerCase();
  const queryString = `http://comunidad.rudraky.com/session/sso_provider?sso=${urlEncodedPayload}&sig=${hexSignature}`;
  const response = await fetch(queryString);
  return res.redirect(queryString);
};
