const { connectToDatabase } = require('../../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case 'GET': {
      return getKriya(req, res);
    }

    case 'PUT': {
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
  return res.json({ kriya });
};

const updateKriya = async (req, res) => {
  let { db } = await connectToDatabase();
  await db.collection('kriyas').updateOne(
    {
      _id: new ObjectId(req.body._id),
    },
    { $push: { exercizes: req.body.exercizes } }
  );
  return res.json({
    message: `The kriya was updated successfully`,
    success: true,
  });
};
