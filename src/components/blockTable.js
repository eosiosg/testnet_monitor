/**
 * Created by dongjie on 10/4/18.
 */

import React from 'react';
import ReactDom from 'react-dom';

import * as URL from '../../config/config';
const logo = require('../images/eos-logo.png');


export default class BlockTable extends React.Component{
    constructor(props){
        super(props);

        this.state = {
          nodesDetail:[],
        };
        this.autoExecute;
    }


    componentDidMount(){

        let that = this;
        let getNodesInfo = function(){
            let url = `${URL.API}/nodes`;
            fetch(url, {
                method: 'get',
                mode: 'cors',
            }).then((response)=>{
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong on api server!');
                }
            }).then((res)=>{
                that.setState({
                    nodesDetail:res?res:[],
                });
            }).catch(err=>{
                console.log(err);
            })

        }
        getNodesInfo();
        this.autoExecute = setInterval(getNodesInfo ,10000);

    }

    imageError = (index) => {
        let nodesDetail = this.state.nodesDetail;
        nodesDetail[index].logo = logo;
        this.setState({
            nodesDetail
        })
    }

    componentWillUnmount(){
        clearInterval(this.autoExecute);
    }


    render(){
        return  <div className="row">
            <div className="col-lg-12 col-md-12">
                <div className="block-container block-container-lg">
                    <div className="table-responsive data-table-container tac">
                        <table className="data-table table-hover table">
                            <thead>
                            <tr>
                                <th>Logo</th>
                                <th>Producer Name</th>
                                <th>Organization Name</th>
                                <th>Location</th>
                                <th>Domain</th>
                                <th>HTTP Port</th>
                                <th>P2P Port</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.nodesDetail.map((node,index)=>{

                                    return <tr key={index}>
                                        <td className="node-logo-td">
                                            <img className="node-logo-desktop"
                                                 alt="No"
                                                 src={node['logo']?node['logo']:logo} />
                                        </td>
                                        <td>
                                            {
                                                node['producer_name']
                                            }
                                        </td>
                                        <td>
                                            {
                                                node['organization_name']
                                            }
                                        </td>
                                        <td>
                                            {
                                                node['location']
                                            }
                                        </td>
                                        <td>
                                            {
                                                node['domain']
                                            }
                                        </td>
                                        <td>
                                            {
                                                node['http_port']
                                            }
                                        </td>
                                        <td>
                                            {
                                                node['p2p_port']
                                            }
                                        </td>
                                        <td style={node['status']==0?{color:'#9fa2a7'}:{color:'#66d203'}}>
                                            {
                                                node['status']==0?'Offline':'Online'
                                            }
                                        </td>
                                    </tr>
                                })
                            }
                            </tbody>
                        </table>
                    </div>

                    <div className="data-ul-container">
                        <ul className="block-node-list">
                            {
                                this.state.nodesDetail.map((node,index)=>{

                                    return <li key={index} className="block-node-item">
                                        <div className="row">
                                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 logo-container tac">

                                                <img className="node-logo"
                                                     alt="No"
                                                     onError = {()=>{
                                                         {/*console.log(this.src);*/}
                                                         {/*this.onerror=null;*/}
                                                         this.imageError(index);
                                                         {/*console.log('gagag');*/}
                                                         {/*console.log(this);*/}
                                                     }
                                                     }
                                                     src={node['logo']?node['logo']:logo} />

                                                {/*{*/}
                                                {/*node['logo']*/}
                                                {/*?*/}
                                                {/*<img className="node-logo"*/}
                                                {/*alt="No"*/}
                                                {/*src={node['logo']} />*/}
                                                {/*:*/}
                                                {/*<div className="logo-user">*/}
                                                {/*<i className="far fa-user"></i>*/}
                                                {/*</div>*/}
                                                {/*}*/}
                                            </div>
                                            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 block-node-info-left">
                                                <p className="node-info-top">
                                                    {
                                                        node['organization_name']
                                                    }
                                                </p>
                                                <p className="node-info-bottom">
                                                    {
                                                        node['producer_name']
                                                    }
                                                </p>
                                            </div>
                                            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 block-node-info-right">
                                                <p className="node-info-top">
                                                    <i className="fa fa-location-arrow block-location-icon"></i>
                                                    &nbsp;&nbsp;
                                                    {
                                                        node['location']
                                                    }
                                                </p>
                                                <p className="node-info-bottom"
                                                   style={node['status']==0?{color:'#9fa2a7'}:{color:'#66d203'}}>
                                                    {
                                                        node['status']==0?'Offline':'Online'
                                                    }
                                                </p>
                                            </div>
                                        </div>

                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    }

}