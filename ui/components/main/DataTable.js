import React, { useState } from 'react';
import { getUserFriendlyDate } from '../../utils/helper';
import Modal from '../modal/Modal';

function BodyRow({row, bgCol, handleModal}) {
    let rowValues = Object.values(row);
    return (
        <div className={ `body-row ${bgCol}` }>
          <span className='r-value'>{ rowValues[0] }</span>
          <span className='r-value'>
                                                                                                                                <img className='sm-icon' src='/icons/json.svg' alt='json' onClick={ () => handleModal(true) }/>
                                                                                                                                <span>{ rowValues[1] }</span>
          </span>
          <span className='r-value'>{ getUserFriendlyDate(rowValues[2]) }</span>
        </div>
    )
}

function DataTable({data}) {
    const [isActive, setModal] = useState(false);
    const handleModal = (isActive) => {
        setModal(isActive);
    }
    let colNames = Object.keys(data[0]);
    return (
        <div className='data-table'>
          <div className='data-header'>
            <div className='h-row r-grey'>
              <span className='h-value'>{ colNames[0] }</span>
              <span className='h-value'>{ colNames[1] }</span>
              <span className='h-value'>{ colNames[2] }</span>
            </div>
          </div>
          <div className='data-body'>
            { data.map((row, i) => <BodyRow key={ i } row={ row } handleModal={ handleModal } bgCol={ i % 2 ? 'r-grey' : "" } />) }
          </div>
          <Modal isActive={ isActive } handleModal={ handleModal } content={ data } />
        </div>
    )
}

export default DataTable;