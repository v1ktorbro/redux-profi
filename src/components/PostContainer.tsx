import { Ipost } from "../models/IPost";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer = () => {
  const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(155);

  const [createPost] = postAPI.useCreatePostMutation();
  const [removePost] = postAPI.useRemovePostMutation();
  const [updatePost] = postAPI.useUpdatePostMutation();

  const handleCreatePost = async () => {
    const title = prompt();
    await createPost({title, body: title} as Ipost);
  };

  const handleRemovePost = (post: Ipost) => {
    removePost(post);
  };

  const handleUpdatePost = (post: Ipost) => {
    updatePost(post);
  };

  return (
    <div>
      <div className='post__list'>
        <>
          <button style={{fontSize: '16px', margin: '20px', backgroundColor: '#909090'}} onClick={handleCreatePost}>Add new post</button>
          {isLoading && <h1>Идёт загрузка...</h1>}
          {error && <h1>Произошла ошибка при загрузке</h1>}
          {posts?.map((post) => 
            <PostItem remove={handleRemovePost} update={handleUpdatePost} key={post.id} post={post} />
          )}
        </>
      </div>
    </div>
  );
};

export default PostContainer;