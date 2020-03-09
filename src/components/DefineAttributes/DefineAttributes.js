import React, { Component } from 'react';
import './css/defineAttributes.css';
import Header from '../Header/Header';
import { Consumer } from '../../Context/Context';

class DefineAttributes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attribute: ''
        }
    }

    onChange = e => {
        this.setState({ attribute : e.target.value })
    }

    addAttribute = dispatch => {
        dispatch({
            type: 'addAttribute',
            payload: this.state.attribute
        })

        this.setState({attribute : ''});
    }
    
    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch, attributs } = value;
                    return (
                        <div>
                            <Header />
                            <div className="attribute-body attribute-body-tag container">
                                <div className="row attribute-content">
                                    {
                                        attributs.length > 0 &&
                                            attributs.map((attribut) => (
                                                <span key={attribut} className="badge-attribute badge badge-secondary" >{attribut}</span>
                                            ))
                                    }
                                </div>

                                <div className="row attribute-content">
                                    <input type="text" name="attribute" value={this.state.attribute} placeholder="Nouveau attribut" onChange={this.onChange}></input>
                                    <button onClick={() => this.addAttribute(dispatch)}>ajouter</button>
                                </div>
                            </div>
                        </div>
                    )
                }
                }
            </Consumer>
        )
    }
}
export default DefineAttributes;