import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid';
import './table.css'

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

const Checkbox = ({room}) => {
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
        <div className="o-tables">
            <h1>Salón {room}</h1>
            <div className="o-container-table">
                <table className="o-table">
                    <tr>
                        <th>.</th>
                        {
                        days.map(day => (
                            <td className="o-days"
                                key={day}>
                                <span>{day}</span>
                            </td>
                        ))
                    } </tr>
                    {
                    hours.map((hour, columnIndex) => (
                        <tr>
                            <th>
                                <span>{hour}</span>
                            </th>
                            {
                            days.map((day, index) => (
                                <td key={
                                    `btn${index}${day}`
                                }>
                                    <p> {
                                        currentSelection.includes(`${index}-${columnIndex}`) ? (
                                            <span className="o-reservado"
                                                onClick={
                                                    handleSelection(`${index}-${columnIndex}`)
                                            }>Reservado</span>
                                        ) : (
                                            <>
                                                <button type="button"  onClick={ handleSelection(`${index}-${columnIndex}`)
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
        </div>
    )
}

export default Checkbox
