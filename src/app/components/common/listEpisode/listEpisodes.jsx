import React from 'react';
import CardEpisode from './cardEpisode/cardEpisode';
import SortPanel from './sortPanel';

const ListEpisodes = ({ list, ...rest }) => {

  const MemoCardEpisode = React.memo(CardEpisode)

  return (
    <div>
      <SortPanel { ...rest } />
      { list.map(item => <MemoCardEpisode key={ item._id } item={ item } { ...rest } />) }
    </div>
  );
}

export default ListEpisodes;
