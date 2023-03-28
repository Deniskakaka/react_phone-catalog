import { useContext, useEffect } from 'react';
import './header.scss';
import { Navigation } from '../navigation/Navigation';
import { GlobalContext } from '../../reducer';
import { requestListProducts } from '../../helpers/api';

export const Header = () => {
  const [state, dispatch] = useContext(GlobalContext);

  useEffect(() => {
    dispatch({ type: 'load', active: true });
    (async () => {
      const result = await requestListProducts();

      dispatch({ type: 'addCatalog', list: result });
      dispatch({ type: 'load', active: false });
    })();
  }, []);

  return (
    <header className="header">
      <div className="logo" />
      <Navigation
        favorite={state.favoriteProducts.length}
        shoping={state.basketList.length}
      />
    </header>
  );
};
