import "./ProductCard.css"
import BlogPost from "./BlogPost.jsx"
import Idcard from "./Idcard.jsx"
import ProductCard from "./ProductCard.jsx"
function App() {
  const posts = [
    { id:1,author: "pavan", title: "return of dragon", description: "how dragon fly" },
    { id:2,author: "sai", title: "going to hell", description: "why you want to go hell" },
    { id:3,author: "pavansai", title: "going to heaven", description: "why should you want to go heaven" }
  ]

  return (
    <div className="container">
      {
        posts.map((post) => (
          <BlogPost
            key={post.id}
            author={post.author}
            title={post.title}
            description={post.description}
          />
        ))
      }
    </div>
  )
}

export default App
