import type { CSSProperties } from "react";

const firstName = 'Felipe';
const lastName = 'Duque';
const favoriteGame = ['elden ring', 'smash', 'metal']
const dateOrder = {
    coso: firstName,
    coso2: lastName,
    coso3: favoriteGame,
}
const isActive = true;
export const MyAwesomeApp = () => {
    const myStyles : CSSProperties =
    {
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 10,
        marginTop:30,

    };


    return (
        <>
            <h1>{firstName}</h1>
            <h2>{lastName}</h2>
            <p>{favoriteGame.join(', ')}</p>
            <h1>{isActive ? 'Activo' : 'No Activo'}</h1>
            <p style={myStyles} >


                {JSON.stringify(dateOrder)}
            </p>

        </>
    )
}