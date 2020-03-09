import React, { Component } from 'react';
import Header from '../Header/Header';
import './css/addElements.css';
import { Consumer } from '../../Context/Context';

class AddElements extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    onSubmit = dispatch => {
        dispatch({
            type: 'addElement',
            payload: this.state
        });

        Object.keys(this.state).map(key => {
            this.setState({[key] : ''})
        })
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { attributs, dispatch } = value;
                    return (
                        <div>
                            <Header />
                            <div className="container formulaire">
                                {
                                    attributs.length > 0 &&
                                    attributs.map((attribut) => (
                                        <div key={attribut} className="form-group row">
                                            <label htmlFor={attribut} className="col-md-4">{attribut}</label>
                                            <input 
                                                type="text" 
                                                className="form-control col-md-8" 
                                                name={attribut} 
                                                placeholder={attribut} 
                                                value={this.state[attribut] || ''}
                                                onChange={e => this.setState({[attribut]: e.target.value})}
                                            />
                                        </div>
                                    ))
                                }
                                <button type="button" className="btn btn-primary" onClick={() => this.onSubmit(dispatch)}>Submit</button>
                            </div>
                        </div>
                    )
                }
                }
            </Consumer>
        )
    }
}
export default AddElements;