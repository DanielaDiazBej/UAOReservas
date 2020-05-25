import React, {useState} from 'react';

 import './Table.css' 

const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado'
] 
const hours = [
    '8:00 AM a 10 AM',
    '10:00 AM a 12 M',
    '12:00 M a 2 PM',
    ' 2:00 PM a 4 PM',
    '4:00 PM a 6 PM',
    '6:00 PM a 8 PM',
]

const Table = ({room}) => {
    const [currentSelection, setCurrentSelection] = useState([])

    const handleSelection = (coors) => () => {
        if (currentSelection.includes(coors)) {
            setCurrentSelection(currentSelection.filter((selection) => coors !== selection))
            return
        }
        setCurrentSelection([
            ...currentSelection,
            coors
        ])
    }

    return (
        <div className="container pb-5">
            <h1> "Espacio" {room}</h1>
            <div className="container pb-2">
                <table className="table text-center align-middle">
                <thead class="bg-danger">
                    <tr className="o-header" >
                        <th>Horas</th>
                        {
                        days.map(day => (
                            <td 
                                key={day}>
                                <span>{day}</span>
                            </td>
                        ))
                    } </tr> </thead>
                    {
                    hours.map((hour, columnIndex) => (
                        <tr className="o-header" >
                            <th className="bg-danger  align-middle">
                                <span>{hour}</span>
                            </th>
                            {
                            days.map((day, index) => (
                                <td 
                                className="align-middle"
                                key={
                                    `btn${index}${day}`
                                }>
                                    <p> {
                                        currentSelection.includes(`${index}-${columnIndex}`) ? (
                                            <span className="btn btn-danger"
                                                onClick={
                                                    handleSelection(`${index}-${columnIndex}`)
                                            }>Reservado</span>
                                        ) : (
                                            <>
                                                <button type="button" className="btn btn-outline-danger"  onClick={ handleSelection(`${index}-${columnIndex}`)
                                                }>
                                                    Reservar
                                                </button>
                                            </>
                                        )
                                    } </p>
                                </td>
                            ))
                        } </tr>
                    ))
                } </table>

            </div>
            <div className="d-flex justify-content-around   ">
                <div>
                <button type="button" class="btn btn-secondary"></button> Reservados
                </div>
                <div>
                <button type="button" class="btn btn-outline-danger"></button> Libres
                </div>
                <div>
                <button type="button" class="btn btn-danger"></button> Seleccionados
                </div>
            </div>
        </div>
        
    )
}
export default Table;