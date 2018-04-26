/**
 * Created by dongjie on 3/3/18.
 */
import React from 'react';
import BlockTable from './blockTable';
import BlockHeader from './blockHeader';
import AddNewNodeModal from './addNewNodeModal';
import LabelReminder from './LabelReminder';
import Footer from './footer';


export default class Component extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            displayConfigModal : 'none'
        }
    }

    render(){
        return <div className="body" id="gaga">
            <div className="block-header">
                <div className="row">
                    <div className="col-lg-4 col-md-4"><span className="block-header-logo-name">Eosio.SG</span></div>
                </div>
            </div>
            <div className="main-body">
                <div className="block-block">

                    <br/>

                    <div className="block-block-content tac">

                        <BlockHeader/>

                        <div className="pull-right block-join-us-button" style={{textAlign:'right'}}>
                            <button type="button"
                                    onClick={this.showAddTagNodeModal}
                                    className="btn join-us-button">
                                Connect to Eosio.sg Testnet
                            </button>
                        </div>

                        <BlockTable />
                    </div>


                    <AddNewNodeModal display = {this.state.displayConfigModal}
                                     labelReminder = {this.labelReminder}
                                     hideModal = {this.hideModal}/>

                    <LabelReminder />

                </div>
            </div>

            <Footer />

        </div>

    }


    hideModal = () => {
        document.getElementsByTagName('body')[0].classList.remove('modal-open');
        this.setState({
            displayConfigModal:'none'
        })
    }

    showAddTagNodeModal = () => {
        document.getElementsByTagName('body')[0].classList.add('modal-open');
        this.setState({
            displayConfigModal:'block'
        })
    }


    labelReminder = (text='no text set', style ='good') => {
        let alertStyle = style=='good'? 'start-reminder-animation':'start-reminder-animation-bad';
        let element = document.getElementById('label-reminder-container');
        element.style.display = 'block';
        let p = document.getElementById('label-reminder');
        p.innerHTML = text;
        element.classList.add(alertStyle);
        setTimeout(()=>{
            if(element&&element.style.display == 'block'){
                element.classList.remove(alertStyle);
                element.style.display = 'none';
            }
        }, 5000);
    }
}
