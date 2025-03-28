export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  return <div className="text-3xl">Usr details {id}</div>;
}
