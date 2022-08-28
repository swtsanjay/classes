import { useState } from "react";

function Test() {
    const [data, setData] = useState([
        { name: "ABC", age: 10 },
        { name: "xyz", age: 14 },
    ]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const changeData = () => {
        if (name && age) {
            const tempArr = [...data];
            tempArr.push({ name: name, age: age });
            setData(tempArr);
            setAge('');
            setName('');
        }
    }

    const removeEle = (index) => {
        const tempData = data.filter((v, i) => {
            return i !== index
        })
        setData(tempData);
    }

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleAge = (e) => {
        setAge(e.target.value)
    }

    return (
        <div>
            <input placeholder="name" value={name} onChange={handleName} />
            <input placeholder="age" value={age} onChange={handleAge} />
            <button onClick={changeData}>Add</button>
            <table >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((v, i) => {
                            return <tr key={i}>
                                <td>{v.name}</td>
                                <td>{v.age}</td>
                                <td>
                                    <button onClick={() => { removeEle(i) }}>X</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

        </div>
    );
}

// export default Test;
export { Test }; 