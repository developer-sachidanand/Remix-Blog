import { Link, redirect } from 'remix';
import { db } from '~/utils/db.server'

export const action = async ({ request}) => {
    const form = await request.formData();
    const title = form.get('title');
    const body = form.get('body');
    const fields = { title, body };
    console.log(fields, 'this is the field')
    const post = await db.post.create({data: fields})

    return redirect(`/posts/${post.id}`)
}
function NewPosts() {
    return (
        <>
        <div className='page-header'>
            <h3>New Posts</h3>
            <Link to="/posts" className='btn btn-reverse'>
                Back
            </Link>
        </div>
        <div className="page-content">
            <form method='POST'>
                <div className="form-control">
                    <label htmlFor="title">Title</label>
                    <input type="text" name='title' id='title' />
                </div>
                <div className="form-control">
                    <label htmlFor="body">Post Body</label>
                    <textarea name='body' id='body' />
                </div>
                <button type="submit" className="btn btn-block">Post</button>
            </form>
        </div>
        </>
    )
}

export default NewPosts
