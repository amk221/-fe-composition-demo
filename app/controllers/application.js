import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  markAsDone = (todo) => {
    todo.done = true;
  };
}
