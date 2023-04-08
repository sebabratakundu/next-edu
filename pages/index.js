import { Inter } from 'next/font/google'
import BaseLayout from "@/components/BaseLayout";
import useSWR from 'swr';
import {Card, CardContent, Stack} from "@mui/material";

const inter = Inter({ subsets: ['latin'] })

async function fetcher(...arg) {
  try {
    return await (await fetch(...arg)).json();
  } catch (e) {
    throw e;
  }
}

function ProductCard(props) {
  const {product} = props;

  return (
    <Card sx={{width: 200, height: 250}}>
      <CardContent>
        <img src={product.image} alt={product.title} width="100"/>
        <h4>{product.title}</h4>
        <p>{product.price}</p>
      </CardContent>
    </Card>
  )
}

export default function Home({post}) {
  const {data, isLoading, error} = useSWR('https://fakestoreapi.com/products', fetcher)

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h2>Error: {error}</h2>
  }

  return (
    <>
      <BaseLayout title="Home Page">
        <h2>Products</h2>
        <Stack direction="row" justifyContent="space-between" flexWrap="wrap" spacing={10}>
          {
            data.map(product => <ProductCard key={product.id} product={product}/>)
          }
        </Stack>
      </BaseLayout>
    </>
  );
}

export async function getStaticProps() {
  const res = await (await fetch('http://localhost:3434/course-name')).json()

  return {
    props: {
      post: res
    },
    revalidate: 3600 //incremental static regeneration
  }
}