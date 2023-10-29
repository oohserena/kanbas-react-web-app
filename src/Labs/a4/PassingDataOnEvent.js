function PassingDataOnEvent () {
    const add = (a, b) => {
        alert(`${a} + ${b} = ${a + b}`)
    };

    return (
        <div>
            <h3>Passing Data on Event</h3>
            <button onClick={() => add(2, 3)}
                    className="btn btn-primary">
                Pass 2 and 3 to add()
            </button>
        </div>
    );
}

export default PassingDataOnEvent;