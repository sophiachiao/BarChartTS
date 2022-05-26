import React, { useState, useEffect, useRef } from "react"
import * as d3 from "d3"
import { getTimelineData, getScatterData, getCoffeeData } from "../Data"
import ScatterPlot_Coffee from '../ScatterPlot/ScatterPlot_Coffee.jsx'

// import Timeline from "./completed/Timeline"
import ScatterPlot from "../ScatterPlot/ScatterPlot"
// import Histogram from "./completed/Histogram"

// import "./styles.css"

const parseDate = d3.timeParse("%m/%d/%Y")
const dateAccessor = d => parseDate(d.date)
const temperatureAccessor = d => d.temperature
const humidityAccessor = d => d.humidity

const productAccessor = d => d.product
const salesAccessor = d => d.sales

const getData = () => ({
  timeline: getTimelineData(),
  scatter: getScatterData(),
  coffee: getCoffeeData(),
})

const App = () => {
  // const [data, setData] = useState([])
  const [data, setData] = useState(getData())

  useInterval(() => {
    setData(getData())
    // setData(coffeeData)
  }, 4000)

  console.log(data.scatter)
  console.log(data.coffee)

  return (
    <div className="App">
      <h1>
        Here's my graph lmao
      </h1>
      <div className="App__charts">
        {/* <Timeline
          data={data.timeline}
          xAccessor={dateAccessor}
          yAccessor={temperatureAccessor}
          label="Temperature"
        /> */}
        {/* <ScatterPlot
          data={data.scatter}
          xAccessor={humidityAccessor}
          yAccessor={temperatureAccessor}
          xLabel="Humidity"
          yLabel="Temperature"
        /> */}
        <ScatterPlot_coffee
          data={data.coffee}
          xAccessor={productAccessor}
          yAccessor={salesAccessor}
          xLabel="Product"
          yLabel="Sales"
        />
        {/* <Histogram
          data={data.scatter}
          xAccessor={humidityAccessor}
          label="Humidity"
        /> */}
      </div>
    </div>
  )
}

export default App


function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  });

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}