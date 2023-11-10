// Import necessary dependencies from React and external libraries.
import { useEffect, useState } from "react";
import axios from "axios";
import Books from "./books";  // Assuming you have a 'Books' component in the same directory.

// Define the 'Read' functional component.
function Read() {
    // State variable 'data' and its corresponding setter function 'setData'.
    const [data, setData] = useState([]);

    // useEffect hook to fetch data from the server when the component mounts.
    useEffect(() => {
        // Make a GET request to the server endpoint to fetch book data.
        axios.get('http://localhost:4000/api/books')
            .then((response) => {
                // Update the 'data' state with the fetched book data.
                setData(response.data.myBooks);
            })
            .catch((error) => {
                // Log any errors that occur during the data fetching process.
                console.log(error);
            });
    }, []); // Empty dependency array ensures the effect runs only once, equivalent to componentDidMount.

    // Render the component.
    return (
        <div>
            {/* Render a simple heading within the component. */}
            <h2>Hello from Read Component!</h2>
            
            {/* Render the 'Books' component and pass the fetched book data as a prop. */}
            <Books myBooks={data}></Books>
        </div>
    );
}

// Export the 'Read' component as the default export.
export default Read;
