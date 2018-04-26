/**
 * Created by dongjie on 11/4/18.
 */

import React from 'react';
import ReactDom from 'react-dom';
import * as URL from '../../config/config';

export default class AddNewNodeModal extends React.Component{
    constructor(props){
        super(props)

        this.newNodeNeed = [
            'producer_name',
            'organization_name',
            'domain',
            'location',
            'http_port',
            'p2p_port'];

        this.state = {
            errorMessage : '',
            newNodeInfo : {
                producer_name:'',
                domain:'',
                organization_name:'',
                location:'',
                http_port:'8888',
                p2p_port:'9876',
                logo:'',
            },
            infoError : {
                producer_name:'',
                domain:'',
                organization_name:'',
                location:'',
                http_port:'',
                p2p_port:'',
                logo:'',
            },
            result:'',
        }
    }


    render(){
        return <div className="modal bd-example-modal-lg"
                    tabIndex="-1"
                    style={{display:this.props.display,color:'black'}}
                    role="dialog">
            <div className="modal-dialog modal-lg" role="document">

                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title"></h5>
                        <button type="button"
                                onClick={this.hideModal}
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body add-new-node-body">

                        <h4>Method 1</h4>
                            Execute the following commands, your private and public key will be generated locally for you:
                            <div className="block-command-lines block-command-lines-align-left">
                                <p>git clone https://github.com/eosiosg/testnet.git</p>
                                <p>cd testnet/one-click-join/</p>
                                <p>./boot.sh</p>
                            </div>
                        Click <a href="https://github.com/eosiosg/testnet">here</a> to browse our github repo.

                        <br/>
                        <br/>
                        <h4>Method 2</h4>
                        <p>Give the following information and submit, your private and public key will be generated online for you:</p>


                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <label>Producer Name:</label>
                                <input className="form-control"
                                       id="producer_name"
                                       autoComplete="off"
                                       style={this.state.infoError.producer_name?{border:'1px red solid'}:{}}
                                       value={this.state.newNodeInfo.producer_name}
                                       onChange={this.changeInputValue}
                                       type="text"/>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <label>Organization Name:</label>
                                <input className="form-control"
                                       id="organization_name"
                                       autoComplete="off"
                                       onChange={this.changeInputValue}
                                       value={this.state.newNodeInfo.organization_name}
                                       style={this.state.infoError.organization_name?{border:'1px red solid'}:{}}
                                       type="text"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <label>Domain/IP:</label>
                                <input className="form-control"
                                       id="domain"
                                       autoComplete="off"
                                       onChange={this.changeInputValue}
                                       value={this.state.newNodeInfo.domain}
                                       style={this.state.infoError.domain?{border:'1px red solid'}:{}}
                                       type="text"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <label>Http port:</label>
                                <input className="form-control"
                                       id="http_port"
                                       autoComplete="off"
                                       onChange={this.changeInputValue}
                                       value={this.state.newNodeInfo.http_port}
                                       style={this.state.infoError.http_port?{border:'1px red solid'}:{}}
                                       type="text"/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <label>P2P port:</label>
                                <input className="form-control"
                                       id="p2p_port"
                                       autoComplete="off"
                                       onChange={this.changeInputValue}
                                       value={this.state.newNodeInfo.p2p_port}
                                       style={this.state.infoError.p2p_port?{border:'1px red solid'}:{}}
                                       type="text"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <label>Location:</label>
                                <input className="form-control"
                                       id="location"
                                       autoComplete="off"
                                       onChange={this.changeInputValue}
                                       value={this.state.newNodeInfo.location}
                                       style={this.state.infoError.location?{border:'1px red solid'}:{}}
                                       type="text"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <label>Logo URL:</label>
                                <input className="form-control"
                                       id="logo"
                                       autoComplete="off"
                                       placeholder="Default logo will be given if leave blank"
                                       onChange={this.changeInputValue}
                                       value={this.state.newNodeInfo.logo}
                                       style={this.state.infoError.logo?{border:'1px red solid'}:{}}
                                       type="text"/>
                            </div>
                        </div>

                        {
                            this.state.errorMessage && <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <p className="block-error-message">
                                        {this.state.errorMessage}
                                    </p>
                                </div>
                            </div>
                        }

                        {
                            this.state.result && <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="block-result-message">
                                        <p>
                                            We have created the configuration files, please click
                                            <a href={this.state.result} download>
                                                &nbsp;here&nbsp;
                                            </a> to download <br/>
                                            or <br/>
                                            start your producer by using following commands:<br/>
                                        </p>
                                        <div className="block-command-lines">
                                            <p>wget {this.state.result}</p>
                                            <p>tar xfp eosiosg.tar </p>
                                            <p>cd eosiosg </p>
                                            <p>
                                                <span className="pull-left">./run.sh</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }


                    </div>
                    <div className="modal-footer">
                        <button type="button"
                                onClick={this.submit}
                                disabled={this.state.buttonDisabled}
                                className="btn btn-success">Submit & Generate Config File</button>
                        <button type="button"
                                onClick={this.hideModal}
                                className="btn btn-secondary"
                                data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    }




