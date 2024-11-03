const Todo = require('./todo');
const TodoList = require('./todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  test("todolist has a size of 3", () => {
    expect(list.size()).toBe(3);
  });

  test("toArray returns a copy of todos", () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });

  test("first returns the first todo", () => {
    expect(list.first()).toEqual(todo1);
  });

  test("last returns the last todo", () => {
    expect(list.last()).toEqual(todo3);
  });

  test("shift removes and returns the first item", () => {
    expect(list.shift()).toEqual(todo1);
    expect(list.size()).toBe(2);
    expect(list.shift()).toEqual(todo2);
    expect(list.shift()).toEqual(todo3);
  });

  test("pop removes and returns the last item", () => {
    expect(list.pop()).toEqual(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });

  test("isDone returns true when all todos are done", () => {
    expect(list.isDone()).toBe(false);
    list.markAllDone();
    expect(list.isDone()).toBe(true);
  });

  test("add method adds items to todolist", () => {
    let person = {name: "Aman"};
    expect(() => { list.add(person) }).toThrow(TypeError);
  });

  test("itemAt method", () => {
    expect(() => { list.itemAt(55)}).toThrow(ReferenceError);
    expect(list.itemAt(1)).toEqual(todo2);
  });

  test("markDoneAt marks a specific todo", () => {
    expect(() => list.markDoneAt(100)).toThrow(ReferenceError);
  });

  test("markUndoneAt marks undone a todo", () => {
    list.markUndoneAt(0);
    expect(todo1.isDone()).toBe(false);
  });

  test("markAllDone marks all dodos as done", () => {
    list.markAllDone();
    expect(list.first().isDone()).toBe(true);
    expect(list.last().isDone()).toBe(true);
  });

  test("removeAt removes a specific element", () => {
    expect(list.removeAt(0)).toEqual([todo1]);
    expect(list.removeAt(1)).toEqual([todo3]);
    expect(list.toArray()).toEqual([todo2]);
    expect(() => list.removeAt(5)).toThrow(ReferenceError);
  });

  test('toString returns string representation of the list', () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym`;

    expect(list.toString()).toBe(string);
    list.markDoneAt(0);
    string = `---- Today's Todos ----
[X] Buy milk
[ ] Clean room
[ ] Go to the gym`;
    expect(list.toString()).toBe(string);
  });

  test("forEach iterate over todolist", () => {
    let result = [];
    list.forEach(todo => result.push(todo));
    expect(result).toEqual([todo1, todo2, todo3]);
  });

  test("filtering todos", () => {
    list.markDoneAt(1);
    expect((list.filter(todo => todo.isDone())).toArray()).toEqual([todo2]);
  })

  test("filter returns a new array", () => {
    expect((list.filter(() => true)).toArray()).toEqual([todo1, todo2, todo3]);
  });
});