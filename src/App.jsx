import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

const extendedPosts = postsFromServer.map((post) => {
  const user = usersFromServer.find(u => u.id === post.userId);
  const comments = commentsFromServer
    .filter(comment => comment.postId === post.id);

  return {
    ...post,
    user,
    comments,
  };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList
      postsList={extendedPosts}
    />
  </section>
);
