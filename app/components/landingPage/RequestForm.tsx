import React from 'react'

const RequestForm = () => {
  const style = {
    background:
      'linear-gradient(95deg, #2C7CF1 7.19%, rgba(0, 209, 255, 0.50) 89.49%)',
  }

  return (
    <div
      className="flex flex-col md:flex-row w-full p-8 gap-5 rounded-md items-start"
      style={style}
    >
      <div className="w-full md:w-6/12 flex flex-col items-start gap-4 md:pr-48">
        <h4 className="text-xl md:text-2xl font-bold text-white">
          An easy way to send a request to all suppliers
        </h4>
        <p className="text-white text-left">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
          facilis esse beatae harum unde natus placeat
        </p>
      </div>
      <form className="w-full md:w-6/12 flex flex-col gap-4 bg-white p-4 rounded-lg items-start">
        <h4 className="text-xl font-bold">Send quote to supplier</h4>
        <input
          type="text"
          className="form-input w-full border border-slate-300 rounded-md p-2 outline-gray-400"
          id="supplierName"
          placeholder="Supplier Name"
        />
        <textarea
          className="form-textarea  w-full border border-slate-300 rounded-md p-2 outline-gray-400"
          id="requestDetails"
          placeholder="Details of your request"
        ></textarea>
        <div className="quantity-selector w-full flex items-start space-x-2">
          <input
            type="text"
            className="quantity-input  w-full border border-slate-300 rounded-md p-2 outline-gray-400"
            id="quantity"
            placeholder="Quantity"
          />
          <select
            className="unit-selector  w-full border border-slate-300 rounded-md p-2 outline-gray-400"
            id="unit"
          >
            <option value="">Unit</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
        </div>
        <button className="submit-button bg-blue-500 text-white py-2 px-4 rounded-md font-semibold">
          Send Inquiry
        </button>
      </form>
    </div>
  )
}

export default RequestForm
