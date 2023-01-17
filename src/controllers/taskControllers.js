import Task from "../models/Task";

export const renderTask = async (req, res) => {
  //lean() sirve para que devuelva objetos de JS, sino devuelve objetos de Mongoose
  const tasks = await Task.find().lean();

  res.render("index.hbs", { tasks: tasks });
};
// esto tiene que ser asincrono
export const createTask = async (req, res) => {
  const task = Task(req.body);
  const taskSaved = await task.save();

  // redirecciona a la pagina que quieras
  res.redirect("/");
};

export const renderTaskEdit = async (req, res) => {
  const task = await Task.findById(req.params.id).lean();
  res.render("edit.hbs", { task });
};

export const editTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndUpdate(id, req.body);
  res.redirect("/");
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndDelete(id);

  res.redirect("/");
};

export const taskToogleDone = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id);

  task.done = !task.done;

  await task.save();

  res.redirect("/");
};
