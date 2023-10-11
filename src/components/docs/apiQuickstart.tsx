import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


export default function APIQuickstart() {

  return (
    <>
      <div className="col-span-4 md:col-span-3 overflow-y-auto">
        <div className="grid grid-cols-4 p-10">
          <div className="col-span-4 md:col-span-3">
            <div className="text-4xl font-extrabold mb-3">
              API Quickstart
            </div>
            <div className="text-[#94949c]">
              Get up and running with the NUX API in 5 minutes.
            </div>

            <div className="text-4xl font-extrabold mb-3 mt-16">
              Installation
            </div>
            <div className="text-[#94949c]">
              Follow these steps to install and setup the project:
            </div>

            <div className="text-2xl font-extrabold mb-3 mt-12">
              Step 1: Clone repository and install required Python Packages
            </div>
            <div className="text-[#94949c]">
              Navigate to the project directory and install the required Python packages using pip (using a virtual environment is recommended):
            </div>
            <div className="">
              <SyntaxHighlighter
                language="bash"
                style={a11yDark}
              >
                {`$ git clone https://github.com/nux-ai/api.git
$ cd api
$ pip install -r requirements.txt`}
              </SyntaxHighlighter>
            </div>

            <div className="text-2xl font-extrabold mb-3 mt-12">
              Step 2: Install MongoDB
            </div>
            <div className="text-[#94949c]">
              This project requires MongoDB. If you don&apos;t have MongoDB installed, you can download it from <a className="text-sky-600" href="https://www.mongodb.com/try/download/community">here</a>.
            </div>

            <div className="text-2xl font-extrabold mb-3 mt-12">
              Step 3: Install Chrome and ChromeDriver
            </div>
            <div className="text-[#94949c]">
              This project requires the Chrome web browser and the ChromeDriver executable for Selenium. You can download Chrome from <a className="text-sky-600" href="https://www.google.com/chrome/">here</a> and ChromeDriver from <a className="text-sky-600" href="https://sites.google.com/a/chromium.org/chromedriver/downloads">here</a>.
            </div>

            <div className="text-2xl font-extrabold mb-3 mt-12">
              Step 4: Setup config.py
            </div>
            <div className="text-[#94949c]">
              Ensure that the `config.py` file in the root directory of the project contains the following:
            </div>
            <div className="">
              <SyntaxHighlighter language="python" style={a11yDark}>
                {`openai_key = 'your_openai_key' 
eleven_labs_key = 'your_eleven_labs_key'
mixpeek_aws_creds = {
  "s3_bucket": "your_s3_bucket_name",
  "aws_access_key": "your_aws_access_key_id",
  "aws_secret_key": "your_aws_secret_access_key",
  "region": "us-east-2",
}
mongo_url = 'your_mongodb_url' # MongoDB URL and Atlas credentials for connecting to a specific MongoDB cluster
atlas_credentials = {
  'group_id': 'your_group_id',
  'cluster_name': 'your_cluster_name',
  'public_key': 'your_public_key',
  'private_key': 'your_private_key'
}
              `}
              </SyntaxHighlighter>
            </div>

            <div className="text-2xl font-extrabold mb-3 mt-12">
              Step 5: Run the Application
            </div>
            <div className="text-[#94949c]">
              Finally, you can run the Flask application using the following command:
            </div>
            <div className="">
              <SyntaxHighlighter language="bash" style={a11yDark}>
                {`$ python manage.py`}
              </SyntaxHighlighter>
            </div>
            <div className="text-[#94949c]">
              This will start up the Flask app with the API routes defined in the `Controllers` module.
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