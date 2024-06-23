import { useNavigate, useParams } from "react-router-dom"
import store from "../store/store"
import { observer } from "mobx-react-lite"
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { ModalPicker } from "../modal/modalPicker";

export const Book = observer(() => {
  const nav = useNavigate()
  const id = Number(useParams().id)
  const book = store.getBookbyId(id)
  const [startDate, setStartDate] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1, 0, 0, new Date().getSeconds()));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const disabledButton = !!book?.dateTake
  const disabledButtonTake = new Date().getHours() >= 24
  
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    store.takeBook(id, startDate)
    nav(-1)
  }

  const handleCancel = () => {
    setIsModalOpen(false);
  }

  const handleReturn = () => {
    store.returnBook(id)
    nav(-1)
  }

  const handleBack = () => {
    nav(-1)
  }
  console.log(startDate);

  return (
    <div className="container">
      <div onClick={handleBack} className="back">&lt;&lt;&lt; Назад</div>
      <div className="book">
        <img src={book?.image} alt='img' style={{ width: '420px', height: '280px' }} />
        <h3>{book?.author}</h3>
        <h2>{book?.title}</h2>
        <p>{book?.description}</p>
        <ModalPicker book={book} isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} startDate={startDate} setStartDate={setStartDate} />
        <div className="btn">
          <button disabled={!disabledButton} className="button " onClick={handleReturn} >Вернуть</button>
          <button disabled={disabledButton || disabledButtonTake} className="button " onClick={showModal} >Читать книгу</button>
        </div>
      </div>
    </div>
  )
})