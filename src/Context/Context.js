import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
    state = {
        attributs: [],
        list: [],
        dispatch: action => this.reducer(action)
    }

    reducer(action) {
        switch (action.type) {
            case 'addAttribute':
                return this.addAttribute(action);
            case 'addElement':
                return this.addElement(action);
            case 'moveUp':
                return this.moveUp(action);
            case 'moveDown':
                return this.moveDown(action);
            case 'delete':
                return this.delete(action);
            case 'ok':
                return this.ok(action);
            default:
        }
    }

    ok(action){
        const sortedList = this.state.list.sort((a, b) => {
            if(!a[action.payload] || !b[action.payload]) {
                return -1;
            }
            if(a[action.payload] > b[action.payload]) {
                return 1;
            }

            return -1;
        });

        this.setState({ list: sortedList});
    }

    moveUp(action) {
        let newlist = this.state.list;

        if (action.payload > 0) {

            const objbefor = newlist[action.payload - 1];
            const objcurrent = newlist[action.payload];

            newlist[action.payload - 1] = objcurrent;
            newlist[action.payload] = objbefor;

            this.setState({ list: newlist })
        }
    }

    moveDown(action) {
        let newlist = this.state.list;

        if (action.payload < newlist.length - 1) {
            const objafter = newlist[action.payload + 1];
            const objcurrent = newlist[action.payload];

            newlist[action.payload + 1] = objcurrent;
            newlist[action.payload] = objafter;

            this.setState({ list: newlist })
        }
    }

    delete(action) {
        let newlist = this.state.list;
        newlist.splice(action.payload, 1);
        this.setState({ list: newlist });
    }

    addElement(action) {
        const newElementsList = this.state.list;
        newElementsList.push(action.payload);

        this.setState({ list: newElementsList });
    }

    addAttribute(action) {
        const newAttributsList = this.state.attributs;
        const attributIsAlreadyAdded = newAttributsList.find(attr => attr === action.payload);
        if (!attributIsAlreadyAdded) {
            newAttributsList.unshift(action.payload);
            this.setState({ attributs: newAttributsList });
        }
    }

    render() {
        console.log(this.state)
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;