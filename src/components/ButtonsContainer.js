function ButtonsContainer({ onButtonClick }) {
    const buttonNames = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", "."];

    return (
        <>
            <div className="row">
                <div className="col">
                    <div className="button-container">
                        {buttonNames.map((buttonName, index) =>
                            <button
                                key={index}
                                className="btn btn-light"
                                onClick={()=>onButtonClick(buttonName)}
                            >
                                {buttonName}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ButtonsContainer;