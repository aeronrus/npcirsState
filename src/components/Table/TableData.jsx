import React from 'react';
import CustomLinkCell from '../CustomLinkCell/CustomLinkCell';
import DataTable from 'react-data-table-component';
import CustomStyle from '../CustomStyle/CustomStyle';

const TableData = (data, setActive) => {
  const columns = [
    { name: '№', className: 'number', selector: (row) => Number(row.id) + 1, sortable: true },
    {
      name: 'Фамилия',
      cell: (row) => <CustomLinkCell setActive={setActive} row={row} field="surname" />,
    },
    { name: 'Имя', selector: (row) => <CustomLinkCell row={row} field="name" /> },
    { name: 'Отчество', selector: (row) => <CustomLinkCell row={row} field="patronymic" /> },
    { name: 'Дата рождения', selector: (row) => row.birthDate },
    { name: 'Дата подачи заявки', selector: (row) => row.applicationDate, sortable: true },
  ];
  return (
    <div>
      <DataTable
        columns={columns}
        data={data.data}
        pagination
        customStyles={CustomStyle}></DataTable>
    </div>
  );
};
export default TableData;
