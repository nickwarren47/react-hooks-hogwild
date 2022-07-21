

function Details({props}){
    return(
        <div className="details">
            <div>{props.specialty}</div>
            <div>{props.greased}</div>
            <div>{props.weight}</div>
            <div>{props["highest medal achieved"]}</div>
        </div>
    )
}

export default Details;