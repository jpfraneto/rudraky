const { connectToDatabase } = require('../../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case 'GET': {
      return getRecordings(req, res);
    }

    case 'PUT': {
      return updateRecording(req, res);
    }

    case 'POST': {
      return addRecording(req, res);
    }
  }
}

const getRecordings = async (req, res) => {
  let { db } = await connectToDatabase();
  const recordings = await db.collection('recordings').find({}).toArray();
  console.log('the recordings are ', recordings);
  return res.json(recordings);
};

const updateRecording = async (req, res) => {
  let { db } = await connectToDatabase();
  req.body.newComment.date = new Date().getTime();
  await db.collection('recordings').updateOne(
    {
      _id: new ObjectId(req.body.recordingId),
    },
    { $push: { comments: req.body.newComment } }
  );
  return res.json({
    message: `Recording updated successfully with the comment from ${req.body.newComment.commenterName}`,
    success: true,
  });
};

const addRecording = async (req, res) => {
  try {
    let { db } = await connectToDatabase();
    const newRecording = {
      ...req.body,
    };
    const serverResponse = await db
      .collection('recordings')
      .insertOne(newRecording);
    return res.json({
      message: 'The Recording was added successfully',
      success: true,
      recordingId: serverResponse.insertedId,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
};
