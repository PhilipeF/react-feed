import { Header } from "./components/Header";
import { Post } from "./Post";
import styles from "./App.module.css";

import './global.css';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
            sidebar
        </aside>
        <main>
          <Post
            author='Philipe'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit'
          />
          <Post
            author='Gabriel'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit'
          />
        </main>

      </div>
    </div>
  )
}

export default App