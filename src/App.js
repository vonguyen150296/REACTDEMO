import React, { Component } from 'react'
import './fontawesome-5.12.1/css/all.css';
import './fontawesome-5.12.1/js/all.js';

import Card from './components/Card'
import Select from "./components/Select";
import Header from "./components/Header";
import ListMovies from "./components/ListMovies";
import Pagination from "./components/Pagination";
import { movies$ } from './Utils/movies'

import './App.css'


class App extends Component {
	constructor (props) {
		super(props)

		this.state = {
			movies: [],
			categories: [],
			selectedCategories: [],
			page: [],
			numberItem : 5,
			pageActive : 1
		}
		this.deleteHandler = this.deleteHandler.bind(this)
		this.onChangeHandler = this.onChangeHandler.bind(this)
	}

componentDidMount () {
    movies$.then(data => {
		var page= [];
		for(var i=1; i< (data.length/this.state.numberItem)+1; i++){
			page.push(i);
		}
      	this.setState({
        	movies: data,
			categories: [...new Set(data.map(entry=>entry.category)).values()],
			page: page
      	})
    })
}

deleteHandler (id) {
    this.setState({
      	movies: this.state.movies.filter(movie => movie.id !== id)
    })
}

onChangeHandler(values)
{
	this.setState({
		selectedCategories: values
	})
}



render () {
    return (
      	<React.Fragment>
      	<Header />
		<div id="content">
      		<div id="filter">
        		<Select onChange={this.onChangeHandler} categories={this.state.categories} ></Select>
      		</div>
			<div id="list">
				<ListMovies movies={this.state.movies} 
				selectedCategories={this.state.selectedCategories}
				deleteHandler={this.deleteHandler}/>
			</div>
			<Pagination  page={this.state.page} pageActive={this.state.pageActive}/>
		</div>
      </React.Fragment>
    )
  }
}

export default App
