import A from "./A"

const data={
    theme:"dark",
    bgColor:"#000000",
    textColor:"#ffffff"
}

const PropDrilling = () => {
  return (
    <div>

    <h1>PropDrilling</h1>
    <A theme={data}/>

    </div>
  )
}

export default PropDrilling