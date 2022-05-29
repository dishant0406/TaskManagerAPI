const Task = require('../models/task')

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks })
  }
  catch (error) {
    res.status(500).json({ msg: error })
  }
}

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
  }
  catch (error) {
    res.status(500).json({ msg: error })
  }

}

const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(500).json({ msg: { error: `ID ${req.params.id} not found` } })
    }
    res.status(200).json(task)

  } catch (error) {
    res.status(500).json(error)
  }
}

const updateTask = async (req, res) => {
  try {
    const { id } = req.params
    const task = await Task.findOneAndUpdate({ _id: id }, req.body, { new: true, runValidators: true })

    if (!task) {
      return res.status(500).json({ msg: { error: `ID ${req.params.id} not found` } })
    }

    res.status(200).json(task)
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const deleteTask = async (req, res) => {
  try {
    const task = await Task.deleteOne({ _id: req.params.id });
    if (task.deletedCount < 1) {
      return res.status(500).json({ msg: { error: `ID ${req.params.id} not found` } })
    }
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
}