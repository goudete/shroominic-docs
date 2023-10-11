

export default function Welcome() {

  return (
    <>
      <div className="col-span-3 overflow-y-auto">
        <div className="grid grid-cols-4 p-10">
          <div className="col-span-3">
            <div className="text-4xl font-extrabold mb-3">
              NUX
            </div>
            <div className="text-[#94949c]">
              NUX empowers non-technical users to easily run, test, version, and deploy &quot;stages&quot; of multimodal models in a sequential chain.
            </div>

            <div className="text-2xl font-extrabold mb-3 mt-12">
              Introduction
            </div>
            <div className="text-[#94949c]">
              Nux is made up of two main repositories:
            </div>
            <div className="text-[#94949c] mt-3">
              <ul>
                <li><a className="text-sky-600" href="https://github.com/nux-ai/api">API:</a> For authentication, chain and source management.</li>
                <li><a className="text-sky-600" href="https://github.com/nux-ai/dash">Dashboard:</a> UI interface that provides a visual interaction layer with the API.</li>
              </ul>
            </div>


          </div>


          {/* <div className="col-span-1">
          <div>On this page</div>
        </div> */}
        </div>
      </div>
    </>
  );
}