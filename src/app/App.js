import AppLoader from "./hoc/AppLoader";

function App() {
    return (
        <AppLoader>
            <div className="text-red-800 text-center align-middle font-bold">
                <h1>Hello Team</h1>
            </div>
        </AppLoader>
    );
}

export default App;
