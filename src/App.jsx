import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/natamartins.png",
      name: "Philipe Ferreira",
      role: "Dev Front End"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 ' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publisheAt: new Date('Wed Dec 06 2023 11:35:48'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/philipeF.png",
      name: "Philipe Ferreira",
      role: "Dev Full Stack"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 ' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publisheAt: new Date('Wed Dec 06 2023 11:35:48'),
  },
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publisheAt={post.publisheAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App