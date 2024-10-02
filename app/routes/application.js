import Route from '@ember/routing/route';
import { tracked } from 'tracked-built-ins';

const todo1 = tracked({
  id: 1,
  title: 'Todo 1',
  done: false,
  important: true,
});

const todo2 = tracked({
  id: 2,
  title: 'Todo 2',
  done: false,
});

export default class ApplicationRoute extends Route {
  model() {
    return [todo1, todo2];
  }
}
