const { connectToDatabase } = require('../../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case 'GET': {
      return getKriya(req, res);
    }

    case 'PUT': {
      console.log('inside the PUT route');
      return updateKriya(req, res);
    }

    case 'DELETE': {
      return deleteKriya(req, res);
    }
  }
}

const getKriya = async (req, res) => {
  let { db } = await connectToDatabase();
  const kriya = await db
    .collection('kriyas')
    .findOne({ _id: ObjectId(req.query.id) });
  return res.json(kriya);
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
