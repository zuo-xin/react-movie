import React,{Component} from 'react'
import indexstyles from "./index.less"
import {NavLink} from 'react-router-dom'

class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			isShow:false,
			firstShow:true
		}
	}
	render(){
		return (
			<div>
				<header>
					<div className={indexstyles.left}>
						<i className={indexstyles['icon-category']+' '+indexstyles.iconfont} onClick={()=>{
							this.setState({
								isShow:!this.state.isShow,
								firstShow:false
							})
						}}></i>
						<span>卖座电影</span>
					</div>
					<div className={indexstyles.right}>
						<span>青岛</span>
						<i className={indexstyles['icon-account']+' '+indexstyles.iconfont}></i>

					</div>
				</header>

				<nav className={this.state.isShow?indexstyles.show:indexstyles.hidden +' '+ this.state.firstShow?indexstyles.shownone:indexstyles.showblock}>
					<ul onClick={()=>{
						this.setState({
							isShow:!this.state.isShow
						})
					}}>
						<li><NavLink to="/home" activeClassName={indexstyles.selected}>主页</NavLink></li>
						<li><NavLink to="/film" activeClassName={indexstyles.selected}>影片</NavLink></li>
						<li><NavLink to="/cinema" activeClassName={indexstyles.selected}>影院</NavLink></li>
						<li><NavLink to="/me" activeClassName={indexstyles.selected}>我的</NavLink></li>
						<li><NavLink to="/card" activeClassName={indexstyles.selected}>卖座卡</NavLink></li>

					</ul>
				</nav>
				<section>{this.props.children}</section>
			</div>
		)
	}
}

export default App
