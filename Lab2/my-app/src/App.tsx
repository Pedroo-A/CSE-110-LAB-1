import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Label, Note } from "./types"; 
import { dummyNotesList } from "./constants";

function App() {
  return (
  	<div className='app-container'>
    <div className="notes-grid">
	{dummyNotesList.map((note) => (
		<div
			key={note.id}
			className="note-item">
			<div className="notes-header">
				<button>x</button>
			</div>
			<h2> {note.title} </h2>
			<p> {note.content} </p>
			<p> {note.label} </p>
      </div>
	))}
	</div>
    </div>
  );
}

export default App;
