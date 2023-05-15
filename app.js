
const Title = () => (
    <h1> new heading</h1>
);

const Heading = () => {
    <div id="container">
        <h1>Heading of heading </h1>
        <Title />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<heading />);

