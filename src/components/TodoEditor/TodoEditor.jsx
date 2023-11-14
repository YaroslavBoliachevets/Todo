import React, {Component} from "react";


class TodoEditor extends Component {

	state = {
		text: '',
	}

	handleTextChange = (e) => {
		this.setState({text:e.currentTarget.value});
	}

	handleSubmit = (e) => {
		this.props.onSubmit(this.state.text);
		e.preventDefault();
		this.reset();
	}

	reset = () => {
		this.setState({text:''});
	}


	render() {

		return (
			<>
			<form action="" onSubmit={this.handleSubmit}>
				<textarea name="text" id="" value={this.state.text} onChange={this.handleTextChange}></textarea>
				<button type="submit">Добавить</button>
			</form>
			</>
		);
	}
};

export default TodoEditor;