import Counter_Hoc from '../../Counter_Hoc';

const A = ({ cnt,plus }) => {
    return (
        <div align="center">
            <h1>A Counter</h1>
            <h2>Count: {cnt}</h2>
            <button onClick={()=>plus()}>+</button>
        </div >
    );
};

let Acomponent = Counter_Hoc(A);

export default Acomponent;
