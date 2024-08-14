import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { API } from 'services/API';
import { Container, LoadMoreButton, PostRow, PostCol } from './PostsListStyled';

import SearchBar from 'components/SearchBar/SearchBar';
import PostCard from 'components/PostCard/PostCard';
import NoPostsFound from 'components/NoPostsFound/NoPostsFound';

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [startedPosts, setStartedPosts] = useState(20);

  const [searchParam, setSearchParam] = useSearchParams();

  const query = searchParam.get('search') || '';

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const result = await API();
        setPosts(result);
      } catch (error) {
        console.error(error);
      }
    };

    loadPosts();
  }, []);

  useEffect(() => {
    setFilteredPosts(
      posts.filter(el => el.title.toLowerCase().includes(query.toLowerCase()))
    );
  }, [searchParam, posts, query]);

  const loadMorePosts = () => {
    setStartedPosts(prevState => prevState + 20);
  };

  const postsToDisplay = filteredPosts.length > 0 ? filteredPosts : posts;
  const showLoadMore = startedPosts < postsToDisplay.length;

  return (
    <Container>
      <SearchBar setSearchParam={setSearchParam} query={query} />
      <PostRow xs={1} md={3} className="g-3">
        {query && filteredPosts.length === 0 ? (
          <PostCol>
            <NoPostsFound query={query} />
          </PostCol>
        ) : (
          postsToDisplay.slice(0, startedPosts).map((el, index) => (
            <PostCol key={index}>
              <PostCard el={el} />
            </PostCol>
          ))
        )}
      </PostRow>
      {showLoadMore && (
        <LoadMoreButton onClick={loadMorePosts}>Load more</LoadMoreButton>
      )}
    </Container>
  );
};

export default PostsList;
