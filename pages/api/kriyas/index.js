const { connectToDatabase } = require('../../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case 'GET': {
      return getKriyas(req, res);
    }

    case 'PUT': {
      return updateKriya(req, res);
    }

    case 'POST': {
      return addKriya(req, res);
    }
  }
}

const getKriyas = async (req, res) => {
  let { db } = await connectToDatabase();
  const kriyas = await db.collection('kriyas').find({}).toArray();
  return res.json(kriyas);
};

const updateKriya = async (req, res) => {
  let { db } = await connectToDatabase();
  req.body.commentElement.date = new Date().getTime();
  await db.collection('kriyas').updateOne(
    {
      _id: new ObjectId(req.body.kriyaId),
    },
    { $push: { comments: req.body.commentElement } }
  );
  return res.json({
    message: `Kriya updated successfully with the comment from ${req.body.commentElement.commentAuthor}`,
    success: true,
  });
};

const addKriya = async (req, res) => {
  try {
    let { db } = await connectToDatabase();
    const newKriya = {
      ...req.body,
      active: 1,
      date: new Date().getTime(),
    };
    const serverResponse = await db.collection('kriyas').insertOne(newKriya);
    return res.json({
      message: 'The kriya was added successfully',
      success: true,
      kriyaId: serverResponse.insertedId,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
};
