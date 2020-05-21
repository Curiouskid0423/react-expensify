/**
 * Indecision launcher app javascript file.
 * @author Kevin Li
 */
import React from "react";

import AddOption from "./AddOption";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);  // necessary to call super() in javascript
        this.state = {
            options: [],
            selectedOption: undefined
        };
    }

    // Not every function should be bounded. Only bind methods
    // that would be access outside in case of "this" context.
    componentDidMount(){
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch(e) {
            console.log("Error msg: " + e);
        }
    }

    // Fires after the "state" or "props" change
    componentDidUpdate(prevProps, prevState){
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    handleDeleteOptions = () => {
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            };
        });
    }

    handleRemoveOption = (option) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((op) => (op !== option))
        }));
    }

    handleClearSelect = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    }

    //Not all regular functions in class properties have to be bound.
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleRemoveOption={this.handleRemoveOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
                <OptionModal
                    selected = {this.state.selectedOption}
                    clearSelect = {this.handleClearSelect}
                />
            </div>
        );
    }
}
