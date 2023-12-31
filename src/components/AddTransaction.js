import React, {useState, useContext} from "react";
import {GlobalContext} from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const {addTransaction} = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount, //convert string to number
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Tambah Transaksi</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text' id='text-label'>
            Text
          </label>
          <input type='text' id='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter text...' />
        </div>
        <div className='form-control'>
          <label htmlFor='amount' id='amount-label'>
            Jumlah <br />
            (negative - pengeluaran, positive - pemasukkan)
          </label>
          <input type='number' id='amount' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter amount...' />
        </div>
        <button className='btn'>Tambah</button>
      </form>
    </>
  );
};

export default AddTransaction;
