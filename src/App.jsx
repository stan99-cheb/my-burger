import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import ConstructorPage from "./pages/ConstructorPage/constructor-page"
import { getIngredients } from './features/ingredients/ingredients-thunk'
import { selectors } from './store/selectors'

const App = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectors.ingredients.status);

  React.useEffect(
    () => {
      dispatch(getIngredients());
    },
    [dispatch]
  );

  if (status === 'loading') return console.log('Loading...');

  return (
    <ConstructorPage />
  )
}

export default App
