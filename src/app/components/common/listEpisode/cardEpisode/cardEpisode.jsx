import React from 'react';
import { getPersonWord } from '../../../../utils/getPersonWord';
import Button from '../../../ui/Button';
import TextCenter from '../../../ui/TextCenter';
import style from './cardEpisode.module.css'

const CardEpisode = ({ item, decrementPerson, incrementPerson, removeCard }) => {
  const { countPerson, _id, episode, season } = item
  const MemoButton = React.memo(Button);

  return (
    <div className='p-2 border-bottom border-dark'>
      <TextCenter className={ style.cardTitle }>
        Эпизод { episode } сезон: { season }
      </TextCenter>
      <div className='d-flex justify-content-between bg-gray-500 p-2'>
        <div className={ 'btn-group ' + style.countBlock }>
          <MemoButton
            text={ '-' }
            onClick={ () => decrementPerson(_id) }
            disabled={ countPerson === 0 }
          />
          <TextCenter>
            { countPerson }
          </TextCenter>
          <MemoButton
            text={ '+' }
            onClick={ () => incrementPerson(_id) }
            className='rounded-end'
          />
          <TextCenter className='mx-2'>
            { getPersonWord(countPerson) }
          </TextCenter>
        </div>
        <MemoButton
          text='Удалить'
          color={ 'danger' }
          onClick={ () => removeCard(_id) }
        />
      </div>
    </div>
  );
}

export default CardEpisode;