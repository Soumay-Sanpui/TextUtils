import React from 'react'

export default function ColorSwithcher(props) {
    const switcherGlobal = {
        display: 'inline-block',
        marginRight: '3rem'
    }
    return (
        <div className="form-check form-switch" style={switcherGlobal}>
            <input className="form-check-input" onClick={props.colorMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label">{props.modeLabel}</label>
        </div>
    )
}