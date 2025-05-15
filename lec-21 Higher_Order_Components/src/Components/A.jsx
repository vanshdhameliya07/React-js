import Counter_Hoc from '../../Counter_Hoc';

const A = ({ cnt, plus, user, all }) => {

    console.log(all);





    return (
        <div align="center">
            <h1>A Counter</h1>
            <h2>Count: {cnt}</h2>
            <button onClick={() => plus()}>+</button>
            <button onClick={() => user()}>user</button>
            {
                all.map((val, i) => {
                    let { name, phone } = val
                    return (
                        <div key={i}>
                            <p>{name}</p>
                            <p>{phone}</p>
                        </div>
                    )
                })
            }

        </div >
    );
};

let Acomponent = Counter_Hoc(A);

export default Acomponent;
