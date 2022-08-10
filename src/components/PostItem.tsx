import { FC, MouseEvent } from "react";
import { Ipost } from "../models/IPost";

interface PostItemProps {
  post: Ipost,
  remove: (post: Ipost) => void;
  update: (post: Ipost) => void;
}

const PostItem: FC<PostItemProps> = ({post, remove, update}) => {

  const handleRemovePost = (evt: MouseEvent) => {
    evt.stopPropagation();
    remove(post);
  };

  const handleUpdatePost = (evt: MouseEvent) => {
    const title = prompt() ?? 'Throw empty title';
    update({...post, title});
  };
  
  return (
    <div className="post" onClick={handleUpdatePost}>
      {post.id}. {post.title}
      <button onClick={handleRemovePost}>Delete </button>
    </div>
  );
};

export default PostItem;