import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Folders = () => {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "https://myxfwc9qnl.execute-api.ap-south-1.amazonaws.com/dev/list-folders",
          {
            headers: {
              Authorization: `${token}`, // Set token in headers
            },
          }
        );

        setFolders(response.data.data); // Assuming the API returns an array of folders
      } catch (error) {
        console.error("Error fetching folders:", error);
      }
    };

    fetchFolders();
  }, []);

  return (
    <div className="folder-container">
      
      <ul className="folder-list">
  <div className="row m-5 p-2">
    {folders.map((folder) => (
      <li key={folder.name} className="col-6 col-lg-3 m-auto">
        <Link
          to={`/folder/${folder.location}`}
          className="folder-item"
          style={{
            backgroundImage: `url(${folder.thumbURL})`,
          }}
          onClick={() => {
            localStorage.setItem("location", folder.location);
          }}
        >
          <span className="folder-name">{folder.name}</span>
        </Link>
        <h2>{folder.name}</h2>
      </li>
    ))}
  </div>
</ul>




    </div>
  );
};

export default Folders;
