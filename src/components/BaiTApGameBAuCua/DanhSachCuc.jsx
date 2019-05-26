import React, { Component } from 'react'
import { connect } from 'react-redux';


class DanhSachCuc extends Component {
    redederXucSac = () => {
        return (
            this.props.xucSac.map((xs, index) => {
                return (
                    <div className="col-4 mb-5" key={index} >
                    <button onClick={()=>this.props.datCuocAction(xs.ma)} className='btn btn-outline-success' disabled={this.props.tongDiem>0?false:true}>
                        <img src={xs.hinhAnh} alt="" />
                        <br />
                        <span className='text-danger display-4'>{xs.diemCuoc}</span>
                    </button>
                    </div>
                    
                )
            })
        )
    }

    render() {
        return (
            <div className='container'>
                <div className="row">
                    {this.redederXucSac()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        xucSac: state.gamePlayStorePreducer.mangCuoc,
        tongDiem: state.gamePlayStorePreducer.tongDiem,
    }
}

//xu ly dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        datCuocAction: (ma) =>{
            dispatch({
                type: 'DAT_CUOC',
                ma
            })
        },
        //....
    }
}

// ket noi giua commponent va store cua reduct
export default connect(mapStateToProps, mapDispatchToProps)(DanhSachCuc)


