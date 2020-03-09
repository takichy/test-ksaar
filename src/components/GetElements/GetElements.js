import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { Consumer } from '../../Context/Context';

class GetElements extends Component {
    state = {
        order: ''
    }

    moveUp = (index, dispatch) => {
        dispatch({
            type: 'moveUp',
            payload: index
        })
    }

    moveDown = (index, dispatch) => {
        dispatch({
            type: 'moveDown',
            payload: index
        })
    }

    delete = (index, dispatch) => {
        dispatch({
            type: 'delete',
            payload: index
        })
    }

    order = (e) => {
        this.setState({ order: e.target.value });
    }

    ok = dispatch => {
        dispatch({
            type: 'ok',
            payload: this.state.order
        })
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { attributs, list, dispatch } = value;
                    return (
                        <div>
                            <Header />
                            <div >
                                <div className="container">
                                    <select value={this.state.order} onChange={this.order}>
                                        <option name="default" value="-">-</option>
                                        {
                                            attributs.map((attr) => (
                                                <option name={attr} key={attr} value={attr}>{attr}</option>
                                            ))
                                        }
                                    </select>
                                    <button onClick={() => this.ok(dispatch)}>OK</button>
                                </div>


                                <table className="table container">
                                    <thead>
                                        <tr>
                                            {
                                                attributs.map((attr) => (
                                                    <th key={attr}>{attr}</th>
                                                ))
                                            }
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            list.map((elts, index) => (
                                                <tr key={index}>
                                                    {
                                                        attributs.map((attr) => (
                                                            <td key={attr}>{elts[attr]}</td>
                                                        ))
                                                    }
                                                    <td><Link to="#" onClick={() => this.moveUp(index, dispatch)}> move up </Link></td>
                                                    <td><Link to="#" onClick={() => this.moveDown(index, dispatch)}> move down </Link></td>
                                                    <td><Link to="#" onClick={() => this.delete(index, dispatch)}> delete </Link></td>
                                                </tr>
                                            ))
                                        }


                                    </tbody>

                                </table>


                            </div>

                        </div>
                    )
                }
                }
            </Consumer>
        )
    }
}
export default GetElements;