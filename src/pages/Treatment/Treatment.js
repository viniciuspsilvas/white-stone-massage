import React from 'react'
import { withRouter } from 'react-router-dom'
import { formatDateTime, boolCell, truncateString } from '../../utils';
import MUIDataTable from 'mui-datatables'
import { Button } from '@material-ui/core';
import ActionToolBar from '@bit/smart-solution-4u.components.action-tool-bar'

const TABLE_COLUMNS = [
  {
    label: 'Code',
    name: 'id'
  }, {
    label: 'Name',
    name: 'name'
  }, {
    label: 'Description',
    name: 'description',
    options: {
      customBodyRender: value => truncateString(value, 15)
    }
  }, {
    label: 'Price',
    name: 'price'
  }, {
    label: 'Active',
    name: 'active',
    options: {
      customBodyRender: value => boolCell(value)
    }
  }, {
    label: 'Created at',
    name: 'createdAt',
    options: {
      customBodyRender: value => formatDateTime(parseInt(value))
    }
  }
];

const Treatment = props => {

  const treatmentList = [
    { id: 1, name: 'test', description: 'test', price: 1.90, active: true, createdAt: new Date().getDate()},
    { id: 2, name: 'test', description: 'test', price: 1.90, active: true, createdAt: new Date().getDate()},
    { id: 6, name: 'test', description: 'test', price: 1.90, active: true, createdAt: new Date().getDate()},
    { id: 4, name: 'tes4t', description: 'test', price: 1.90, active: true, createdAt: new Date().getDate()},
    { id: 7, name: 'test', description: 'test', price: 1.90, active: true, createdAt: new Date().getDate()}
  ]

  const handleNew = () => {
    props.history.push( `${ props.location.pathname }/new`)
  }

  const handleEdit = React.useCallback((rowData, rowMeta) => {
    const id = treatmentList[rowMeta.dataIndex].id
    props.history.push( `${ props.location.pathname }/edit/${ id }`)
  }, [ props.history, props.location.pathname, treatmentList ])

  const options = {
    filterType: 'textField',
    responsive: 'scrollFullHeight',
    selectableRows: 'none',
    onRowClick: handleEdit
  };

  return (
    <div>
      <ActionToolBar title='Treatments'>
        <Button variant='contained' color='primary' onClick={ handleNew }> New </Button>
      </ActionToolBar>
      <MUIDataTable
        data={ treatmentList }
        columns={ TABLE_COLUMNS }
        options={ options }
      />
    </div>
  )
}

export default withRouter( Treatment )