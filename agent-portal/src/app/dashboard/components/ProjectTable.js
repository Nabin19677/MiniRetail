import React from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { EyeOutlined } from '@ant-design/icons';

const columns = [
  {
    title: '#',
    dataIndex: 'number',
  },
  {
    title: 'Customer Name',
    dataIndex: 'name',
  },
  {
    title: 'Mobile',
    dataIndex: 'mobile',
  },
  {
    title: 'Account Type',
    dataIndex: 'accountType',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (text, row, index) => {
      const tag = text.split('-');
      const status = tag[0];
      const type = tag[1] ? 'ant-tag-type-' + tag[1] : 'ant-tag-type-primary';
      const tagClasses = 'ant-tag ant-tag-has-color ' + type;
      return (
        <div data-show="true" className={tagClasses}>
          <span className="ant-tag-text">{status}</span>
        </div>
      );
    },
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    align: 'center',
    render: (text, record) => {
      return (
        <span>
              <Link to={`#`} title="View">
                <EyeOutlined style={{ fontSize: '22px', color: '#08c' }} theme="outlined" />
              </Link>
          </span>
      );
    },
  },
  // {
  //   title: 'Progress',
  //   dataIndex: 'progress',
  //   render: (text, row, index) => {
  //     const progress = text.split('-');
  //     const percent = progress[0];
  //     const type = progress[1] ? 'ant-progress-type-' + progress[1] : 'ant-progress-type-primary';
  //     const progressClasses = 'ant-progress ant-progress-line ' + type;
  //     return (
  //       <div className={progressClasses}>
  //         <div>
  //           <div className="ant-progress-outer">
  //             <div className="ant-progress-inner">
  //               <div className="ant-progress-bg" style={{ width: percent, height: '10px' }}></div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   },
  // },
];

const data = [
  {
    key: '1',
    number: '1',
    name: ' Krishna Timilsina',
    status: 'Pending-info',
    mobile: '9811111111',
    accountType: 'Current',
  },
  {
    key: '2',
    number: '2',
    name: 'Mamata Pandey',
    status: 'Pending-info',
    mobile: '9811111111',
    accountType: 'Cash Credit',
  },
  {
    key: '3',
    number: '3',
    name: 'Robin Shrestha',
    status: 'Approved-success',
    mobile: '9811111111',
    accountType: 'Saving Bank',
  },
  {
    key: '4',
    number: '4',
    name: 'Sudan Sharma',
    status: 'Pending-info',
    mobile: '9811111111',
    accountType: 'Term Deposit',
  },
  {
    key: '5',
    number: '5',
    name: 'Ekata Neupane',
    status: 'Approved-success',
    mobile: '9811111111',
    accountType: 'Cash Credit',
  },
  {
    key: '6',
    number: '6',
    name: 'Jeny Kunwar',
    status: 'Suspended-danger',
    mobile: '9811111111',
    accountType: 'Current',
  },
];

const Box = () => 
<>
{/* <Table columns={columns} dataSource={data} pagination={false} bordered={false} /> */}
</>;

export default Box;
