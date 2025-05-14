import React from 'react'

export default function Metadata() {
  return (
     <>
      <div className="p-4 space-y-2 grid grid-cols-1 gap-4">
        <div className="space-y-5">
          <label htmlFor="controlId">Associated Gate or Barrier Control ID</label>
            <input
              id="controlId"
              name="controlId"
              placeholder="If automated control exists"
              className="w-full outline-none bg-transparent text-base border-gray-400 border rounded-md py-2 mt-2 px-2"
            />
        </div>
        <div className="flex justify-end">
            <button className='bg-[#46bbe3] text-white px-5 py-2 rounded-lg'>Add Tag</button>
        </div>
      </div>
    </>
  )
}
