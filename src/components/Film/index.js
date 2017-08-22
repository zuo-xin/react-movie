import React,{Component} from 'react'
import styles from "./index.less"
import NowPlaying from "../NowPlaying/index"
import ComingSoon from "../ComingSoon/index"
import {NavLink} from 'react-router-dom'

class App extends Component{
	constructor(props){
		super(props)
	}

	componentWillMount(){

	}

	render(){
		console.log(this.props)
		return(
			<div>
				<ul className={styles.filmnav}>
					<li>
						<NavLink to="/film/now-playing" activeClassName={styles.filmselected}>正在热映</NavLink>
					</li>
					<li>
						<NavLink to="/film/coming-soon" activeClassName={styles.filmselected}>即将上映</NavLink>
					</li>

				</ul>
					{this.props.children}
			</div>
		)
	}
}

export default App
