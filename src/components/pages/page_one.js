import React, { Component } from 'react';
import Single_Input from './../common/single_input';
import Button from './../common/button';
import './../common/single_input.css';
import './../common/button.css';

export default class PageOne extends Component {
    constructor(props){
        super(props);
        this.state = {
            input1: '',
            input2: '',
            input3: '',
            input4: '',
            input5: '',
            input6: '',
        }
        this.arr = [
            {
                placeholder: 'First Name...',
                onChange: this.inputOne
            },
            {
                placeholder: 'Last Name...',
                onChange: this.inputTwo
            },
            {
                placeholder: 'Country...',
                onChange: this.inputThree
            },
            {
                placeholder: 'City...',
                onChange: this.inputFour
            },
            {
                placeholder: 'Address...',
                onChange: this.inputFive
            },
            {
                placeholder: 'Address2...',
                onChange: this.inputSix
            },
        ]
    }

    toggleButton = () => {
        this.props.pageControl(2)
    }

    inputOne = (event) => {
        this.setState({
            input1:  event.target.value
        })
    }
    inputTwo = (event) => {
        this.setState({
            input2:  event.target.value
        })
    }
    inputThree = (event) => {
        this.setState({
            input3:  event.target.value
        })
    }
    inputFour = (event) => {
        this.setState({
            input4:  event.target.value
        })
    }
    inputFive = (event) => {
        this.setState({
            input5:  event.target.value
        })
    }
    inputSix = (event) => {
        this.setState({
            input6:  event.target.value
        })
    }

    render() {
        let result = this.arr.map((item, index) => {
            return (
                <div key = {index}>
                    <Single_Input
                    placeholder ={item.placeholder}
                    onChange ={item.onChange} />
                </div>
            )
        })

        return (
            <div className="fieldset">
                <p className="steps">Step 1 / 3</p>
                {result}
                <select className="fields">
                    <option>Company</option>
                    <option>Individual</option>
                </select>
                <div className="button_div">
                    <Button
                        input1 = {this.state.input1}
                        input2 = {this.state.input2}
                        input3 = {this.state.input3}
                        input4 = {this.state.input4}
                        input5 = {this.state.input5}
                        input6 = {this.state.input6}
                        button_name='Next'
                        button_className="button_item"
                        toggleButton={this.toggleButton}
                    />
                </div>
            </div>
        );
    }
}
