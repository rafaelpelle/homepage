interface PageProps {
  params: {
    id: string;
  };
}

export default function ExamplePage({ params }: PageProps) {
  return <div>Example ID: {params.id}</div>;
}
