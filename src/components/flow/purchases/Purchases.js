import { MainTable } from '../../ui/MainTable';
import { Purchase } from './Purchase';
import { NoDataInCard } from '../../ui/NoDataInCard';

export function Purchases({ purchases }) {

  if(!purchases) //null the user not click on Search button yet.
    return  <NoDataInCard title={'fill the filed and then click on Search button.'} />

  if (purchases.length <= 0)
    return <NoDataInCard title={'There are no results.'} />;

  return (
    <MainTable head={{ col0: 'product', col1: 'customer', col2: 'date' }}>
      {purchases.map((purchase) => <Purchase key={purchase.id} purchase={purchase} />)}
    </MainTable>
  );
}
