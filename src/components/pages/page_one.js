import React, { Component } from 'react';
import Single_Input from './../common/single_input';
import Button from './../common/button';
import './../common/single_input.css';

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
            fake: true
    }    
    this.arr = [
        {
            placeholder: 'First Name',
            onChange: this.inputOne   
        },
        {
            placeholder: 'Last Name',
            onChange: this.inputTwo
        },
        {
            placeholder: 'Country',
            onChange: this.inputThree
        },
        {
            placeholder: 'City',
            onChange: this.inputFour
        },
        {
            placeholder: 'Address',
            onChange: this.inputFive
        },
        {
            placeholder: 'Address2',
            onChange: this.inputSix
        },

    ]  
    }     
      
    toggleButton = (fake) => {
        {this.props.bla(this.state.fake)}
          
        this.setState({
            fake: !this.state.fake
        })
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
        
        let result = this.arr.map((item,index) => {
            return (
            <div key = {index}>
                <Single_Input 
                input1={this.state.input1}
                placeholder ={item.placeholder}
                onChange ={item.onChange} />
            </div>
            )
        })    

        return (
            <div className="fieldset">
                <p className="steps">Step 1/4</p>
               
                {result}
                <select className="fields">
                    <option>Company</option>
                    <option>Individual</option>
                </select>
                <div className="button_div">
                    <Button button_name='Next'
                        fake ={this.state.fake}
                        toggleButton={this.toggleButton} />
                </div>
            </div>
        );
    }
}

