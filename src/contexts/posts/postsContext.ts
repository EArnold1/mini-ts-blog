import { createContext } from 'react';

// Since we don't know the kind of values that will be passed in,
// We pass in an empty object as an argument
const PostsContext = createContext({});

export default PostsContext;
