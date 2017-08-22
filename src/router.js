import React from 'react';
import {HashRouter,Route,Link,Redirect,Switch} from 'react-router-dom'

import App from './components/App/index'
import Home from './components/Home/index'
import Cinema from './components/Cinema/index'
import Me from './components/Cinema/index'
import Card from './components/Card/index'
import Film from './components/Film/index'
import NowPlaying from './components/NowPlaying/index'
import ComingSoon from './components/ComingSoon/index'
import Detail from './components/Detail/index'

const router = (
	<HashRouter>
		<App>
			<Switch>
				<Route path="/home" component={Home} />
				<Route path="/film" render={()=>
					<Film>
						<Switch>
							<Route path="/film/now-playing" component={NowPlaying} />
							<Route path="/film/coming-soon" component={ComingSoon} />
							<Redirect from="/film" to="/film/now-playing"></Redirect>
						</Switch>
					</Film>
				}></Route>
				<Route path="/cinema" component={Cinema} />
				<Route path="/me" component={Me} />
				<Route path="/card" component={Card} />
				<Route path="/detail/:kerwinId" render={props=><Detail {...props} kerwin="OK" />} />
				<Redirect from="/" to="/home" ></Redirect>
			</Switch>
		</App>
	</HashRouter>
)

export default router
