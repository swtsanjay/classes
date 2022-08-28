import { useState } from "react";

function Test() {

    const [data, setData] = useState([
        {name: 'abc', age: 10},
        {name: 'xyz', age: 20},
    ]);

    const handleChange = () => {
        const tempData = [...data];
        tempData.push({name: 'pqr', age: 12})
        // setData(tempData);
    }

    return (
        <>
            {
                data.map((v, i) => {
                    return <p key={i}>Name is {v.name} and age is {v.age}</p>
                })
            }
            <button onClick={handleChange}>Click me</button>
        </>
    );
}

// export default Test;
export { Test }; 