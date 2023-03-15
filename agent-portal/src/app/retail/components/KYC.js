import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  Row,
  Col,
  Breadcrumb,
  Card,
  Skeleton,
  Spin,
  DatePicker,
  Form,
  Input,
  Select,
  Divider,
  InputNumber,
  Button,
} from 'antd';
import { DashboardOutlined } from '@ant-design/icons';
import { Thumb } from './Thumb';
import { useState } from 'react';

const { Option } = Select;

const KYCForm = (props) => {
  const [form] = Form.useForm();
  let { retailKycLoading, retailKycDetail, addKycDetails } = props;

  const [citizenship, setCitizenshipFile] = useState();

  const onFinish = (values) => {
    let formData = { ...values };
    formData.dob = formData.dob.format('YYYY-MM-DD');
    delete formData.citizenship
    formData.citizenship = citizenship
    console.log(formData);
    addKycDetails(formData)
  };

  return (
    <div className="container-fluid no-breadcrumb page-dashboard">
      <div className="article__section">
        <article className="article">
          <Row type="flex" justify="space-between">
            <Col xl={12} lg={12} md={24} xs={24} sm={24}>
              <h4 className="article-title">Quick KYC</h4>
            </Col>
            <Col>
              <Breadcrumb separator="/">
                <Breadcrumb.Item>
                  {' '}
                  <DashboardOutlined />
                  <Link to={'/'}>{'dashboard'}</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item> {'Retail'}</Breadcrumb.Item>
                <Breadcrumb.Item>{'Quick kyc'}</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>

          {/* <Message error={sanctionRuleErrors} /> */}

          <Card>
            <Spin spinning={retailKycLoading} size="large" tip={'Loading KYC Detail'}>
              <Skeleton loading={retailKycLoading} active>
                <Form
                  scrollToFirstError={true}
                  onFinish={onFinish}
                  form={form}
                
                  layout="vertical"
                >
                  <div>
                    {' '}
                    <div>
                      <h6 style={{ fontWeight: 'bold' }}>Basic Information</h6>
                    </div>
                    <Divider />
                    <Row gutter={24}>
                      <Col span={6}>
                        <Form.Item
                          name={'salutation'}
                          label="Salutation"
                          rules={[{ required: true, message: 'Salutation is required.' }]}
                        >
                          <Select
                            showSearch
                            filterOption={(input, option) => {
                              return (
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                              );
                            }}
                            allowClear
                          >
                            <Option key={'M/S.'} value={'M/S.'}>
                              {'M/S.'}
                            </Option>
                            <Option key={'MASTER'} value={'MASTER'}>
                              {'MASTER'}
                            </Option>
                            <Option key={'MISS'} value={'MISS'}>
                              {'MISS'}
                            </Option>
                            <Option key={'MR.'} value={'MR.'}>
                              {'MR.'}
                            </Option>
                            <Option key={'MRS.'} value={'MRS.'}>
                              {'MRS.'}
                            </Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={6}>
                        <Form.Item
                          name={'full_name'}
                          label="Full Name"
                          rules={[
                            { required: true, message: 'Full Name is required.' },
                            {
                              pattern: new RegExp(
                                '^([a-zA-Z]+\\s{1}[a-zA-Z]{1,}|[a-zA-Z]+\\s{1}[a-zA-Z ]{3,}\\s{1}[a-zA-Z]{1,})$'
                              ),
                              message: 'Please enter valid full name.',
                            },
                          ]}
                        >
                          <Input maxLength={45} />
                        </Form.Item>
                      </Col>

                      <Col span={6}>
                        <Form.Item
                          name={'gender'}
                          label="Gender"
                          rules={[{ required: true, message: 'Gender is required.' }]}
                        >
                          <Select
                            showSearch
                            filterOption={(input, option) => {
                              return (
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                              );
                            }}
                            allowClear
                          >
                            <Option key={'FEMALE'} value={'FEMALE'}>
                              {'FEMALE'}
                            </Option>
                            <Option key={'MALE'} value={'MALE'}>
                              {'MALE'}
                            </Option>
                            <Option key={'OTHERS'} value={'OTHERS'}>
                              {'OTHERS'}
                            </Option>
                          </Select>
                        </Form.Item>
                      </Col>

                      <Col span={6}>
                        <Form.Item
                          name={'dob'}
                          label="Date Of Birth"
                          rules={[{ required: true, message: 'Date of Birth is required' }]}
                        >
                          <DatePicker format="YYYY-MM-DD" />
                        </Form.Item>
                      </Col>

                      <Col span={6}>
                        <Form.Item
                          name={'marital_status'}
                          label="Marital Status"
                          rules={[{ required: true, message: 'Marital Status is required' }]}
                        >
                          <Select
                            showSearch
                            filterOption={(input, option) => {
                              return (
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                              );
                            }}
                            allowClear
                          >
                            <Option key={'DIVORCED'} value={'DIVORCED'}>
                              {'DIVORCED'}
                            </Option>
                            <Option key={'LEGALLY SEPARATED'} value={'LEGALLY SEPARATED'}>
                              {'LEGALLY SEPARATED'}
                            </Option>
                            <Option key={'MARRIED'} value={'MARRIED'}>
                              {'MARRIED'}
                            </Option>
                            <Option key={'UNMARRIED'} value={'UNMARRIED'}>
                              {'UNMARRIED'}
                            </Option>
                            <Option key={'WIDOW'} value={'WIDOW'}>
                              {'WIDOW'}
                            </Option>
                            <Option key={'WIDOWER'} value={'WIDOWER'}>
                              {'WIDOWER'}
                            </Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={6}>
                        <Form.Item
                          name={'nationality'}
                          label="Nationality"
                          rules={[{ required: true, message: 'Nationality is required.' }]}
                          initialValue="NEPALI"
                        >
                          <Select
                            showSearch
                            filterOption={(input, option) => {
                              return (
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                              );
                            }}
                            allowClear
                            disabled
                          >
                            <Option key={'NEPALI'} value={'NEPALI'}>
                              {'NEPALI'}
                            </Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={6}>
                        <Form.Item
                          name={'address_desc'}
                          label="Address"
                          rules={[{ required: true, message: 'Address is required.' }]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={6}>
                        <Form.Item
                          name={'email'}
                          label="Email"
                          rules={[{ required: true, message: 'Email is required.' }]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={6}>
                        <Form.Item
                          name={'mobile_number'}
                          label="Mobile Number"
                          rules={[{ required: true, message: 'Mobile Number is required.' }]}
                        >
                          <Input maxLength={10} />
                        </Form.Item>
                      </Col>
                    </Row>{' '}
                  </div>
                  <div>
                    {' '}
                    <div>
                      <h6 style={{ fontWeight: 'bold' }}>Identification Documents</h6>
                    </div>
                    <Divider />
                    <Row gutter={24}>
                      <Col span={6}>
                        {/* <Form.Item
                          name={'citizenship'}
                          label="Citizenship (in PDF)"
                          rules={[{ required: true, message: 'Citizenship is required.' }]}
                        > */}
                          <input
                            type={'file'}
                            onChange={(e) => {
                              const file = e.currentTarget.files[0];
                              setCitizenshipFile(file);
                              // e.target.value = null;
                            }}
                          />
                        {/* </Form.Item> */}
                      </Col>
                    </Row>
                  </div>

                  <Row style={{ marginTop: '10px', float: 'right', marginRight: '40px' }}>
                    <Button type="primary" htmlType="submit">
                      Finish
                    </Button>
                  </Row>
                </Form>
              </Skeleton>
            </Spin>
          </Card>
        </article>
      </div>
    </div>
  );
};

export default withRouter(KYCForm);
