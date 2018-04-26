/**
 * Created by dongjie on 11/4/18.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import * as URL from '../../config/config';


export default class BlockHeader extends React.Component{


    constructor(props){
        super(props)
        this.state = {
            headDetail:{
                head_block_num:0,
                last_irreversible_block_num:0,
                head_block_producer: 0,
                head_block_time:'',
            }
        }
    }

    componentDidMount(){
        let url = `${URL.API}/chainInfo`;

        let that = this;
        let getHostInfo = function(){
            fetch(url, {
                method: 'get',
                mode: 'cors',
            }).then((response)=>{
                if (response.status === 200) {
                    try{
                        return response.json();
                    }catch(err){
                        throw(err);
                    }
                } else {
                    throw new Error('Something went wrong on api server!');
                }
            }).then((res)=>{
                console.log(res);
                that.setState({
                    headDetail : res
                })
            }).catch(err=>{
                console.log(err);
            })
        }
        getHostInfo();
        this.autoExecute = setInterval(getHostInfo ,1000);
    }


    render(){
        return <div>
            <div className="row block-header-separate tac">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="block-container">
                        <p className="block-header-name">Current Block Number</p>
                        <h5 className="block-number">{this.state.headDetail&&this.state.headDetail.head_block_num}</h5>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="block-container">
                        <p className="block-header-name">Irreversible Block Number</p>
                        <h5 className="block-number">{this.state.headDetail&&this.state.headDetail.last_irreversible_block_num}</h5>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="block-container">
                        <p className="block-header-name">Head Block Producer</p>
                        <h5 className="block-number">{this.state.headDetail&&this.state.headDetail.head_block_producer}</h5>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="block-container">
                        <p className="block-header-name">Head Block Time</p>
                        <h5 className="block-number">{this.state.headDetail&&typeof this.state.headDetail.head_block_time == 'string'&&this.state.headDetail.head_block_time.replace('T', ' ')}</h5>
                    </div>
                </div>
            </div>
            <div className="row block-header-together">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="block-container block-header-together-inner-container">
                        <p><span className="block-header-name">Current Block Number:</span> {this.state.headDetail&&this.state.headDetail.head_block_num}</p>
                        <p><span className="block-header-name">Irreversible Block Number:</span> {this.state.headDetail&&this.state.headDetail.last_irreversible_block_num}</p>
                        <p><span className="block-header-name">Head Block Producer:</span> {this.state.headDetail&&this.state.headDetail.head_block_producer}</p>
                        <p><span className="block-header-name">Head Block Time:</span> {this.state.headDetail&&typeof this.state.headDetail.head_block_time == 'string'&&this.state.headDetail.head_block_time.replace('T', ' ')}</p>
                    </div>
                </div>
            </div>

        </div>

    }

}