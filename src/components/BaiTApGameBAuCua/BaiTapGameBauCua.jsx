import React, { Component } from 'react'
import XucSac from './XucSac';
import DanhSachCuc from './DanhSachCuc';

export default class BaiTapGameBauCua extends Component {
    render() {
        return (
            <div className='container'>
                <h3 className='display-4 text-success text-center'>GAM BAU CUA</h3>
                <XucSac />
                <DanhSachCuc />
            </div>
        )
    }
}
