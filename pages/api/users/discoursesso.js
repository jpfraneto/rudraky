const { connectToDatabase } = require('../../../lib/mongodb');
const { getDiscourseInfo } = require('../../../lib/discourse');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case 'GET': {
      return res.json({ 123: 456 });
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
