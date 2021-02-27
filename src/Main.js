import React from 'react';
import { renderRoutes } from 'react-router-config';
import { withRouter } from 'react-router-dom';
import Routes from './routes';

function Main() {
	return (
	  <div className="main">
	    {renderRoutes(Routes)}
	  </div>
	);
}

export default withRouter(Main);
