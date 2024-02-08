// ReceiptComponent.js
import React from 'react'
import { Swap } from '@prisma/client'
import { Metadata } from 'next'

const ReceiptComponent = ({ swapData }: { swapData: Swap }) => {
  const printReceipt = () => {
    window.print() // This will trigger the print dialog for the current page
  }

  return (
    <div className="w-6/12 h-full flex flex-col gap-2 justify-center items-center py-2 px-2">
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
      <div id="receiptComponentToPrint" className="flex flex-col gap-4">
        <h4 className="text-2xl font-bold uppercase text-center">
          Swap Receipt
        </h4>
        <hr className=" border-2" />
        <div>
          <table className="">
            <tbody>
              <tr className="">
                <td className="text-left">Soft-Tech Devices</td>
                <td className="text-right">
                  27, Arala Street, Airport Road, Benin City Edo State
                </td>
              </tr>
              <tr>
                <td className="text-left">Date</td>
                <td className="text-right">Date </td>
              </tr>
              <tr>
                <td className="text-left">Manager</td>
                <td className="text-right">Ikechuku Ogbulu</td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr className=" border-2" />
        <div>
          <table className="w-full">
            <tbody>
              <tr className="">
                <td className="text-left">Item Name</td>
                <td className="text-right">{swapData.itemName}</td>
              </tr>
              <tr className="">
                <td className="text-left">Brand</td>
                <td className="text-right">{swapData.itemBrand}</td>
              </tr>
              <tr className="">
                <td className="text-left">Model</td>
                <td className="text-right">{swapData.itemModel}</td>
              </tr>
              <tr className="">
                <td className="text-left">Serial Number</td>
                <td className="text-right">{swapData.serialNumberFrom}</td>
              </tr>
              <tr className="">
                <td className="text-left">Serial Number</td>
                <td className="text-right">{swapData.serialNumberTo}</td>
              </tr>
              <tr className="">
                <td className="text-left">Upgrade</td>
                <td className="text-right">{swapData.upgradeFrom}</td>
              </tr>
              <tr className="">
                <td className="text-left">Upgrade</td>
                <td className="text-right">{swapData.upgradeTo}</td>
              </tr>
              <tr className="">
                <td className="text-left">Name</td>
                <td className="text-right">{swapData.customerName}</td>
              </tr>
              <tr className="">
                <td className="text-left">Phone</td>
                <td className="text-right">{swapData.customerPhone}</td>
              </tr>
              <tr className="">
                <td className="text-left">Email</td>
                <td className="text-right">{swapData.customerEmail}</td>
              </tr>
              <tr className="">
                <td className="text-left">Status</td>
                <td className="text-right">{swapData.status}</td>
              </tr>
              <tr className="">
                <td className="text-left">Address</td>
                <td className="text-right">{swapData.address}</td>
              </tr>
              <tr className="">
                <td className="text-left">Cost Value</td>
                <td className="text-right">{swapData.appraisalValue}</td>
              </tr>
              <tr className="">
                <td className="text-left">Amount Payable</td>
                <td className="text-right">{swapData.differencePayable}</td>
              </tr>
              <tr className="">
                <td className="text-left">Payment Status</td>
                <td className="text-right">{swapData.paymentStatus}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr className=" border-2" />
        <p className="capitalize font-bold text-lg text-center">
          Thank you for shopping with us
        </p>
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
