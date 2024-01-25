import React from "react";
import Book from "./book";

function Library(props){
    return (
        <div>
            <Book name="신데렐라" num0fPage={300} />
            <Book name="어린왕자" num0fPage={440} />
            <Book name="백설공주" num0fPage={260} />
        </div>
    );
}

export default Library;