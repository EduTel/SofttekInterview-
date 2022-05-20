import { useEffect, useState } from "react";
import "./styles.css";

const CharsTable = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Character</th>
          <th>Image</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Rick</td>
          <td>
            <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
          </td>
          <td>Earth (Replacement Dimension)</td>
        </tr>
      </tbody>
    </table>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello Softtek</h1>
      <CharsTable />
    </div>
  );
}

// * You should be able to integrate the RickAndMorty API and retrieve the chars that
//    i will ask you
// * You should be able to integrate the result either in
//    the "useChars" custom hook or hardcoded in the App component
// * You should be able to render the characters info in the table dinamically
// * You should be able to center the table

// BONUS POINTS:
// Complete the useChars hook
// Map only the required info for the Chars table (do not pass unnecessary data)
// Extract the table data rows to their own component
