import React from 'react'

function CheckboxTheme ({checked, changeTheme}) {
    return (
        <div className="checkbox">
            <label className={`custom-checkbox ${checked}`} onClick={changeTheme}>
                <span className="custom-checkbox-button"></span>
            </label>
        </div>
    )
}

export default CheckboxTheme