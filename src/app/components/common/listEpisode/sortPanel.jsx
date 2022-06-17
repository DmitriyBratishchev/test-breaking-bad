import React from 'react';
import Button from '../../ui/Button';

const SortPanel = ({ sortAscCountPerson, sortDescCountPerson, removeSortCountPerson }) => {
  return (
    <>
      <Button
        text={ 'Сортировать по убыванию количества персонажей' }
        color={ 'warning' }
        className={ 'd-block m-2' }
        onClick={ sortAscCountPerson }
      />
      <Button
        text={ 'Сортировать по возрастанию количества персонажей' }
        color={ 'warning' }
        className={ 'd-block m-2' }
        onClick={ sortDescCountPerson }
      />
      <Button
        text={ 'Сбросить сортировку' }
        color={ 'info' }
        className={ 'd-block m-2' }
        onClick={ removeSortCountPerson }
      />
    </>
  );
}

export default SortPanel;