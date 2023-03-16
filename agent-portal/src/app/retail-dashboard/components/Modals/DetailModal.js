import { Modal, Spin } from 'antd';

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
          <p>
            {detail.full_name} {detail.gender}
          </p>
        )}
        <div style={{ textAlign: 'center' }}>
          <p>Hellow World</p>
        </div>
      </Spin>
    </Modal>
  );
};
