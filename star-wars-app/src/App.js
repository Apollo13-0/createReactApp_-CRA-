import './App.css';
import Alert from './Alert';
import React from 'react'
import logo from './logo.svg';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
            characters: []
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                counter: this.state.counter + 1
            });
        }, 1000)
    }
    async loadData() {
        const response = await fetch("https://swapi.dev/api/people/");
        const parsedResponse = await response.json();
        this.setState({
            characters: parsedResponse.results || [] // Or used to define a default value in case no data is returned
        })
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    <div>{this.state.counter}</div>
                    <Alert count={this.state.counter}></Alert>
                    <table border = "1">
                        <tr>
                            <td>Name</td>
                            <td>height</td>
                            <td>mass</td>
                            <td>hair_color</td>
                            <td>skin_color</td>
                            <td>Neye_colorame</td>
                            <td>birth_year</td>
                            <td>gender</td>
                            <td>homeworld</td>
                            <td>films</td>
                            <td>species</td>
                            <td>vehicles</td>
                            <td>starships</td>
                            <td>created</td>
                            <td>edited</td>
                            <td>url</td>
                        </tr>
                        <tr>
                            <td>{this.characters[0].name}</td>
                            <td>{this.characters[0].height}</td>
                            <td>{this.characters[0].mass}</td>
                            <td>{this.characters[0].hair_color}</td>
                            <td>{this.characters[0].skin_color}</td>
                            <td>{this.characters[0].Neye_colorame}</td>
                            <td>{this.characters[0].birth_year}</td>
                            <td>{this.characters[0].gender}</td>
                            <td>{this.characters[0].homeworld}</td>
                            <td>{this.characters[0].films}</td>
                            <td>{this.characters[0].species}</td>
                            <td>{this.characters[0].vehicles}</td>
                            <td>{this.characters[0].starships}</td>
                            <td>{this.characters[0].created}</td>
                            <td>{this.characters[0].edited}</td>
                            <td>{this.characters[0].url}</td>
                        </tr>
                    </table>
                </header>
            </div>
        );
    }
}