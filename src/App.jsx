import {useGetPetsQuery} from "./reducers/pets";

function App() {
    const {data, isLoading} = useGetPetsQuery();

    return (
        <>
            {isLoading ? <h1>Loading....</h1> : data.map(i =>
                <h1 key={i.id}>{i.name}</h1>
            )}
        </>
    );
}

export default App;