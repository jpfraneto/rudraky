const { connectToDatabase } = require('../../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case 'GET': {
      return getUsers(req, res);
    }

    case 'POST': {
      return addUser(req, res);
    }

    case 'PUT': {
      return updateUser(req, res);
    }

    case 'DELETE': {
      return deleteUser(req, res);
    }
  }
}

const getUsers = async (req, res) => {
  let { db } = await connectToDatabase();
  const users = await db.collection('users').find({}).toArray();
  return res.json(users);
};

const addUser = async (req, res) => {
  try {
    let { db } = await connectToDatabase();
    await db.collection('users').insertOne(JSON.parse(req.body));
    return res.json({
      message: 'The user was added successfully',
      success: true,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
};

const updateUser = async (req, res) => {
  let { db } = await connectToDatabase();
  await db.collection('users').updateOne(
    {
      _id: new ObjectId(req.body.userId),
    },
    { $set: { text: req.body.updateText } }
  );
  return res.json({
    message: 'User updated successfully',
    success: true,
  });
};
