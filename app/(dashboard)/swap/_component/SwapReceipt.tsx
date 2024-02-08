// ReceiptComponent.js
import React from 'react'
import { Swap } from '@prisma/client'
import { Metadata } from 'next'

const ReceiptComponent = ({ swapData }: { swapData: Swap }) => {
  const printReceipt = () => {
    window.print() // This will trigger the print dialog for the current page
  }

  return (
    <div>
      <style>
        {`
          @media print {
            body * {
              visibility: hidden;
            }
            #receiptComponentToPrint, #receiptComponentToPrint * {
              visibility: visible;
            }
            #receiptComponentToPrint {
              position: absolute;
              left: 0;
              top: 0;
            }
            #printButton {
              display: none;
            }
          }
        `}
      </style>
      <div
        id="receiptComponentToPrint"
        className="w-6/12 flex flex-col items-center justify-center"
      >
        <h1 className="text-xl font-bold">Soft-Tech Devices</h1>
        <p>Name: {swapData.itemName}</p>
        <p>Brand: {swapData.itemBrand}</p>
      </div>

      <button
        id="printButton"
        className="bg-slate-50 text-slate-900 drop-shadow-lg border border-slate-500 hover:bg-slate-700 hover:text-slate-50 px-2 py-1 rounded-lg "
        onClick={printReceipt}
      >
        Print Receipt
      </button>
    </div>
  )
}

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Soft-Tech Devices Swap Receipt',
  description: 'Print Swap Receipt Details',
}

export default ReceiptComponent
