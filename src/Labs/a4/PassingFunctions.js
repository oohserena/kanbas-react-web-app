function PassingFunctions({ theFunction }) {
    return (
        <div>
            <h3>Passing Functions</h3>
            <button className="btn btn-primary"
                    onClick={theFunction}>
                Invoke the Function
            </button>
        </div>
    );
}

export default PassingFunctions;