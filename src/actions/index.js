import hearthstone from '../api/hearthstone';
import axios from 'axios';
import {
  GET_ALL_CARDS,
  GET_CARDS,
  START_LOADING,
  STOP_LOADING,
} from '../constant';

export const getCardByTypes = async (filter) => {
  const response = await hearthstone.get(`/cards/types/${filter}`);
  return response.data;
};

export const getCards = (filter = 'Hero') => async (dispatch) => {
  dispatch({ type: START_LOADING });

  const data = await getCardByTypes(filter);

  dispatch({ type: GET_CARDS, payload: data });
  dispatch({ type: STOP_LOADING });
};

export const getAllCards = () => async (dispatch) => {
  dispatch({ type: START_LOADING });

  const response = await axios.all([
    getCardByTypes('Hero'),
    getCardByTypes('Minion'),
    getCardByTypes('Spell'),
    getCardByTypes('Enchantment'),
    getCardByTypes('Weapon'),
    getCardByTypes('Hero Power'),
  ]);

  const data = response.flat();

  dispatch({ type: GET_ALL_CARDS, payload: data });
  dispatch({ type: STOP_LOADING });
};
