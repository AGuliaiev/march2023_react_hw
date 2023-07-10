import {useState} from "react";
import Users from "./components/Users/Users";
import UserPosts from "./components/Users/Posts/Posts";


const App = () => {
    const [userId, setUserId] = useState(null);
    return (
        <div>
          <Users setUserId={setUserId}/>
            {userId && <UserPosts userId={userId}/>}
        </div>
    );
};

export default App;