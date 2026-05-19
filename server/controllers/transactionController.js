const Transaction = require("../models/Transaction");

const getTransactions = async (req, res) => {
  try {

    const transactions = await Transaction.find().sort({
      createdAt: -1,
    });

    res.status(200).json(transactions);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};


const createTransaction = async (req, res) => {
  try {

    const {
      title,
      description,
      amount,
      type,
      category,
      date,
      priority,
    } = req.body;


    if (!title || !amount || !type || !date) {
      return res.status(400).json({
        message: "Please fill all required fields",
      });
    }

    if (amount <= 0) {
      return res.status(400).json({
        message: "Amount must be greater than 0",
      });
    }


    const newTransaction = await Transaction.create({
      title,
      description,
      amount,
      type,
      category,
      date,
      priority,
    });

    res.status(201).json(newTransaction);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

const updateTransaction = async (req, res) => {
  try {

    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        message: "Transaction not found",
      });
    }

    const updatedTransaction =
      await Transaction.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

    res.status(200).json(updatedTransaction);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};


const deleteTransaction = async (req, res) => {
  try {

    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        message: "Transaction not found",
      });
    }

    await Transaction.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Transaction deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};


const searchTransactions = async (req, res) => {
  try {

    const keyword = req.query.q;

    const transactions = await Transaction.find({
      title: {
        $regex: keyword,
        $options: "i",
      },
    });

    res.status(200).json(transactions);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getTransactions,
  createTransaction,
  updateTransaction,
  deleteTransaction,
  searchTransactions,
};