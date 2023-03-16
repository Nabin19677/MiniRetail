import { Modal, Spin, Avatar, Tooltip, Image, Divider, Tabs, Row, Col, Button } from 'antd';
import moment from 'moment';
import { DownloadOutlined } from '@ant-design/icons';
import { API_URL } from '@constants/index';

export const DetailModal = (props) => {
  const { isDetailModalOpen, handleCancel, detail, detailLoading } = props;
  return (
    <Modal
      title="Quick KYC Detail"
      visible={isDetailModalOpen}
      width="60vw"
      footer={false}
      onCancel={handleCancel}
      style={{
        top: 20,
      }}
    >
      <Spin spinning={detailLoading}>
        {detail && (
          <>
            <Tabs>
              <Tabs.TabPane tab="Basic Information" key="BASIC_INFORMATION">
                <div>
                  <Row>
                    <Col span={12}>
                      <p>
                        <b>Name</b>
                      </p>
                    </Col>
                    <Col span={12}>
                      <p>{detail?.full_name}</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <p>
                        <b>Date of Birth</b>
                      </p>
                    </Col>
                    <Col span={12}>
                      <p>{moment(detail?.dateOfBirth).format('YYYY-MM-DD')}</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <p>
                        <b>Gender</b>
                      </p>
                    </Col>
                    <Col span={12}>
                      <p>{detail?.gender?.toUpperCase()}</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <p>
                        <b>Marital Status</b>
                      </p>
                    </Col>
                    <Col span={12}>
                      <p>{detail?.marital_status?.toUpperCase()}</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <p>
                        <b>Nationality</b>
                      </p>
                    </Col>
                    <Col span={12}>
                      <p>{detail?.nationality?.toUpperCase()}</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <p>
                        <b>Address</b>
                      </p>
                    </Col>
                    <Col span={12}>
                      <p>{detail?.address_desc?.toUpperCase()}</p>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={12}>
                      <p>
                        <b>Mobile</b>
                      </p>
                    </Col>
                    <Col span={12}>
                      <p>{detail?.mobile_number}</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <p>
                        <b>Email</b>
                      </p>
                    </Col>
                    <Col span={12}>
                      <p>{detail?.email}</p>
                    </Col>
                  </Row>
                </div>
              </Tabs.TabPane>

              <Tabs.TabPane tab="Documents" key="DOCUMENTS">
                <div>
                  <Row gutter={4}>
                    <Col span={6}>
                      <p>
                        <b>Citizenship Front</b>
                      </p>
                      <Image width={200} src={`${API_URL}/${detail?.citizenship_front}`} />
                    </Col>
                    <Col span={6}>
                      <p>
                        <b>Citizenship Back</b>
                      </p>
                      <Image width={200} src={`${API_URL}/${detail?.citizenship_back}`} />
                    </Col>
                  </Row>

                  {detail?.other_document && (
                    <>
                      <Row gutter={4}>
                        <Col span={6}>
                          <p>
                            <b>Other Document</b>
                          </p>
                          {detail?.other_document?.split('.')[1] !== 'pdf' ? (
                            <Image width={200} src={`${API_URL}/${detail?.other_document}`} />
                          ) : detail?.other_document?.split('.')[1] === 'pdf' ? (
                            <Tooltip title="Download">
                              <a href={`${API_URL}/${detail?.other_document}`} download>
                                <Button type="primary" shape="round" icon={<DownloadOutlined />}>
                                  {detail?.other_document?.split('\\')[2]}
                                </Button>
                              </a>
                            </Tooltip>
                          ) : (
                            <></>
                          )}{' '}
                        </Col>
                      </Row>
                    </>
                  )}
                </div>
              </Tabs.TabPane>
            </Tabs>
          </>
        )}
      </Spin>
    </Modal>
  );
};
