import React from 'react';
import MUIDataTable from 'mui-datatables';
import { formatDateTime } from '../../../utils';
import { GET_ALL } from '../../../api/staff';
import { useFetcher } from '../../../utils/useFetcher'

const TABLE_COLUMNS = [
  {
    label: 'Code',
    name: 'id'
  }, {
    label: 'First Name',
    name: 'firstname'
  }, {
    label: 'Last Name',
    name: 'lastname'
  }, {
    label: 'Email',
    name: 'email'
  }, {
    label: 'Username',
    name: 'user.username'
  }, {
    label: 'ABN',
    name: 'abn'
  }, {
    label: 'TFN',
    name: 'tfn'
  }, {
    label: 'Created at',
    name: 'createdAt',
    options: {
      customBodyRender: value => formatDateTime(parseInt(value))
    }
  }
];

function ListStaff({ onEdit }) {

  const { data } = useFetcher( GET_ALL, {
    filter: { filter: {} }
  } )

  const handleEdit = React.useCallback((rowData, rowMeta) => {
    const id = data[rowMeta.dataIndex].id
    onEdit(id)
  }, [ data, onEdit ])

  const options = {
    filterType: 'textField',
    responsive: 'scrollFullHeight',
    selectableRows: 'none',
    onRowClick: handleEdit
  };

  return (
    <MUIDataTable
      data={ data }
      columns={ TABLE_COLUMNS }
      options={ options }
    />
  )
}

export default ListStaff