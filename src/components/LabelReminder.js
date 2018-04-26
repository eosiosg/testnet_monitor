/**
 * Created by dongjie on 18/4/18.
 */
import React from 'react';
import ReactDom from 'react-dom';



export default class LabelReminder extends React.Component{

    constructor(props){
        super(props);
    }


    immediatelyHide = () => {
        let element = document.getElementById('label-reminder-container');
        element.classList.remove('start-reminder-animation');
        element.style.display = 'none';
    }


    render(){
        return <div id="label-reminder-container" className="block-label-reminder-container">
            <span className="label-reminder-close-container">
                <i className="fas fa-window-close"
                   onClick={this.immediatelyHide}></i>
            </span>
            <span id="label-reminder">
            </span>
        </div>
    }
}