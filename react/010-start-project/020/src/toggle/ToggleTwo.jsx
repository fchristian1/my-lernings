const ToggleTwo = ({ data, setCountBind }) => {
    return (
        <>
            <h1>ToggleTwo</h1>
            {data}
            <button onClick={() => setCountBind()}>Count</button>
        </>
    );
};

export default ToggleTwo;
