import { Modal, ConfigProvider } from 'antd';
import DatePicker from "react-datepicker";
import { BsCalendar4Week, BsCalendar4 } from "react-icons/bs";
import { IBook } from '../../models';

interface IModalPicker {
  book?: IBook
  isModalOpen: boolean
  handleOk: () => void
  handleCancel: () => void
  startDate: Date
  setStartDate: any
}

export const ModalPicker = ({ book, isModalOpen, handleOk, handleCancel, startDate, setStartDate }: IModalPicker) => {
  const startDateHandle=(date:Date|null)=>{
if(date){
  const now = new Date()
  const date2 = (new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16, 0, 0, 0).getTime())
   setStartDate(date)
}
   

  }
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
        <Modal footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <div className="modal">
            <img src={book?.image} alt='img' style={{ width: '210px', height: '140px' }} />
            <p>Установите время на чтение</p>
            <div className="datepickerWrapper" >
              <div className="datepicker" >
                <label htmlFor='label'>
                  <BsCalendar4Week className="pickerLabel" />
                </label>
                <DatePicker className='picker' dateFormat='dd.MM.yyyy' id='label' selected={startDate} onChange={(date) => startDateHandle(date)} />
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


