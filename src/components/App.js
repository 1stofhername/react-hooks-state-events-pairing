import video from "../data/video.js";
import Video from "./Video.js";
import Header from "./Header.js";
import Comments from "./Comments.js";


function App() {
  console.log("Here's your data:", video);

  return (
    <div>
   <Video />
   <Header video={video} />
   <Comments comments={video.comments} />
   </div>
  );
}

export default App;
