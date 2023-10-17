import React from 'react'
import styles from './burger-components.module.css'
import RenderList from '../../../../components/RenderList/render-list'
import ConstructorElement from '../ConstructorElement/constructor-element'
import bunImage from '../../../../assets/bun-02.svg'

const BurgerComponents = ({ cards }) => {
  const bun = React.useMemo(() => cards.find(card => (card === 'card1') || (card === 'card2')), [cards]);
  const array = React.useMemo(() => cards.filter(card => (card !== 'card1') && (card !== 'card2')), [cards]);

  React.useEffect(() => {
    console.log('bun');
  }, [bun]);

  const deleteElmentHandler = () => {
    console.log('Delete');
  };

  if (!bun) return;

  return (
    <section className={styles.container}>
      <ConstructorElement
        type='top'
        thumbnail={bunImage}
        name={bun}
        price='100'
        isLocked='true'
      />
      {!!array.length &&
        <RenderList
          list={array}
          extraStyle={styles.cards}
          callback={card =>
            // className={styles.card}
            <ConstructorElement
              name={card}
              price='1000'
              onClick={deleteElmentHandler}
            />
          }
        />
      }
      <ConstructorElement
        type='bottom'
        thumbnail={bunImage}
        name={bun}
        price='100'
        isLocked='true'
      />
    </section>
  );
}

export default BurgerComponents;