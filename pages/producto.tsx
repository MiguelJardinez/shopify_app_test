import {Heading, Button} from '@shopify/polaris';
import Link from 'next/link';
import Principal from '../layouts/Principal';
import CardCheck from '../components/CardCheck';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import {useQuery} from '@shopify/react-graphql';

//Querys de graphql
const GET_DRAFT_ORDERS = gql`
  query getOrders {
    draftOrders(first: 10) {
      edges{
        node {
          id 
          name
        }
      }
    }
  }
`;

const producto = () => {
  const {data, loading, error} = useQuery(GET_DRAFT_ORDERS);
  console.log(data);
  // if (data === undefined) return null;
  return (
    <>
    <Principal>
      {loading && <p>Cargando</p>}
      {data?.draftOrders?.edges.map((order) => <CardCheck order={order} /> )}
    </Principal>
    </>
  )
}

export default producto
