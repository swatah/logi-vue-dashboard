import React, { useState } from 'react'

export default function Operational() {
    const operationMode = ["Auto", "Manual", "Scheduled", "AI-Tracked"];
    const [operation, setOperation] = useState("")

    const handleCHange = (e) => {
        setOperation(e.target.value)
    }
  return (
    <>
      <div className="p-4 space-y-2 grid grid-cols-1 gap-4">
        <div className="space-y-5">
          <label htmlFor="operationMode">Default Operation Mode</label>
           <select
            className="w-full border rounded px-3 py-2"
            value={operation.operationMode}
            onChange={(e) => handleCHange(e)}
          >
            <option value="">Select Operation Mode</option>
            {operationMode.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-5">
          <label htmlFor="controlId">Associated Gate or Barrier Control ID</label>
            <input
              id="controlId"
              name="controlId"
              placeholder="If automated control exists"
              className="w-full outline-none bg-transparent text-base border-gray-400 border rounded-md py-2 mt-2 px-2"
            />
        </div>
        <div className="space-y-5">
        <label htmlFor="roi">Time Windows or Shifts</label>
        <textarea
          id="roi"
          rows="7"
          name="roi"
          placeholder="e.g., when dock is typically in use"
          className="w-full outline-none bg-transparent text-base border-gray-400 border rounded-md py-2 mt-2 px-2"
        />
      </div>
      </div>
    </>
  )
}
