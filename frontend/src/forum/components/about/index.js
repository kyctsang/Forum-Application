import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function About(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: 'MEANINGLESS' })
    })
    return (
        <div className="container pt-4" style={{'padding-bottom': '150px'}}>
            <div className="container w-75">
                <h1>About</h1>
                <p>This forum is created using the following techniques:</p>
                <ol>
                    <li className="mb-2">Front end
                        <ul>
                            <li>ReactJS</li>
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Redux</li>
                            <li>Reudx-Saga</li>
                            <li>BootStrap</li>
                        </ul>
                    </li >
                    <li ckassName="mb-2">Back end
                        <ul>
                            <li>Kotlin</li>
                            <li>Spring Boot</li>
                            <li>JPA</li>
                            <li>Flyway</li>
                            <li>MySQL</li>
                        </ul>
                    </li>
                </ol>
                <p>The UI is made with ReactJS and styled with CSS and BootStrap, props across multiple components is linked by Redux and Redux-Saga.</p>
                <p>The backend is made with Kotlin Spring Boot, JPA served as the bridge between Spring Boot and MySQL database. Data generated by "Create topic" or "Add comments" will be inserted to the database to their corresponding table.</p>
                <p>Flyway is used for database migration, table and data will be inserted to database "Forum" by default.</p>
           </div>
        </div>
    )
}