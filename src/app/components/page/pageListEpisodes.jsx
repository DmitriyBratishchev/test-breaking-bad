import React, { useState } from 'react';
import neededData from '../../utils/neededData';
import { sortOnCountPerson } from '../../utils/sortOnCountPerson';
import ListEpisodes from '../common/listEpisode/listEpisodes';
import Button from '../ui/Button';

const PageListEpisodes = () => {
  const [list, setList] = useState([]);
  const [sortOrder, setSortOrder] = useState('')
  const [isLoading, setLoading] = useState(false);

  const getListEpisodes = async () => {
    try {
      setLoading(true)
      const data = await fetch('https://breakingbadapi.com/api/episodes')
      const list = await data.json()
      console.log('res list', list);
      setList(neededData(list))
      setLoading(false)
    } catch (error) {
      console.log('error', error);
      setLoading(false)
    }
  }

  const sortAscCountPerson = () => {
    setSortOrder('asc')
  }
  const sortDescCountPerson = () => {
    setSortOrder('desc')
  }
  const removeSortCountPerson = () => {
    setSortOrder('')
  }

  const decrementPerson = (id) => {
    setList(prev => prev.map(el => el._id === id ? { ...el, countPerson: el.countPerson - 1 } : el))
  }
  const incrementPerson = (id) => {
    setList(prev => prev.map(el => el._id === id ? { ...el, countPerson: el.countPerson + 1 } : el))
  }

  const removeCard = (id) => {
    setList(prev => prev.filter(el => el._id !== id))
  }

  const listAfterSort = sortOnCountPerson(list, sortOrder)

  return (
    <>
      { list.length === 0
        ? <>
          <Button
            text='load'
            disabled={ isLoading }
            onClick={ getListEpisodes }
          />
          { isLoading && <span className='ms-3 fs-5'>Loading ...</span> }
        </>
        : <ListEpisodes
          list={ listAfterSort }
          decrementPerson={ decrementPerson }
          incrementPerson={ incrementPerson }
          sortAscCountPerson={ sortAscCountPerson }
          sortDescCountPerson={ sortDescCountPerson }
          removeSortCountPerson={ removeSortCountPerson }
          removeCard={ removeCard }
        />
      }


    </>
  );
}

export default PageListEpisodes;
