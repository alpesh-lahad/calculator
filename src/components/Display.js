function Display({displayValue}) {
    return (
        <>
            <div className="row mb-4">
                <div className="col">
                    <input 
                    id="diaplay" 
                    type="text" 
                    className="form-control display" 
                    readOnly
                    value={displayValue} 
                    />
                </div>
            </div>
        </>
    )
}

export default Display;