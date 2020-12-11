import React from 'react'

function Search ({ handleInput, search }) {
	return (
		<section className="searchbox-wrap"> 
            <h1>Search</h1>
			<input 
				type="text" 
				placeholder="  " 
				className="searchbox" 
				onChange={handleInput}
				onKeyPress={search}
			/>
		</section>
	)
}

export default Search
