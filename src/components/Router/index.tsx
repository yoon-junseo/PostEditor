import EditorPage from '@/containers/EditorPage';
import { routes } from '@/routes';
import React from 'react';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Link to={routes.EDITOR}>editor</Link>
      <Switch>
        <Route path={routes.EDITOR} exact component={EditorPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
