type Props = {
  title: string;
  status: string;
  description: string;
};

export default function FocusAreaCard({ title, status, description }: Props) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">{status}</p>
      <p className="text-gray-700 mt-3">{description}</p>
    </div>
  );
}
