const { connectToDatabase } = require('../../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case 'GET': {
      return getRecording(req, res);
    }

    case 'PUT': {
      console.log('inside the PUT route');
      return updateRecording(req, res);
    }

    case 'DELETE': {
      return deleteRecording(req, res);
    }
  }
}

const getRecording = async (req, res) => {
  let { db } = await connectToDatabase();
  const recording = await db
    .collection('recordings')
    .findOne({ _id: ObjectId(req.query.id) });
  return res.json(recording);
};

// const addUser = async (req, res) => {
//   try {
//     let { db } = await connectToDatabase();
//     await db.collection('users').insertOne(JSON.parse(req.body));
//     return res.json({
//       message: 'The user was added successfully',
//       success: true,
//     });
//   } catch (error) {
//     return res.json({
//       message: new Error(error).message,
//       success: false,
//     });
//   }
// };
