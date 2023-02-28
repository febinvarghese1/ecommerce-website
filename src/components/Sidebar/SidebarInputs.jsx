import React from 'react'

const SidebarInputs = ({type,id,name,value,onChange}) => {
  return (
    <section>
          <input type={type} id={id} value={value} name={name} onChange={onChange} />
            <label htmlFor={value}>{value.includes("0") ? <span>UNDER {value}</span>  :   value.replace("'s"," ").toUpperCase()}</label>
    </section>
  )
}

export default React.memo(SidebarInputs)