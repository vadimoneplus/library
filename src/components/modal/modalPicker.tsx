import { Modal, ConfigProvider } from 'antd';
import DatePicker from "react-datepicker";
import { BsCalendar4Week, BsCalendar4 } from "react-icons/bs";

export const ModalPicker = ({ book, isModalOpen, handleOk, handleCancel, startDate, setStartDate }: any) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Modal: {
          },
        },
      }}
    >
      <>
        {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
        <Modal footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <div className="modal">
            <img src={book?.image} alt='img' style={{ width: '210px', height: '140px' }} />
            <p>Установите время на чтение</p>

            <div className="datepickerWrapper" >
              <div className="datepicker" >
                <label htmlFor='label'>
                  <BsCalendar4Week className="pickerLabel" />
                </label>
                <DatePicker dateFormat='dd.MM.yyyy' id='label' className='picker' selected={startDate} onChange={(date) => setStartDate(date)} />
                <label htmlFor='label'>
                  <BsCalendar4 className="pickerIcon" />
                </label>
              </div>
              <button className="buttonModal activeBtn" onClick={handleOk}>Читать книгу</button>
            </div>
          </div>
        </Modal>
      </>
    </ConfigProvider>
  );
};


