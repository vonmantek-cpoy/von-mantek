export default function Product({ params }) {
  return (
    <div>
      <h1>Product: {params.id}</h1>
      <p>Details about the product.</p>
    </div>
  );
}
