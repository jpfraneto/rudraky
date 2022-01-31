const { connectToDatabase } = require('../../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case 'GET': {
      return getKriyas(req, res);
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

const addKriya = async (req, res) => {
  try {
    let { db } = await connectToDatabase();
    const newKriya = {
      author: 'Jorge Pablo Franetovic',
      name: 'Equilibrando Prana y Apana',
      content: req.body,
      date: new Date().getTime(),
    };
    await db.collection('kriyas').insertOne(newKriya);
    return res.json({
      message: 'The kriya was added successfully',
      success: true,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
};
