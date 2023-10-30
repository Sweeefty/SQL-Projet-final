import Template from "@/layout/template";

export default function Page() {
  return (
    <Template>
      <div className="h-screen flex items-center justify-center bg-gray-200 backdrop-blur-lg">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Bolide Allemand</h1>
          <p className="text-lg text-gray-600">La vraie location de luxe</p>
        </div>
      </div>
    </Template>
  );
}