    changeInputValue = (event) => {
        let newNodeInfo = this.state.newNodeInfo;
        newNodeInfo[event.target.id] = event.target.value;
        this.setState({
            newNodeInfo,
            errorMessage:'',
            infoError:{
                producer_name:'',
                domain:'',
                organization_name:'',
                location:'',
                http_port:'',
                p2p_port:'',
                logo:'',
            },
            result:'',
            buttonDisabled:false,
        })
    }

    submit = () => {

        let newNodeInfo = this.state.newNodeInfo;

        var infoError = {
            producer_name:'',
            domain:'',
            organization_name:'',
            location:'',
            http_port:'',
            p2p_port:'',
            logo:'',
        };

        for(let name of this.newNodeNeed){
            if(!newNodeInfo[name]){
                infoError[name] = true;
                console.log(infoError);
                this.setState({
                    infoError,
                    errorMessage:`Please complete your info`
                })
                return
            }
        }

        if(! /^[a-z.1-5]+$/.test(newNodeInfo.producer_name)){
            infoError.producer_name = true;
            this.setState({
                infoError : infoError,
                errorMessage:`Producer name can only contain the following symbols: .12345abcdefghijklmnopqrstuvwxyz`
            })
            return
        }
        if(newNodeInfo.producer_name.length>12){
            infoError.producer_name = true;
            this.setState({
                infoError : infoError,
                errorMessage:`Producer name can't be longer than 12 characters.`
            })
            return
        }

        let storeNodeUrl = `${URL.API}/nodes`;
        fetch(storeNodeUrl, {
            body: JSON.stringify(newNodeInfo),
            method: 'POST',
            cache: 'no-cache',
            headers:  new Headers({
                'Content-Type': 'application/json'
            }),
        }).then(
            response => {
                if(response.status == 400){
                    response.json().then((res)=>{
                        this.props.labelReminder(res['error_message'], 'bad');
                    })
                    throw(new Error('400'));
                }
                return response.json()
            }
        ).then((res)=>{

            let file = URL.API + res.path;
            let text = "You have successfully submitted your info";
            this.props.labelReminder(text);
            this.setState({
                result:file,
                buttonDisabled:true
            })
        }).catch(error => {
                console.log(error)
            }
        );

    }

    hideModal = () => {
        this.setState({
            newNodeInfo : {
                producer_name:'',
                domain:'',
                organization_name:'',
                location:'',
                http_port:'8888',
                p2p_port:'9876',
                logo:'',
            },
            errorMessage :'',
            infoError:{
                producer_name:'',
                domain:'',
                organization_name:'',
                location:'',
                http_port:'',
                p2p_port:'',
                logo:'',
            },
            buttonDisabled:false,
            result:'',
        })
        this.props.hideModal();
    }


    // copyLinkToClipboard = () => {
    //     let input = document.createElement('INPUT');
    //     document.getElementsByTagName('body')[0].appendChild(input);
    //     input.value = `wget ${this.state.result} && tar xfp eosiosg.tar  && rm eosiosg.tar`;
    //     input.select();
    //     document.execCommand("Copy");
    //     document.getElementsByTagName('body')[0].removeChild(input);
    //     let text = "File link is now in your clipboard";
    //     this.props.labelReminder(text);
    // }

}



