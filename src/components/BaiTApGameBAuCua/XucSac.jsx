import React, { Component } from 'react'
import { connect } from 'react-redux';

class XucSac extends Component {


    renderXucXac = () => {
        return (
            this.props.listXucXac.map((xsrd, index) => {
                return (
                    <div className="col-2 text-center " key={index}>

                        <img src={xsrd.hinhAnh} alt="hinhXucXac"  width="40" height="40"/>

                    </div>
                )
            })
        )
    }

    render() {
        return (
            <div className='container'>
                <div class="row">
                    <div className="col-2 my-auto text-center ">
                        <button className='btn btn-outline-warning' onClick={()=>this.props.playGame()}>Play</button>
                    </div>
                    <div className="col-8">
                        <div class="row">
                        <div className="col-3"></div>
                            {this.renderXucXac()}
                        <div className="col-3"></div>


                        </div>
                    </div>
                    <div className="col-2 my-auto text-center ">
                        <span className='display-5'>
                            {this.props.diemTong} $
                        </span>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listXucXac: state.gamePlayStorePreducer.xucXac,
        diemTong: state.gamePlayStorePreducer.tongDiem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            dispatch({
                type: 'PLAY_GAME',

            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(XucSac)