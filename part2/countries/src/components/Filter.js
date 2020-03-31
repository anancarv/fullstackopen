import React from 'react'

const Filter = ({value, onChange}) =>
    <div>
        find countries <input value={value} onChange={onChange} />
    </div>

export default Filter