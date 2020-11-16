import React from "react"

function Search(props){
    return(
        <section className="searchbox-big">
            <input type="text" placeholder="Enter movie name" className="searchbox" onChange={props.handleInput} onKeyPress={props.search} />

        </section>
    )
}
export default Search