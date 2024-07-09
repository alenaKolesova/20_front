import { useEffect } from "react";
import { useState } from "react";
import './App.css'

function App() {

    const [serial, setSerial] = useState({})

    useEffect(() => {
        loadSerial()
    }, [])

    async function loadSerial() {
        let res = await fetch('http://localhost:2000/api/serial')
        let resJson = await res.json()
        setSerial(resJson);
    }

    async function onChange(e) {
        let newSerial = { ...serial }
        newSerial[e.target.name] = e.target.value
        setSerial(newSerial)
    }

    return (
        <div className="max-width-500 flex-direction-column">
            {/* HEADER */}
            <div>
                <input name="name" className="font-size-x-large text-align-center width-100pct"
                    value={serial.name}
                    onChange={(e) => {
                        onChange(e)
                    }} />
            </div>

            {/* IMAGE */}
            <div className="flex-direction-column">
                <img className="width-100pct" src={serial.poster} />
                <input name="poster" className="text-align-center width-100pct"
                    value={serial.poster}
                    onChange={(e) => {
                        onChange(e)
                    }} />
            </div>

            {/* ACTORS */}
            <div className="flex-direction-column">{
                serial.actors.map((actor, index) => {
                    return (<div>{actor}</div>)
                }
                )}
            </div>

            {/* DESCRIPTION */}
            <div className="flex-direction-column">
                {serial.description}
                <input name="description" className="text-align-center width-100pct"
                    value={serial.description}
                    onChange={(e) => {
                        onChange(e)
                    }} />
            </div>

        </div>
    );
}

export default App;