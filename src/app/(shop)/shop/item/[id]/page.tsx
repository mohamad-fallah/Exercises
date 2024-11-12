interface ItemProps {
    params: {
      id: string;
    };
  }
  
  export default function ItemPage({ params }: ItemProps) {
    const { id } = params;
    return <h1>Item ID: {id}</h1>;
  }
  