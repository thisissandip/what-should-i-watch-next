import React from 'react';

function MainMovie({ alldetails }) {
	return (
		<>
			<div>Name: {alldetails.original_name || alldetails.original_title}</div>
			<div>ID: {alldetails.id}</div>
		</>
	);
}

export default MainMovie;
