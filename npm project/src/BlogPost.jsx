function BlogPost(post) {
    return (
        <div>
            <p>Author:{post.author}</p>
            <p>Title:{post.title}</p>
            <p>Description:{post.description}</p>
        </div>
    )
}
export default BlogPost