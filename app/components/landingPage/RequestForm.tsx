import React from 'react'

const RequestForm = () => {
  const style = {
    background:
      'linear-gradient(95deg, #2C7CF1 7.19%, rgba(0, 209, 255, 0.50) 89.49%)',
  }

  return (
    <div className="flex w-full" style={style}>
      <div>
        <h4>An easy way to send a request to all suppliers</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
          facilis esse beatae harum unde natus placeat excepturi quis modi
          nobis.
        </p>
      </div>
      <form>
        <h4>Send quote to supplier</h4>
        <input
          type="text"
          className="form-input"
          id="supplierName"
          placeholder="Supplier Name"
        />
        <textarea
          className="form-textarea"
          id="requestDetails"
          cols="30"
          rows="10"
          placeholder="Details of your request"
        ></textarea>
        <div className="quantity-selector">
          <input
            type="text"
            className="quantity-input"
            id="quantity"
            placeholder="Quantity"
          />
          <select className="unit-selector" id="unit">
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
        <button className="submit-button">Send Inquiry</button>
      </form>
    </div>
  )
}

export default RequestForm
