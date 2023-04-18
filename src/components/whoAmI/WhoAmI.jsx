import { Component } from "react";
import './whoAmI.css';

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            position: ''
        }
    }

    prevYear = () => {
        this.setState(state => ({
            years: state.years - 1
        }))
    }
    nextYear = () => {
        this.setState(state => ({
            years: state.years + 1
        }))
    }
    changePisition = (e) => {
        e.preventDefault();
        this.setState({
            position: e.target.value
        })
    }

    render() {
        const { name, surname, link } = this.props;
        const { years, position } = this.state;
        return (
            <div className="card">
                <h1>My name is {name}<br />
                    my surname - {surname}<br />
                    age - {years}<br />
                    position - {position} </h1 >
                <button onClick={this.prevYear}>prev</button>
                <button onClick={this.nextYear}>next</button>
                <a className="profile_link" href={link}>my profile</a>
                <form>
                    <span>Put position: </span>
                    <input type="text" onChange={this.changePisition} />
                </form>
            </div>
        )
    }
}

export default WhoAmI;