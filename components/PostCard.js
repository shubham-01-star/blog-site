import Link from "next/link";

export default function PostCard(props) {
    const { post } = props
    return (

        <div>
            <Link className="unstyled" href={`/pages/${post.slug}`}>
                <div className="postCard">
                    <h3>{post.title}</h3>
                    <p>{post.summary}</p>

                    <div>
                        <h5> Author: {post.author} </h5>

                    </div>

                    <div className="statsContainer">

                        <div>
                            <h5> Date: {post.date}</h5>
                        
                        </div>

                    </div>
                </div>
            </Link>
        </div>

    )
}