import React from 'react'
import Post from './Post'

function PostList() {

    const post = [
        {
            id: 1,
            title: "Title",
            count: 2,
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quaerat autem eos fuga voluptas deserunt laudantium! Similique delectus consequuntur, magni perferendis quam assumenda recusandae, facilis aliquid, eius provident eveniet architecto!"
        },
        {
            id: 2,
            title: "Title",
            count: 0,
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quaerat autem eos fuga voluptas deserunt laudantium! Similique delectus consequuntur, magni perferendis quam assumenda recusandae, facilis aliquid, eius provident eveniet architecto!"
        },
        {
            id: 3,
            title: "Title",
            count: 0,
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quaerat autem eos fuga voluptas deserunt laudantium! Similique delectus consequuntur, magni perferendis quam assumenda recusandae, facilis aliquid, eius provident eveniet architecto!"
        },
        {
            id: 4,
            title: "Title",
            count: 2,
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quaerat autem eos fuga voluptas deserunt laudantium! Similique delectus consequuntur, magni perferendis quam assumenda recusandae, facilis aliquid, eius provident eveniet architecto!"
        },
        {
            id: 5,
            title: "Title",
            count: 0,
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quaerat autem eos fuga voluptas deserunt laudantium! Similique delectus consequuntur, magni perferendis quam assumenda recusandae, facilis aliquid, eius provident eveniet architecto!"
        },
        {
            id: 6,
            title: "Title",
            count: 0,
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quaerat autem eos fuga voluptas deserunt laudantium! Similique delectus consequuntur, magni perferendis quam assumenda recusandae, facilis aliquid, eius provident eveniet architecto!"
        },
        {
            id: 7,
            title: "Title",
            count: 0,
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quaerat autem eos fuga voluptas deserunt laudantium! Similique delectus consequuntur, magni perferendis quam assumenda recusandae, facilis aliquid, eius provident eveniet architecto!"
        },
        {
            id: 8,
            title: "Title",
            count: 0,
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quaerat autem eos fuga voluptas deserunt laudantium! Similique delectus consequuntur, magni perferendis quam assumenda recusandae, facilis aliquid, eius provident eveniet architecto!"
        },
        {
            id: 9,
            title: "Title",
            count: 0,
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quaerat autem eos fuga voluptas deserunt laudantium! Similique delectus consequuntur, magni perferendis quam assumenda recusandae, facilis aliquid, eius provident eveniet architecto!"
        },
        {
            id: 10,
            title: "Title",
            count: 10,
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quaerat autem eos fuga voluptas deserunt laudantium! Similique delectus consequuntur, magni perferendis quam assumenda recusandae, facilis aliquid, eius provident eveniet architecto!"
        },
        {
            id: 11,
            title: "Title",
            count: 0,
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quaerat autem eos fuga voluptas deserunt laudantium! Similique delectus consequuntur, magni perferendis quam assumenda recusandae, facilis aliquid, eius provident eveniet architecto!"
        },
        {
            id: 12,
            title: "Title",
            count: 0,
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quaerat autem eos fuga voluptas deserunt laudantium! Similique delectus consequuntur, magni perferendis quam assumenda recusandae, facilis aliquid, eius provident eveniet architecto!"
        },
        {
            id: 13,
            title: "Title",
            count: 0,
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quaerat autem eos fuga voluptas deserunt laudantium! Similique delectus consequuntur, magni perferendis quam assumenda recusandae, facilis aliquid, eius provident eveniet architecto!"
        },
        {
            id: 14,
            title: "Title",
            count: 0,
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quaerat autem eos fuga voluptas deserunt laudantium! Similique delectus consequuntur, magni perferendis quam assumenda recusandae, facilis aliquid, eius provident eveniet architecto!"
        },
        {
            id: 15,
            title: "Title",
            count: 0,
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quaerat autem eos fuga voluptas deserunt laudantium! Similique delectus consequuntur, magni perferendis quam assumenda recusandae, facilis aliquid, eius provident eveniet architecto!"
        }
    ]

    return (
        <main className="blog-content layout">
            {post.map(post => <Post key={post.id} {...post}/>)}
        </main>
    )
}

export default PostList