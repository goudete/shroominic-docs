import React from 'react';
import CodeBlockWithCopy from '../codeBlockWithCopy';

export default function APIQuickstart() {

  const dependenciesText = `Werkzeug==2.0.2
Flask==2.0.2
requests==2.28.2
sentence_transformers==2.2.2
jsonschema==3.2.0
tiktoken==0.3.3
tqdm==4.65.0
tika==1.24
numpy==1.23.2
chardet==4.0.0
pymongo==4.0
beautifulsoup4==4.12.2
flask_socketio==5.3.6
langchain==0.0.283
Pillow==10.0.0
pydub==0.25.1
PyPDF2==3.0.1
pytesseract==0.3.10
secrets==1.0.2
selenium==4.12.0
sentry_sdk==1.30.0
whisper==1.1.10
`;

  const configText = `openai_key = 'your_openai_key' 
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
}`;

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
              Dependencies
            </div>
            <CodeBlockWithCopy
              codeContent={dependenciesText}
              language='text'
            />
            <div className="text-2xl font-extrabold mb-3 mt-16">
              Supported Python Version
            </div>
            <CodeBlockWithCopy
              codeContent={`python 3.10`}
              language='text'
            />

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
              Clone the repository, navigate to the project directory and create a virtual environment:
            </div>
            <CodeBlockWithCopy
              codeContent={`git clone https://github.com/nux-ai/api.git
cd api
python -m venv venv`}
              language='bash'
            />
            <div className="text-[#94949c] mt-3">
              Install the required Python packages using pip:
            </div>
            <CodeBlockWithCopy
              codeContent={`pip install -r requirements.txt`}
              language='bash'
            />
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
            <CodeBlockWithCopy
              codeContent={configText}
              language='python'
            />

            <div className="text-2xl font-extrabold mb-3 mt-12">
              Step 5: Run the Application
            </div>
            <div className="text-[#94949c]">
              Finally, you can run the Flask application using the following command:
            </div>
            <CodeBlockWithCopy
              codeContent={`python manage.py`}
              language='bash'
            />
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