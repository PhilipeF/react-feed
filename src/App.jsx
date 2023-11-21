import { Header } from "./components/Header"
import { Post } from "./Post"

import './global.css';

function App() {
  return (
    <div>
      <Header />
      <Post
        author='Philipe'
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit'
      />
    </div>
  )
}

export default App