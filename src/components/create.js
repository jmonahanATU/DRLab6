// Import necessary dependencies from React and external libraries.
import { useState } from "react";
import axios from "axios";

// Define the 'Create' functional component.
function Create() {
    // State variables and corresponding setter functions for form inputs.
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');

    // Handle form submission.
    const handleSubmit = (e) => {
        e.preventDefault();

        // Log form input values to the console.
        console.log("Title: " + title + " Cover: " + cover + " Author: " + author);

        // Create a 'book' object with form input values.
        const book = {
            title: title,
            cover: cover,
            author: author
        }

        // Make a POST request to the server to add the book.
        axios.post('http://localhost:4000/api/books', book)
            .then(() => {
                // Handle success (optional).
                console.log("Book added successfully!");
            })
            .catch((error) => {
                // Log any errors that occur during the POST request.
                console.error("Error adding book:", error);
            });
    }

    // Render the component.
    return (
        <div>
            {/* Render a simple heading within the component. */}
            <h2>Hello from Create Component!</h2>

            {/* Render a form for adding a new book. */}
            <form onSubmit={handleSubmit}>
                {/* Form input for book title. */}
                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                {/* Form input for book cover. */}
                <div className="form-group">
                    <label>Add Book Cover: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>
                {/* Form input for book author. */}
                <div className="form-group">
                    <label>Add Book Author: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>
                {/* Form submit button. */}
                <div>
                    <input type="submit" value="Add Book" />
                </div>
            </form>
        </div>
    );
}

// Export the 'Create' component as the default export.
export default Create;
