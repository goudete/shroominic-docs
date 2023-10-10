

export default function Welcome() {

  return (
    <>
      <div className="grid grid-cols-4 p-10">
        <div className="col-span-3">
          <div className="text-4xl font-extrabold mb-3">
            NUX
          </div>
          <div className="text-[#94949c]">
            NUX empowers non-technical users to easily run, test, version, and deploy "stages" of multimodal models in a sequential chain.
          </div>
        </div>
        <div className="col-span-1">
          <div>On this page</div>
        </div>
      </div>
    </>
  );
}